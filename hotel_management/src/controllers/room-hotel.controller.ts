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
  Hotel,
} from '../models';
import {RoomRepository} from '../repositories';

export class Rooms_Hotel {
  constructor(
    @repository(RoomRepository)
    public roomRepository: RoomRepository,
  ) { }

  @get('/rooms/{id}/hotel', {
    responses: {
      '200': {
        description: 'Hotel belonging to Room',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Hotel),
          },
        },
      },
    },
  })
  async getHotel(
    @param.path.number('id') id: typeof Room.prototype.id,
  ): Promise<Hotel> {
    return this.roomRepository.hotel(id);
  }
}
