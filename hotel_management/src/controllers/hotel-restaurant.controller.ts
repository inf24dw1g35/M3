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
  Hotel,
  Restaurant,
} from '../models';
import {HotelRepository} from '../repositories';

export class HotelRestaurantController {
  constructor(
    @repository(HotelRepository) protected hotelRepository: HotelRepository,
  ) { }

  @get('/hotels/{id}/restaurants', {
    responses: {
      '200': {
        description: 'Array of Hotel has many Restaurant',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Restaurant)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Restaurant>,
  ): Promise<Restaurant[]> {
    return this.hotelRepository.restaurants(id).find(filter);
  }

  @post('/hotels/{id}/restaurants', {
    responses: {
      '200': {
        description: 'Hotel model instance',
        content: {'application/json': {schema: getModelSchemaRef(Restaurant)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Hotel.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Restaurant, {
            title: 'NewRestaurantInHotel',
            exclude: ['id'],
            optional: ['hotelId']
          }),
        },
      },
    }) restaurant: Omit<Restaurant, 'id'>,
  ): Promise<Restaurant> {
    return this.hotelRepository.restaurants(id).create(restaurant);
  }

  @patch('/hotels/{id}/restaurants', {
    responses: {
      '200': {
        description: 'Hotel.Restaurant PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Restaurant, {partial: true}),
        },
      },
    })
    restaurant: Partial<Restaurant>,
    @param.query.object('where', getWhereSchemaFor(Restaurant)) where?: Where<Restaurant>,
  ): Promise<Count> {
    return this.hotelRepository.restaurants(id).patch(restaurant, where);
  }

  @del('/hotels/{id}/restaurants', {
    responses: {
      '200': {
        description: 'Hotel.Restaurant DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Restaurant)) where?: Where<Restaurant>,
  ): Promise<Count> {
    return this.hotelRepository.restaurants(id).delete(where);
  }
}
