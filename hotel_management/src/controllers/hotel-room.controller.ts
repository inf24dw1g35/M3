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
  Hotel,
  Room,
} from '../models';
import {HotelRepository} from '../repositories';

export class HotelRoomController {
  constructor(
    @repository(HotelRepository) protected hotelRepository: HotelRepository,
  ) { }

  @get('/hotels/{id}/rooms', {
    responses: {
      '200': {
        description: 'Array of Hotel has many Room',
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
    return this.hotelRepository.rooms(id).find(filter);
  }

  @post('/hotels/{id}/rooms', {
    responses: {
      '200': {
        description: 'Hotel model instance',
        content: {'application/json': {schema: getModelSchemaRef(Room)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Hotel.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Room, {
            title: 'NewRoomInHotel',
            exclude: ['id'],
            optional: ['hotelId']
          }),
        },
      },
    }) room: Omit<Room, 'id'>,
  ): Promise<Room> {
    return this.hotelRepository.rooms(id).create(room);
  }

  @patch('/hotels/{id}/rooms', {
    responses: {
      '200': {
        description: 'Hotel.Room PATCH success count',
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
    return this.hotelRepository.rooms(id).patch(room, where);
  }

  @del('/hotels/{id}/rooms', {
    responses: {
      '200': {
        description: 'Hotel.Room DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Room)) where?: Where<Room>,
  ): Promise<Count> {
    return this.hotelRepository.rooms(id).delete(where);
  }
}
