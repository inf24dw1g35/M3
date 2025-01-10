import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Hotel} from './hotel.model';

@model({
  name: 'restaurant' // Alinhe com o nome da tabela no banco
})
export class Restaurant extends Entity {
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
  category: string;

  @property({
    type: 'string',
    required: true,
  })
  meal_type: string;

  @belongsTo(() => Hotel, {name: 'hotel_id'})
  hotelId: number;

  constructor(data?: Partial<Restaurant>) {
    super(data);
  }
}

export interface RestaurantRelations {
  // describe navigational properties here
}

export type RestaurantWithRelations = Restaurant & RestaurantRelations;
