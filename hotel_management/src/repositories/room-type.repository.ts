import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {HotelDataSource} from '../datasources';
import {RoomType, RoomTypeRelations, Room} from '../models';
import {RoomRepository} from './room.repository';

export class RoomTypeRepository extends DefaultCrudRepository<
  RoomType,
  typeof RoomType.prototype.id,
  RoomTypeRelations
> {

  public readonly rooms: HasManyRepositoryFactory<Room, typeof RoomType.prototype.id>;

  constructor(
    @inject('datasources.hotel') dataSource: HotelDataSource, @repository.getter('RoomRepository') protected roomRepositoryGetter: Getter<RoomRepository>,
  ) {
    super(RoomType, dataSource);
    this.rooms = this.createHasManyRepositoryFactoryFor('rooms', roomRepositoryGetter,);
    this.registerInclusionResolver('rooms', this.rooms.inclusionResolver);
  }
}
