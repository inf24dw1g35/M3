import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Room,
  RoomType,
} from '../models';
import {RoomRepository} from '../repositories';

export class RoomRoomTypeController {
  constructor(
    @repository(RoomRepository)
    public roomRepository: RoomRepository,
  ) { }

  @get('/rooms/{id}/room-type', {
    responses: {
      '200': {
        description: 'RoomType belonging to Room',
        content: {
          'application/json': {
            schema: getModelSchemaRef(RoomType),
          },
        },
      },
    },
  })
  async getRoomType(
    @param.path.number('id') id: typeof Room.prototype.id,
  ): Promise<RoomType> {
    return this.roomRepository.roomType(id);
  }
}
