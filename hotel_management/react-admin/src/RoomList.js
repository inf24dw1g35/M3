import { Datagrid, List, NumberField, ReferenceField, TextField } from 'react-admin';

export const RoomList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <NumberField source="number" />
            <NumberField source="price" />
            <ReferenceField source="hotelId" reference="hotels" />
            <ReferenceField source="roomTypeId" reference="roomTypes" />
        </Datagrid>
    </List>
);