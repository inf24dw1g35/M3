import {Entity, model, property} from '@loopback/repository';

@model()
export class Guest extends Entity {
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

  @property({
    type: 'string',
    required: true,
  })
  id_card: string;

  @property({
    type: 'string',
  })
  phone?: string;

  @property({
    type: 'string',
    required: true,
  })
  address: string;

  @property({
    type: 'string',
    required: true,
  })
  country: string;


  constructor(data?: Partial<Guest>) {
    super(data);
  }
}

export interface GuestRelations {
  // describe navigational properties here
}

export type GuestWithRelations = Guest & GuestRelations;