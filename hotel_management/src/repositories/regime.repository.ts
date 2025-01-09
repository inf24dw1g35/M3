import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {HotelDataSource} from '../datasources';
import {Regime, RegimeRelations} from '../models';

export class RegimeRepository extends DefaultCrudRepository<
  Regime,
  typeof Regime.prototype.id,
  RegimeRelations
> {
  constructor(
    @inject('datasources.hotel') dataSource: HotelDataSource,
  ) {
    super(Regime, dataSource);
  }
}
