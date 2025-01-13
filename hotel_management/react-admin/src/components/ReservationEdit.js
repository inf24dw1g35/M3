import React from 'react';
import { Edit, SimpleForm, TextInput, DateInput, NumberInput, ReferenceInput, SelectInput } from 'react-admin';  // Importações necessárias

export const ReservationEdit = (props) => (
  <Edit title="Edit Reservation" {...props}>  {/* Título para edição da reserva */}
    <SimpleForm>
      <TextInput disabled source="id" label="ID" />  {/* ID da reserva desabilitado */}
      <DateInput source="date" label="Date" />  {/* Data da reserva */}
      <TextInput source="booking_method" label="Booking Method" />  {/* Método de reserva */}
      <NumberInput source="guest_count" label="Guest Count" />  {/* Número de hóspedes */}
      <TextInput source="credit_card" label="Credit Card" />  {/* Cartão de crédito */}
      <TextInput source="guest_name" label="Guest Name" />  {/* Nome do hóspede */}
      <TextInput source="address" label="Address" />  {/* Endereço */}
      <TextInput source="contact_phone" label="Contact Phone" />  {/* Telefone de contato */}
      
      {/* Referência ao modelo de hóspedes */}
      <ReferenceInput source="guestId" reference="guests" label="Guest">
        <SelectInput optionText="name" />  {/* Campo de seleção de hóspedes */}
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);