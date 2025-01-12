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
  Reservation,
  ReservationGuest,
} from '../models';
import {ReservationRepository} from '../repositories';

export class ReservationReservationGuestController {
  constructor(
    @repository(ReservationRepository) protected reservationRepository: ReservationRepository,
  ) { }

  @get('/reservations/{id}/reservation-guests', {
    responses: {
      '200': {
        description: 'Array of Reservation has many ReservationGuest',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(ReservationGuest)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<ReservationGuest>,
  ): Promise<ReservationGuest[]> {
    return this.reservationRepository.reservationGuests(id).find(filter);
  }

  @post('/reservations/{id}/reservation-guests', {
    responses: {
      '200': {
        description: 'Reservation model instance',
        content: {'application/json': {schema: getModelSchemaRef(ReservationGuest)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Reservation.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ReservationGuest, {
            title: 'NewReservationGuestInReservation',
            exclude: ['id'],
            optional: ['reservationId']
          }),
        },
      },
    }) reservationGuest: Omit<ReservationGuest, 'id'>,
  ): Promise<ReservationGuest> {
    return this.reservationRepository.reservationGuests(id).create(reservationGuest);
  }

  @patch('/reservations/{id}/reservation-guests', {
    responses: {
      '200': {
        description: 'Reservation.ReservationGuest PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ReservationGuest, {partial: true}),
        },
      },
    })
    reservationGuest: Partial<ReservationGuest>,
    @param.query.object('where', getWhereSchemaFor(ReservationGuest)) where?: Where<ReservationGuest>,
  ): Promise<Count> {
    return this.reservationRepository.reservationGuests(id).patch(reservationGuest, where);
  }

  @del('/reservations/{id}/reservation-guests', {
    responses: {
      '200': {
        description: 'Reservation.ReservationGuest DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(ReservationGuest)) where?: Where<ReservationGuest>,
  ): Promise<Count> {
    return this.reservationRepository.reservationGuests(id).delete(where);
  }
}
