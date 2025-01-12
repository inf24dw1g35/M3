import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {HotelDataSource} from '../datasources';
import {ReservationGuest, ReservationGuestRelations, Guest, Reservation, Room, Regime} from '../models';
import {GuestRepository} from './guest.repository';
import {ReservationRepository} from './reservation.repository';
import {RoomRepository} from './room.repository';
import {RegimeRepository} from './regime.repository';

export class ReservationGuestRepository extends DefaultCrudRepository<
  ReservationGuest,
  typeof ReservationGuest.prototype.id,
  ReservationGuestRelations
> {

  public readonly guest: BelongsToAccessor<Guest, typeof ReservationGuest.prototype.id>;

  public readonly reservation: BelongsToAccessor<Reservation, typeof ReservationGuest.prototype.id>;

  public readonly room: BelongsToAccessor<Room, typeof ReservationGuest.prototype.id>;

  public readonly regime: BelongsToAccessor<Regime, typeof ReservationGuest.prototype.id>;

  constructor(
    @inject('datasources.hotel') dataSource: HotelDataSource, @repository.getter('GuestRepository') protected guestRepositoryGetter: Getter<GuestRepository>, @repository.getter('ReservationRepository') protected reservationRepositoryGetter: Getter<ReservationRepository>, @repository.getter('RoomRepository') protected roomRepositoryGetter: Getter<RoomRepository>, @repository.getter('RegimeRepository') protected regimeRepositoryGetter: Getter<RegimeRepository>,
  ) {
    super(ReservationGuest, dataSource);
    this.regime = this.createBelongsToAccessorFor('regime', regimeRepositoryGetter,);
    this.registerInclusionResolver('regime', this.regime.inclusionResolver);
    this.room = this.createBelongsToAccessorFor('room', roomRepositoryGetter,);
    this.registerInclusionResolver('room', this.room.inclusionResolver);
    this.reservation = this.createBelongsToAccessorFor('reservation', reservationRepositoryGetter,);
    this.registerInclusionResolver('reservation', this.reservation.inclusionResolver);
    this.guest = this.createBelongsToAccessorFor('guest', guestRepositoryGetter,);
    this.registerInclusionResolver('guest', this.guest.inclusionResolver);
  }
}
