import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory} from '@loopback/repository';
import {HotelDataSource} from '../datasources';
import {Reservation, ReservationRelations, Guest, ReservationGuest} from '../models';
import {GuestRepository} from './guest.repository';
import {ReservationGuestRepository} from './reservation-guest.repository';

export class ReservationRepository extends DefaultCrudRepository<
  Reservation,
  typeof Reservation.prototype.id,
  ReservationRelations
> {

  public readonly guest: BelongsToAccessor<Guest, typeof Reservation.prototype.id>;

  public readonly reservationGuests: HasManyRepositoryFactory<ReservationGuest, typeof Reservation.prototype.id>;

  constructor(
    @inject('datasources.hotel') dataSource: HotelDataSource, @repository.getter('GuestRepository') protected guestRepositoryGetter: Getter<GuestRepository>, @repository.getter('ReservationGuestRepository') protected reservationGuestRepositoryGetter: Getter<ReservationGuestRepository>,
  ) {
    super(Reservation, dataSource);
    this.reservationGuests = this.createHasManyRepositoryFactoryFor('reservationGuests', reservationGuestRepositoryGetter,);
    this.registerInclusionResolver('reservationGuests', this.reservationGuests.inclusionResolver);
    this.guest = this.createBelongsToAccessorFor('guest', guestRepositoryGetter,);
    this.registerInclusionResolver('guest', this.guest.inclusionResolver);
  }
}
