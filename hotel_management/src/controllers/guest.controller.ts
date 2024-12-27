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
import {Guest} from '../models';
import {GuestRepository} from '../repositories';

export class Guests {
  constructor(
    @repository(GuestRepository)
    public guestRepository : GuestRepository,
  ) {}

  @post('/guests')
  @response(200, {
    description: 'Guest model instance',
    content: {'application/json': {schema: getModelSchemaRef(Guest)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Guest, {
            title: 'NewGuest',
            exclude: ['id'],
          }),
        },
      },
    })
    guest: Omit<Guest, 'id'>,
  ): Promise<Guest> {
    return this.guestRepository.create(guest);
  }

  @get('/guests/count')
  @response(200, {
    description: 'Guest model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Guest) where?: Where<Guest>,
  ): Promise<Count> {
    return this.guestRepository.count(where);
  }

  @get('/guests')
  @response(200, {
    description: 'Array of Guest model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Guest, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Guest) filter?: Filter<Guest>,
  ): Promise<Guest[]> {
    return this.guestRepository.find(filter);
  }

  @patch('/guests')
  @response(200, {
    description: 'Guest PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Guest, {partial: true}),
        },
      },
    })
    guest: Guest,
    @param.where(Guest) where?: Where<Guest>,
  ): Promise<Count> {
    return this.guestRepository.updateAll(guest, where);
  }

  @get('/guests/{id}')
  @response(200, {
    description: 'Guest model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Guest, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Guest, {exclude: 'where'}) filter?: FilterExcludingWhere<Guest>
  ): Promise<Guest> {
    return this.guestRepository.findById(id, filter);
  }

  @patch('/guests/{id}')
  @response(204, {
    description: 'Guest PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Guest, {partial: true}),
        },
      },
    })
    guest: Guest,
  ): Promise<void> {
    await this.guestRepository.updateById(id, guest);
  }

  @put('/guests/{id}')
  @response(204, {
    description: 'Guest PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() guest: Guest,
  ): Promise<void> {
    await this.guestRepository.replaceById(id, guest);
  }

  @del('/guests/{id}')
  @response(204, {
    description: 'Guest DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.guestRepository.deleteById(id);
  }
}
