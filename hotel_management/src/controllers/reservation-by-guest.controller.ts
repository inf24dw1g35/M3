import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {ReservationGuest} from '../models';
import {ReservationGuestRepository} from '../repositories';

export class ReservationByGuestController {
  constructor(
    @repository(ReservationGuestRepository)
    public reservationGuestRepository : ReservationGuestRepository,
  ) {}

  @post('/reservation-guests')
  @response(200, {
    description: 'ReservationGuest model instance',
    content: {'application/json': {schema: getModelSchemaRef(ReservationGuest)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ReservationGuest, {
            title: 'NewReservationGuest',
            exclude: ['id'],
          }),
        },
      },
    })
    reservationGuest: Omit<ReservationGuest, 'id'>,
  ): Promise<ReservationGuest> {
    return this.reservationGuestRepository.create(reservationGuest);
  }

  @get('/reservation-guests/count')
  @response(200, {
    description: 'ReservationGuest model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ReservationGuest) where?: Where<ReservationGuest>,
  ): Promise<Count> {
    return this.reservationGuestRepository.count(where);
  }

  @get('/reservation-guests')
  @response(200, {
    description: 'Array of ReservationGuest model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ReservationGuest, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ReservationGuest) filter?: Filter<ReservationGuest>,
  ): Promise<ReservationGuest[]> {
    return this.reservationGuestRepository.find(filter);
  }

  @patch('/reservation-guests')
  @response(200, {
    description: 'ReservationGuest PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ReservationGuest, {partial: true}),
        },
      },
    })
    reservationGuest: ReservationGuest,
    @param.where(ReservationGuest) where?: Where<ReservationGuest>,
  ): Promise<Count> {
    return this.reservationGuestRepository.updateAll(reservationGuest, where);
  }

  @get('/reservation-guests/{id}')
  @response(200, {
    description: 'ReservationGuest model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ReservationGuest, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ReservationGuest, {exclude: 'where'}) filter?: FilterExcludingWhere<ReservationGuest>
  ): Promise<ReservationGuest> {
    return this.reservationGuestRepository.findById(id, filter);
  }

  @patch('/reservation-guests/{id}')
  @response(204, {
    description: 'ReservationGuest PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ReservationGuest, {partial: true}),
        },
      },
    })
    reservationGuest: ReservationGuest,
  ): Promise<void> {
    await this.reservationGuestRepository.updateById(id, reservationGuest);
  }

  @put('/reservation-guests/{id}')
  @response(204, {
    description: 'ReservationGuest PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() reservationGuest: ReservationGuest,
  ): Promise<void> {
    await this.reservationGuestRepository.replaceById(id, reservationGuest);
  }

  @del('/reservation-guests/{id}')
  @response(204, {
    description: 'ReservationGuest DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.reservationGuestRepository.deleteById(id);
  }
}
