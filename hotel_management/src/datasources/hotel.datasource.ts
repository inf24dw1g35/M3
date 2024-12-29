import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'hotel',
  connector: 'mysql',
  url: '',
  host: process.env.MYSQL_HOST,
  port: +(process.env.MYSQL_PORT || 3306),
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || '12345678',
  database: process.env.MYSQL_DATABASE || 'hotel',
};

@lifeCycleObserver('datasource')
export class HotelDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'hotel';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.hotel', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}