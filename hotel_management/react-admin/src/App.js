import { Admin, Resource, ListGuesser } from "react-admin";
import lb4Provider from "react-admin-lb4";
import { HotelList } from "./HotelList";
import { GuestList } from "./GuestList";

const dataProvider = lb4Provider("http://localhost:3000");

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="hotels" list={HotelList} />
    <Resource name="rooms" list={ListGuesser} />
    <Resource name="guests" list={GuestList} />
    <Resource name="restaurants" list={ListGuesser} />
    <Resource name="services" list={ListGuesser} />
  </Admin>
);

export default App;