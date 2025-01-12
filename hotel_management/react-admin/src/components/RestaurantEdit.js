import React from 'react';
import { Edit, SimpleForm, TextInput, NumberInput } from 'react-admin';  // Importando os componentes necessários

export const RestaurantEdit = (props) => (
  <Edit title="Edit Restaurant" {...props}>  {/* Título para edição do restaurante */}
    <SimpleForm>
      <TextInput disabled source="id" label="ID" />  {/* ID do restaurante desabilitado */}
      <NumberInput source="hotelId" label="Hotel ID" />  {/* ID do hotel ao qual o restaurante pertence */}
      <TextInput source="name" label="Restaurant Name" />  {/* Nome do restaurante */}
      <TextInput source="category" label="Category" />  {/* Categoria do restaurante */}
      <TextInput source="meal_type" label="Meal Type" />  {/* Tipo de refeição oferecida */}
    </SimpleForm>
  </Edit>
);
