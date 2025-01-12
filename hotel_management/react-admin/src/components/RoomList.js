import { Datagrid, List, TextField, NumberField} from 'react-admin';

export const RoomList = () => (
    <List>
        <Datagrid>
            <TextField source="id" label="ID" />
            <NumberField source="hotel_id" label="Hotel ID" />
            <NumberField source="room_type_id" label="Room Type ID" />
            <NumberField source="number" label="Room Number" />
            <NumberField source="price" label="Price" />
        </Datagrid>
    </List>
);
