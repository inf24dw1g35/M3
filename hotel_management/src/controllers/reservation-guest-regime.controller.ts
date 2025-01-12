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
  Regime,
} from '../models';
import {ReservationGuestRepository} from '../repositories';

export class ReservationGuestRegimeController {
  constructor(
    @repository(ReservationGuestRepository)
    public reservationGuestRepository: ReservationGuestRepository,
  ) { }

  @get('/reservation-guests/{id}/regime', {
    responses: {
      '200': {
        description: 'Regime belonging to ReservationGuest',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Regime),
          },
        },
      },
    },
  })
  async getRegime(
    @param.path.number('id') id: typeof ReservationGuest.prototype.id,
  ): Promise<Regime> {
    return this.reservationGuestRepository.regime(id);
  }
}
