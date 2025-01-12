import { Datagrid, List, TextField } from 'react-admin';
import StarField from './StarField'; // Importa o componente StarField
import FlagField from './FlagField'; // Importa o componente FlagField

export const HotelList = () => (
    <List>
        <Datagrid>
            <TextField source="id" label="ID" />
            <TextField source="name" label="Name" />
            <StarField source="stars" label="Stars" />
            <TextField source="address" label="Address" />
            <TextField source="city" label="City" />
            <FlagField source="country" label="Country" /> {/* Usa FlagField para o campo country */}
        </Datagrid>
    </List>
);
