import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Guest} from './guest.model';
import {Reservation} from './reservation.model';
import {Room} from './room.model';
import {Regime} from './regime.model';

@model({name: 'reservation_guest'})
export class ReservationGuest extends Entity {
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
  check_in: string;

  @property({
    type: 'number',
    required: true,
  })
  nights: number;

  @belongsTo(() => Guest)
  guestId: number;

  @belongsTo(() => Reservation)
  reservationId: number;

  @belongsTo(() => Room)
  roomId: number;

  @belongsTo(() => Regime)
  regimeId: number;

  constructor(data?: Partial<ReservationGuest>) {
    super(data);
  }
}

export interface ReservationGuestRelations {
  // describe navigational properties here
}

export type ReservationGuestWithRelations = ReservationGuest & ReservationGuestRelations;
