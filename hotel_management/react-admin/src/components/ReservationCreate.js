import React from 'react';
import { Create, SimpleForm, TextInput, DateInput, NumberInput, ReferenceInput, SelectInput } from 'react-admin';  // Importações necessárias

export const ReservationCreate = (props) => (
  <Create title="Create a Reservation" {...props}>  {/* Título para a criação da reserva */}
    <SimpleForm>
      <TextInput source="guest_name" label="Guest Name" />  {/* Campo para nome do hóspede */}
      <DateInput source="date" label="Date" />  {/* Campo para a data da reserva */}
      <NumberInput source="guest_count" label="Guest Count" />  {/* Campo para número de hóspedes */}
      <TextInput source="booking_method" label="Booking Method" />  {/* Campo para método de reserva */}
      <TextInput source="credit_card" label="Credit Card" />  {/* Campo para o número do cartão de crédito */}
      <TextInput source="address" label="Address" />  {/* Campo para o endereço */}
      <TextInput source="contact_phone" label="Contact Phone" />  {/* Campo para o telefone de contato */}
      
      {/* Referência ao modelo de hóspedes */}
      <ReferenceInput source="guestId" reference="guests" label="Guest">
        <SelectInput optionText="name" />  {/* Campo de seleção de hóspedes */}
      </ReferenceInput>
    </SimpleForm>
  </Create>
);