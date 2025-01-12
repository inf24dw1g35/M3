import React from 'react';
import { Edit, SimpleForm, TextInput, NumberInput } from 'react-admin';  // Importando os componentes necessários

export const RoomEdit = (props) => (
  <Edit title="Edit Room" {...props}>  {/* Título para edição do quarto */}
    <SimpleForm>
      <TextInput disabled source="id" label="ID" />  {/* ID do quarto desabilitado */}
      <NumberInput source="hotel_id" label="Hotel ID" />  {/* ID do hotel ao qual o quarto pertence */}
      <NumberInput source="room_type_id" label="Room Type ID" />  {/* ID do tipo de quarto */}
      <NumberInput source="number" label="Room Number" />  {/* Número do quarto */}
      <NumberInput source="price" label="Price" />  {/* Preço do quarto */}
    </SimpleForm>
  </Edit>
);
