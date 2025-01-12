import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Reservation,
  Guest,
} from '../models';
import {ReservationRepository} from '../repositories';

export class ReservationGuestController {
  constructor(
    @repository(ReservationRepository)
    public reservationRepository: ReservationRepository,
  ) { }

  @get('/reservations/{id}/guest', {
    responses: {
      '200': {
        description: 'Guest belonging to Reservation',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Guest),
          },
        },
      },
    },
  })
  async getGuest(
    @param.path.number('id') id: typeof Reservation.prototype.id,
  ): Promise<Guest> {
    return this.reservationRepository.guest(id);
  }
}
