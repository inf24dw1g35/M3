import React from 'react';
import { Create, SimpleForm, NumberInput } from 'react-admin';  // Importações necessárias

export const RoomCreate = (props) => (
  <Create title="Create a Room" {...props}>  {/* Título para a criação do quarto */}
    <SimpleForm>
      <NumberInput source="hotel_id" label="Hotel ID" />  {/* Campo para ID do hotel ao qual o quarto pertence */}
      <NumberInput source="room_type_id" label="Room Type ID" />  {/* Campo para ID do tipo de quarto */}
      <NumberInput source="number" label="Room Number" />  {/* Campo para o número do quarto */}
      <NumberInput source="price" label="Price" />  {/* Campo para o preço do quarto */}
    </SimpleForm>
  </Create>
);
