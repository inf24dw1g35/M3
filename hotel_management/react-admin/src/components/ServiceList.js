import { Datagrid, List, TextField, NumberField } from 'react-admin';

export const ServiceList = () => (
    <List>
        <Datagrid>
            <TextField source="id" label="ID" />
            <NumberField source="hotel_id" label="Hotel ID" />
            <TextField source="name" label="Service Name" />
        </Datagrid>
    </List>
);