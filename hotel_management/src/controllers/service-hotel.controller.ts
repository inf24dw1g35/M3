import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Service,
  Hotel,
} from '../models';
import {ServiceRepository} from '../repositories';

export class ServiceHotelController {
  constructor(
    @repository(ServiceRepository)
    public serviceRepository: ServiceRepository,
  ) { }

  @get('/services/{id}/hotel', {
    responses: {
      '200': {
        description: 'Hotel belonging to Service',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Hotel),
          },
        },
      },
    },
  })
  async getHotel(
    @param.path.number('id') id: typeof Service.prototype.id,
  ): Promise<Hotel> {
    return this.serviceRepository.hotel(id);
  }
}
