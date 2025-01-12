import React from 'react';
import { Create, SimpleForm, TextInput, NumberInput } from 'react-admin';  // Importações necessárias

export const GuestCreate = (props) => (
  <Create title="Create a Guest" {...props}>  {/* Título para a criação do hóspede */}
    <SimpleForm>
      <TextInput source="name" label="Guest Name" />  {/* Campo para o nome do hóspede */}
      <TextInput source="id_card" label="ID Card" />  {/* Campo para o cartão de identidade do hóspede */}
      <NumberInput source="phone" label="Phone" />  {/* Campo para o telefone do hóspede */}
      <TextInput source="address" label="Address" />  {/* Campo para o endereço do hóspede */}
      <TextInput source="country" label="Country" />  {/* Campo para o país do hóspede */}
    </SimpleForm>
  </Create>
);