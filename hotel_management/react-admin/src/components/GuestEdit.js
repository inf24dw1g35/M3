import React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';  // Importando os componentes necessários

export const GuestEdit = (props) => (
  <Edit title="Edit Guest" {...props}>  {/* Título para a edição do hóspede */}
    <SimpleForm>
      <TextInput disabled source="id" label="ID" />  {/* ID como campo desabilitado */}
      <TextInput source="name" label="Name" />  {/* Nome do hóspede */}
      <TextInput source="id_card" label="ID Card" />  {/* ID do cartão de identificação */}
      <TextInput source="phone" label="Phone" />  {/* Número de telefone */}
      <TextInput source="address" label="Address" />  {/* Endereço */}
      <TextInput source="country" label="Country" />  {/* País */}
    </SimpleForm>
  </Edit>
);
