import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {HotelDataSource} from '../datasources';
import {Restaurant, RestaurantRelations, Hotel} from '../models';
import {HotelRepository} from './hotel.repository';

export class RestaurantRepository extends DefaultCrudRepository<
  Restaurant,
  typeof Restaurant.prototype.id,
  RestaurantRelations
> {

  public readonly hotel: BelongsToAccessor<Hotel, typeof Restaurant.prototype.id>;

  constructor(
    @inject('datasources.hotel') dataSource: HotelDataSource, @repository.getter('HotelRepository') protected hotelRepositoryGetter: Getter<HotelRepository>,
  ) {
    super(Restaurant, dataSource);
    this.hotel = this.createBelongsToAccessorFor('hotel', hotelRepositoryGetter,);
    this.registerInclusionResolver('hotel', this.hotel.inclusionResolver);
  }
}
