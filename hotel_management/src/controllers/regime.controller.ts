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
import {Regime} from '../models';
import {RegimeRepository} from '../repositories';

export class RegimeController {
  constructor(
    @repository(RegimeRepository)
    public regimeRepository : RegimeRepository,
  ) {}

  @post('/regimes')
  @response(200, {
    description: 'Regime model instance',
    content: {'application/json': {schema: getModelSchemaRef(Regime)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Regime, {
            title: 'NewRegime',
            exclude: ['id'],
          }),
        },
      },
    })
    regime: Omit<Regime, 'id'>,
  ): Promise<Regime> {
    return this.regimeRepository.create(regime);
  }

  @get('/regimes/count')
  @response(200, {
    description: 'Regime model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Regime) where?: Where<Regime>,
  ): Promise<Count> {
    return this.regimeRepository.count(where);
  }

  @get('/regimes')
  @response(200, {
    description: 'Array of Regime model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Regime, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Regime) filter?: Filter<Regime>,
  ): Promise<Regime[]> {
    return this.regimeRepository.find(filter);
  }

  @patch('/regimes')
  @response(200, {
    description: 'Regime PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Regime, {partial: true}),
        },
      },
    })
    regime: Regime,
    @param.where(Regime) where?: Where<Regime>,
  ): Promise<Count> {
    return this.regimeRepository.updateAll(regime, where);
  }

  @get('/regimes/{id}')
  @response(200, {
    description: 'Regime model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Regime, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Regime, {exclude: 'where'}) filter?: FilterExcludingWhere<Regime>
  ): Promise<Regime> {
    return this.regimeRepository.findById(id, filter);
  }

  @patch('/regimes/{id}')
  @response(204, {
    description: 'Regime PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Regime, {partial: true}),
        },
      },
    })
    regime: Regime,
  ): Promise<void> {
    await this.regimeRepository.updateById(id, regime);
  }

  @put('/regimes/{id}')
  @response(204, {
    description: 'Regime PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() regime: Regime,
  ): Promise<void> {
    await this.regimeRepository.replaceById(id, regime);
  }

  @del('/regimes/{id}')
  @response(204, {
    description: 'Regime DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.regimeRepository.deleteById(id);
  }
}
