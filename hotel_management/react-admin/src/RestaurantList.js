import { Datagrid, List, ReferenceField, TextField } from 'react-admin';

export const RestaurantList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="category" />
            <TextField source="meal_type" />
            <ReferenceField source="hotelId" reference="hotels" />
        </Datagrid>
    </List>
);