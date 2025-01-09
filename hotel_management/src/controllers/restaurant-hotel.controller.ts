import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Restaurant,
  Hotel,
} from '../models';
import {RestaurantRepository} from '../repositories';

export class RestaurantHotelController {
  constructor(
    @repository(RestaurantRepository)
    public restaurantRepository: RestaurantRepository,
  ) { }

  @get('/restaurants/{id}/hotel', {
    responses: {
      '200': {
        description: 'Hotel belonging to Restaurant',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Hotel),
          },
        },
      },
    },
  })
  async getHotel(
    @param.path.number('id') id: typeof Restaurant.prototype.id,
  ): Promise<Hotel> {
    return this.restaurantRepository.hotel(id);
  }
}
