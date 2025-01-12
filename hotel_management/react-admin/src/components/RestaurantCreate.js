import React from 'react';
import { Create, SimpleForm, TextInput, NumberInput } from 'react-admin';  // Importações necessárias

export const RestaurantCreate = (props) => (
  <Create title="Create a Restaurant" {...props}>  {/* Título para a criação do restaurante */}
    <SimpleForm>
      <NumberInput source="hotel_id" label="Hotel ID" />  {/* Campo para ID do hotel ao qual o restaurante pertence */}
      <TextInput source="name" label="Restaurant Name" />  {/* Campo para o nome do restaurante */}
      <TextInput source="category" label="Category" />  {/* Campo para a categoria do restaurante */}
      <TextInput source="meal_type" label="Meal Type" />  {/* Campo para o tipo de refeição */}
    </SimpleForm>
  </Create>
);
