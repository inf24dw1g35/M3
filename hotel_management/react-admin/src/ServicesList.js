import { Datagrid, List, ReferenceField, TextField } from 'react-admin';

export const ServiceList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <ReferenceField source="hotelId" reference="hotels" />
        </Datagrid>
    </List>
);