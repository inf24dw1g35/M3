import React from 'react';
import { List, Datagrid, TextField, NumberField } from 'react-admin';

export const HotelList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <NumberField source="stars" />
            <TextField source="address" />
            <TextField source="city" />
            <TextField source="country" />
        </Datagrid>
    </List>
);
