import React from 'react';
import { Create, SimpleForm, TextInput, NumberInput } from 'react-admin';  // Corrigir a importação

export const HotelCreate = (props) => (
  <Create title ="Create a Post" {...props}>
    <SimpleForm>
      <TextInput source="name" label="Hotel Name" />
      <NumberInput source="stars" label="Stars" min={1} max={5} />
      <TextInput source="address" label="Address" />
      <TextInput source="city" label="City" />
      <TextInput source="country" label="Country" />
    </SimpleForm>
  </Create>
);