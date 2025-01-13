import { Datagrid, List, TextField } from 'react-admin';
import StarField from './StarField'; 
import FlagField from './FlagField'; // Certifique-se de que este é o FlagField correto

export const HotelList = () => (
    <List>
        <Datagrid>
            <TextField source="id" label="ID" />
            <TextField source="name" label="Name" />
            <TextField source="stars" label="Stars" />
            <TextField source="address" label="Address" />
            <TextField source="city" label="City" />
            <TextField source="country" label="Country" /> {/* Certifique-se que country é passado */}
        </Datagrid>
    </List>
);

