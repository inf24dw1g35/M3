import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {Guest} from './guest.model';
import {ReservationGuest} from './reservation-guest.model';

@model({name: 'reservation'})
export class Reservation extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'date',
    required: true,
  })
  date: string;

  @property({
    type: 'string',
    required: true,
  })
  booking_method: string;

  @property({
    type: 'number',
    required: true,
  })
  guest_count: number;

  @property({
    type: 'string',
    required: true,
  })
  credit_card: string;

  @property({
    type: 'string',
    required: true,
  })
  guest_name: string;

  @property({
    type: 'string',
    required: true,
  })
  address: string;

  @property({
    type: 'string',
    required: true,
  })
  contact_phone: string;

  @belongsTo(() => Guest)
  guestId: number;

  @hasMany(() => ReservationGuest)
  reservationGuests: ReservationGuest[];

  constructor(data?: Partial<Reservation>) {
    super(data);
  }
}

export interface ReservationRelations {
  // describe navigational properties here
}

export type ReservationWithRelations = Reservation & ReservationRelations;
