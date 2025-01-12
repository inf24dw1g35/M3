
import { Admin, Resource } from "react-admin";
import lb4Provider from "react-admin-lb4";
import { HotelList } from "./components/HotelList";  // Componente de listagem de hotéis
import { GuestList } from "./components/GuestList";  // Componente de listagem de hóspedes
import { ServiceList } from "./components/ServiceList";
import { RestaurantList } from "./components/RestaurantList";
import { RoomList } from "./components/RoomList";

import { HotelCreate } from "./components/HotelCreate"; // Componente de criação de hotel
import { GuestCreate } from "./components/GuestCreate";
import { RestaurantCreate } from "./components/RestaurantCreate";
import { RoomCreate } from "./components/RoomCreate";
import { ServiceCreate } from "./components/ServiceCreate";

import { HotelEdit } from "./components/HotelEdit";   // Componente de edição de hotel
import { GuestEdit } from "./components/GuestEdit";   // Componente de edição de hotel
import { RestaurantEdit } from "./components/RestaurantEdit";   // Componente de edição de hotel
import { RoomEdit } from "./components/RoomEdit";   // Componente de edição de hotel
import { ServiceEdit } from "./components/ServiceEdit";   // Componente de edição de hotel
import { ReservationList } from "./ReservationList";


const dataProvider = lb4Provider("http://localhost:3000");


const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="rooms" create={RoomCreate} edit={RoomEdit} list={RoomList} />
    <Resource name="guests" create={GuestCreate} edit={GuestEdit} list={GuestList} />
    <Resource name="restaurants" create={RestaurantCreate} edit={RestaurantEdit} list={RestaurantList} />
    <Resource name="services" create={ServiceCreate} edit={ServiceEdit} list={ServiceList} />
    <Resource name="hotels" create={HotelCreate} edit={HotelEdit} list={HotelList} />
    <Resource name="reservations" list={ReservationList} />
  </Admin>
);

export default App;