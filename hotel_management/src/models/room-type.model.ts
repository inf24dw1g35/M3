import {Entity, model, property, hasMany} from '@loopback/repository';
import {Room} from './room.model';

@model({
  name: 'room_type' // Alinhe com o nome da tabela no banco
})
export class RoomType extends Entity {
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
  description: string;

  @property({
    type: 'number',
    required: true,
  })
  capacity: number;

  @hasMany(() => Room)
  rooms: Room[];

  constructor(data?: Partial<RoomType>) {
    super(data);
  }
}

export interface RoomTypeRelations {
  // describe navigational properties here
}

export type RoomTypeWithRelations = RoomType & RoomTypeRelations;
