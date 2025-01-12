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
  Guest,
} from '../models';
import {ReservationGuestRepository} from '../repositories';

export class ReservationGuestGuestController {
  constructor(
    @repository(ReservationGuestRepository)
    public reservationGuestRepository: ReservationGuestRepository,
  ) { }

  @get('/reservation-guests/{id}/guest', {
    responses: {
      '200': {
        description: 'Guest belonging to ReservationGuest',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Guest),
          },
        },
      },
    },
  })
  async getGuest(
    @param.path.number('id') id: typeof ReservationGuest.prototype.id,
  ): Promise<Guest> {
    return this.reservationGuestRepository.guest(id);
  }
}
