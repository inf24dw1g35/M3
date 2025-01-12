import { Datagrid, List, TextField, NumberField } from 'react-admin';

export const RestaurantList = () => (
    <List>
        <Datagrid>
            <TextField source="id" label="ID" />
            <NumberField source="hotel_id" label="Hotel ID" />
            <TextField source="name" label="Restaurant Name" />
            <TextField source="category" label="Category" />
            <TextField source="meal_type" label="Meal Type" />
        </Datagrid>
    </List>
);
