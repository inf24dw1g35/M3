import { Datagrid, DateField, List, NumberField, ReferenceField, TextField } from 'react-admin';

export const ReservationList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <DateField source="date" />
            <TextField source="booking_method" />
            <NumberField source="guest_count" />
            <TextField source="credit_card" />
            <TextField source="guest_name" />
            <TextField source="address" />
            <TextField source="contact_phone" />
            <NumberField source="guestId" reference="guests" />
        </Datagrid>
    </List>
);