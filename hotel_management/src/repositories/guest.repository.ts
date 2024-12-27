import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {HotelDataSource} from '../datasources';
import {Guest, GuestRelations} from '../models';

export class GuestRepository extends DefaultCrudRepository<
  Guest,
  typeof Guest.prototype.id,
  GuestRelations
> {
  constructor(
    @inject('datasources.hotel') dataSource: HotelDataSource,
  ) {
    super(Guest, dataSource);
  }
}
