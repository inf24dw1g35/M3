import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  ReservationGuest,
  Room,
} from '../models';
import {ReservationGuestRepository} from '../repositories';

export class ReservationGuestRoomController {
  constructor(
    @repository(ReservationGuestRepository)
    public reservationGuestRepository: ReservationGuestRepository,
  ) { }

  @get('/reservation-guests/{id}/room', {
    responses: {
      '200': {
        description: 'Room belonging to ReservationGuest',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Room),
          },
        },
      },
    },
  })
  async getRoom(
    @param.path.number('id') id: typeof ReservationGuest.prototype.id,
  ): Promise<Room> {
    return this.reservationGuestRepository.room(id);
  }
}
