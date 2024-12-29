import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import lb4Provider from "react-admin-lb4";

const dataProvider = lb4Provider('http://localhost:3000');

const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="hotels" list={ListGuesser} edit={EditGuesser} />
        <Resource name="rooms" list={ListGuesser} edit={EditGuesser} />
        <Resource name="guests" list={ListGuesser} edit={EditGuesser} />
    </Admin>
);

export default App;