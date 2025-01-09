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
import {Restaurant} from '../models';
import {RestaurantRepository} from '../repositories';

export class RestaurantController {
  constructor(
    @repository(RestaurantRepository)
    public restaurantRepository : RestaurantRepository,
  ) {}

  @post('/restaurants')
  @response(200, {
    description: 'Restaurant model instance',
    content: {'application/json': {schema: getModelSchemaRef(Restaurant)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Restaurant, {
            title: 'NewRestaurant',
            exclude: ['id'],
          }),
        },
      },
    })
    restaurant: Omit<Restaurant, 'id'>,
  ): Promise<Restaurant> {
    return this.restaurantRepository.create(restaurant);
  }

  @get('/restaurants/count')
  @response(200, {
    description: 'Restaurant model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Restaurant) where?: Where<Restaurant>,
  ): Promise<Count> {
    return this.restaurantRepository.count(where);
  }

  @get('/restaurants')
  @response(200, {
    description: 'Array of Restaurant model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Restaurant, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Restaurant) filter?: Filter<Restaurant>,
  ): Promise<Restaurant[]> {
    return this.restaurantRepository.find(filter);
  }

  @patch('/restaurants')
  @response(200, {
    description: 'Restaurant PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Restaurant, {partial: true}),
        },
      },
    })
    restaurant: Restaurant,
    @param.where(Restaurant) where?: Where<Restaurant>,
  ): Promise<Count> {
    return this.restaurantRepository.updateAll(restaurant, where);
  }

  @get('/restaurants/{id}')
  @response(200, {
    description: 'Restaurant model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Restaurant, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Restaurant, {exclude: 'where'}) filter?: FilterExcludingWhere<Restaurant>
  ): Promise<Restaurant> {
    return this.restaurantRepository.findById(id, filter);
  }

  @patch('/restaurants/{id}')
  @response(204, {
    description: 'Restaurant PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Restaurant, {partial: true}),
        },
      },
    })
    restaurant: Restaurant,
  ): Promise<void> {
    await this.restaurantRepository.updateById(id, restaurant);
  }

  @put('/restaurants/{id}')
  @response(204, {
    description: 'Restaurant PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() restaurant: Restaurant,
  ): Promise<void> {
    await this.restaurantRepository.replaceById(id, restaurant);
  }

  @del('/restaurants/{id}')
  @response(204, {
    description: 'Restaurant DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.restaurantRepository.deleteById(id);
  }
}
