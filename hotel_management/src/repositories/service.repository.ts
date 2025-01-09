import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {HotelDataSource} from '../datasources';
import {Service, ServiceRelations, Hotel} from '../models';
import {HotelRepository} from './hotel.repository';

export class ServiceRepository extends DefaultCrudRepository<
  Service,
  typeof Service.prototype.id,
  ServiceRelations
> {

  public readonly hotel: BelongsToAccessor<Hotel, typeof Service.prototype.id>;

  constructor(
    @inject('datasources.hotel') dataSource: HotelDataSource, @repository.getter('HotelRepository') protected hotelRepositoryGetter: Getter<HotelRepository>,
  ) {
    super(Service, dataSource);
    this.hotel = this.createBelongsToAccessorFor('hotel', hotelRepositoryGetter,);
    this.registerInclusionResolver('hotel', this.hotel.inclusionResolver);
  }
}
