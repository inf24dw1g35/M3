import {Entity, model, property} from '@loopback/repository';

@model({
  name: 'regime' // Alinhe com o nome da tabela no banco
})
export class Regime extends Entity {
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
  type: string;

  @property({
    type: 'string',
    required: true,
  })
  price: string;


  constructor(data?: Partial<Regime>) {
    super(data);
  }
}

export interface RegimeRelations {
  // describe navigational properties here
}

export type RegimeWithRelations = Regime & RegimeRelations;
