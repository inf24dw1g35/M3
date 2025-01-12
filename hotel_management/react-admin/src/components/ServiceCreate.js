import React from 'react';
import { Create, SimpleForm, TextInput, NumberInput } from 'react-admin';  // Importações necessárias

export const ServiceCreate = (props) => (
  <Create title="Create a Service" {...props}>  {/* Título para a criação do serviço */}
    <SimpleForm>
      <NumberInput source="hotel_id" label="Hotel ID" />  {/* Campo para ID do hotel ao qual o serviço pertence */}
      <TextInput source="name" label="Service Name" />  {/* Campo para nome do serviço */}
    </SimpleForm>
  </Create>
);
