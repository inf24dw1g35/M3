import React from 'react';
import { Edit, SimpleForm, TextInput, NumberInput } from 'react-admin';  // Importando os componentes necessários

export const ServiceEdit = (props) => (
  <Edit title="Edit Service" {...props}>  {/* Título para edição do serviço */}
    <SimpleForm>
      <TextInput disabled source="id" label="ID" />  {/* ID do serviço desabilitado */}
      <NumberInput source="hotel_id" label="Hotel ID" />  {/* ID do hotel ao qual o serviço pertence */}
      <TextInput source="name" label="Service Name" />  {/* Nome do serviço */}
    </SimpleForm>
  </Edit>
);
