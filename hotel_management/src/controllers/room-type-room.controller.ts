import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  RoomType,
  Room,
} from '../models';
import {RoomTypeRepository} from '../repositories';

export class RoomTypeRoomController {
  constructor(
    @repository(RoomTypeRepository) protected roomTypeRepository: RoomTypeRepository,
  ) { }

  @get('/room-types/{id}/rooms', {
    responses: {
      '200': {
        description: 'Array of RoomType has many Room',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Room)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Room>,
  ): Promise<Room[]> {
    return this.roomTypeRepository.rooms(id).find(filter);
  }

  @post('/room-types/{id}/rooms', {
    responses: {
      '200': {
        description: 'RoomType model instance',
        content: {'application/json': {schema: getModelSchemaRef(Room)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof RoomType.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Room, {
            title: 'NewRoomInRoomType',
            exclude: ['id'],
            optional: ['roomTypeId']
          }),
        },
      },
    }) room: Omit<Room, 'id'>,
  ): Promise<Room> {
    return this.roomTypeRepository.rooms(id).create(room);
  }

  @patch('/room-types/{id}/rooms', {
    responses: {
      '200': {
        description: 'RoomType.Room PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Room, {partial: true}),
        },
      },
    })
    room: Partial<Room>,
    @param.query.object('where', getWhereSchemaFor(Room)) where?: Where<Room>,
  ): Promise<Count> {
    return this.roomTypeRepository.rooms(id).patch(room, where);
  }

  @del('/room-types/{id}/rooms', {
    responses: {
      '200': {
        description: 'RoomType.Room DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Room)) where?: Where<Room>,
  ): Promise<Count> {
    return this.roomTypeRepository.rooms(id).delete(where);
  }
}
