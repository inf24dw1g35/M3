import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Hotel} from './hotel.model';
import {RoomType} from './room-type.model';

@model({
  name: 'room' // Alinhe com o nome da tabela no banco
})
export class Room extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  number: number;

  @property({
    type: 'number',
    required: true,
  })
  price: number;

  @belongsTo(() => Hotel)
  hotelId: number;

  @belongsTo(() => RoomType)
  roomTypeId: number;

  constructor(data?: Partial<Room>) {
    super(data);
  }
}

export interface RoomRelations {
  // describe navigational properties here
}

export type RoomWithRelations = Room & RoomRelations;
