import React from 'react';
import { Edit, SimpleForm, TextInput, NumberInput } from 'react-admin';  // Correção da importação

export const HotelEdit = (props) => (
  <Edit title="Edit Hotel" {...props}>  {/* Alteração do título */}
    <SimpleForm>
      <TextInput disabled source="id" label="ID" />  {/* Exibindo o ID como desabilitado */}
      <TextInput source="name" label="Hotel Name" />
      <NumberInput source="stars" label="Stars" min={1} max={5} />
      <TextInput source="address" label="Address" />
      <TextInput source="city" label="City" />
      <TextInput source="country" label="Country" />
    </SimpleForm>
  </Edit>
);