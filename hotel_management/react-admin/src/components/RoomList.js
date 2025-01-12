import { Datagrid, List, TextField, NumberField} from 'react-admin';

export const RoomList = () => (
    <List>
        <Datagrid>
            <TextField source="id" label="ID" />
            <NumberField source="hoteId" label="Hotel ID" />
            <NumberField source="roomtypeId" label="Room Type ID" />
            <NumberField source="number" label="Room Number" />
            <NumberField source="price" label="Price" />
        </Datagrid>
    </List>
);
