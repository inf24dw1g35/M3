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
  Reservation,
} from '../models';
import {ReservationGuestRepository} from '../repositories';

export class ReservationGuestReservationController {
  constructor(
    @repository(ReservationGuestRepository)
    public reservationGuestRepository: ReservationGuestRepository,
  ) { }

  @get('/reservation-guests/{id}/reservation', {
    responses: {
      '200': {
        description: 'Reservation belonging to ReservationGuest',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Reservation),
          },
        },
      },
    },
  })
  async getReservation(
    @param.path.number('id') id: typeof ReservationGuest.prototype.id,
  ): Promise<Reservation> {
    return this.reservationGuestRepository.reservation(id);
  }
}
