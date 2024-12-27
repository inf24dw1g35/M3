import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {HotelDataSource} from '../datasources';
import {Room, RoomRelations, Hotel, RoomType} from '../models';
import {HotelRepository} from './hotel.repository';
import {RoomTypeRepository} from './room-type.repository';

export class RoomRepository extends DefaultCrudRepository<
  Room,
  typeof Room.prototype.id,
  RoomRelations
> {

  public readonly hotel: BelongsToAccessor<Hotel, typeof Room.prototype.id>;

  public readonly roomType: BelongsToAccessor<RoomType, typeof Room.prototype.id>;

  constructor(
    @inject('datasources.hotel') dataSource: HotelDataSource, @repository.getter('HotelRepository') protected hotelRepositoryGetter: Getter<HotelRepository>, @repository.getter('RoomTypeRepository') protected roomTypeRepositoryGetter: Getter<RoomTypeRepository>,
  ) {
    super(Room, dataSource);
    this.roomType = this.createBelongsToAccessorFor('roomType', roomTypeRepositoryGetter,);
    this.registerInclusionResolver('roomType', this.roomType.inclusionResolver);
    this.hotel = this.createBelongsToAccessorFor('hotel', hotelRepositoryGetter,);
    this.registerInclusionResolver('hotel', this.hotel.inclusionResolver);
  }
}
