import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {HotelDataSource} from '../datasources';
import {Hotel, HotelRelations, Room} from '../models';
import {RoomRepository} from './room.repository';

export class HotelRepository extends DefaultCrudRepository<
  Hotel,
  typeof Hotel.prototype.id,
  HotelRelations
> {

  public readonly rooms: HasManyRepositoryFactory<Room, typeof Hotel.prototype.id>;

  constructor(
    @inject('datasources.hotel') dataSource: HotelDataSource, @repository.getter('RoomRepository') protected roomRepositoryGetter: Getter<RoomRepository>,
  ) {
    super(Hotel, dataSource);
    this.rooms = this.createHasManyRepositoryFactoryFor('rooms', roomRepositoryGetter,);
    this.registerInclusionResolver('rooms', this.rooms.inclusionResolver);
  }
}
