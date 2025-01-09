import { Admin, Resource, ListGuesser } from "react-admin";
import lb4Provider from "react-admin-lb4";
import { HotelList } from './pages/HotelList';
import { RoomList } from './pages/RoomList';
import { GuestList } from './pages/GuestList';
import { ReservationList } from './pages/ReservationList';

const dataProvider = lb4Provider("http://localhost:3000");
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="hotels" list={ListGuesser} />
    <Resource name="rooms" list={ListGuesser} />
    <Resource name="guests" list={ListGuesser} />
    <Resource name="reservations" list={ListGuesser} />
  </Admin>
);
export default App;