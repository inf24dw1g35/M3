import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Hotel} from './hotel.model';

@model({
  name: 'service' // O nome da tabela no banco de dados
})
export class Service extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  // Relacionamento correto com a chave estrangeira
  @belongsTo(() => Hotel)
  hotelId: number;

  constructor(data?: Partial<Service>) {
    super(data);
  }
}

export interface ServiceRelations {
  // describe navigational properties here
}

export type ServiceWithRelations = Service & ServiceRelations;
