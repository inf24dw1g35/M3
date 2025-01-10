import { Datagrid, List, TextField } from 'react-admin';

export const GuestList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="id_card" />
            <TextField source="phone" />
            <TextField source="address" />
            <TextField source="country" />
        </Datagrid>
    </List>
);