import {Entity, model, property} from '@loopback/repository';

@model()
export class Hotel extends Entity {
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
    type: 'number',
    required: true,
  })
  stars: number;

  @property({
    type: 'string',
    required: true,
  })
  address: string;

  @property({
    type: 'string',
    required: true,
  })
  city: string;

  @property({
    type: 'string',
    required: true,
  })
  country: string;


  constructor(data?: Partial<Hotel>) {
    super(data);
  }
}

export interface HotelRelations {
  // describe navigational properties here
}

export type HotelWithRelations = Hotel & HotelRelations;
