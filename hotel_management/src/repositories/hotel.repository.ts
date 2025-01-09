import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {HotelDataSource} from '../datasources';
import {Hotel, HotelRelations, Room, Restaurant, Service} from '../models';
import {RoomRepository} from './room.repository';
import {RestaurantRepository} from './restaurant.repository';
import {ServiceRepository} from './service.repository';

export class HotelRepository extends DefaultCrudRepository<
  Hotel,
  typeof Hotel.prototype.id,
  HotelRelations
> {

  public readonly rooms: HasManyRepositoryFactory<Room, typeof Hotel.prototype.id>;

  public readonly restaurants: HasManyRepositoryFactory<Restaurant, typeof Hotel.prototype.id>;

  public readonly services: HasManyRepositoryFactory<Service, typeof Hotel.prototype.id>;

  constructor(
    @inject('datasources.hotel') dataSource: HotelDataSource, @repository.getter('RoomRepository') protected roomRepositoryGetter: Getter<RoomRepository>, @repository.getter('RestaurantRepository') protected restaurantRepositoryGetter: Getter<RestaurantRepository>, @repository.getter('ServiceRepository') protected serviceRepositoryGetter: Getter<ServiceRepository>,
  ) {
    super(Hotel, dataSource);
    this.services = this.createHasManyRepositoryFactoryFor('services', serviceRepositoryGetter,);
    this.registerInclusionResolver('services', this.services.inclusionResolver);
    this.restaurants = this.createHasManyRepositoryFactoryFor('restaurants', restaurantRepositoryGetter,);
    this.registerInclusionResolver('restaurants', this.restaurants.inclusionResolver);
    this.rooms = this.createHasManyRepositoryFactoryFor('rooms', roomRepositoryGetter,);
    this.registerInclusionResolver('rooms', this.rooms.inclusionResolver);
  }
}
