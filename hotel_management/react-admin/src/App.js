import { Admin, Resource } from "react-admin";
import lb4Provider from "react-admin-lb4";
import { createTheme } from '@mui/material/styles';
import React from 'react';

import { HotelList } from "./components/HotelList";  // Componente de listagem de hotéis
import { GuestList } from "./components/GuestList";  // Componente de listagem de hóspedes
import { ServiceList } from "./components/ServiceList";
import { RestaurantList } from "./components/RestaurantList";
import { RoomList } from "./components/RoomList";
import { ReservationList } from "./components/ReservationList";
 
import { HotelCreate } from "./components/HotelCreate"; // Componente de criação de hotel
import { GuestCreate } from "./components/GuestCreate";
import { RestaurantCreate } from "./components/RestaurantCreate";
import { RoomCreate } from "./components/RoomCreate";
import { ServiceCreate } from "./components/ServiceCreate";
import { ReservationCreate } from "./components/ReservationCreate";
 
import { HotelEdit } from "./components/HotelEdit";   // Componente de edição de hotel
import { GuestEdit } from "./components/GuestEdit";   // Componente de edição de hotel
import { RestaurantEdit } from "./components/RestaurantEdit";   // Componente de edição de hotel
import { RoomEdit } from "./components/RoomEdit";   // Componente de edição de hotel
import { ServiceEdit } from "./components/ServiceEdit";   // Componente de edição de hotel
import { ReservationEdit } from "./components/ReservationEdit";  // Componente de edição de hotel
import Dashboard from "./dashboard";
 
 
const dataProvider = lb4Provider("http://localhost:3000");
 
 
// Definindo o tema com estilo moderno e cores vivas
const customTheme = createTheme({
  palette: {
    primary: {
      main: '#6200ea',  // Roxo vibrante
    },
    secondary: {
      main: '#03dac5',  // Aqua vibrante
    },
    error: {
      main: '#d32f2f',  // Cor de erro vibrante (vermelho)
    },
    background: {
      default: '#fafafa',  // Cor de fundo clara
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',  // Fonte moderna e elegante
    h6: {
      fontWeight: 600,
      fontSize: '1.25rem',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#303f9f',  // Cabeçalho escuro e elegante
          color: '#fff',
          boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',  // Sombra suave no cabeçalho
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#212121',  // Sidebar escura
          color: '#fff',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#6200ea',  // Cor vibrante para botões
          color: '#fff',
          borderRadius: '15px',  // Bordas arredondadas mais discretas
          padding: '10px 20px',  // Diminuir padding para tornar o botão menor
          fontWeight: 600,
          fontSize: '0.875rem',  // Reduzir o tamanho da fonte
          boxShadow: '0px 8px 20px rgba(98, 0, 234, 0.3)',  // Sombra suave nos botões
          transition: 'all 0.3s ease',  // Transição suave no hover
          '&:hover': {
            backgroundColor: '#3700b3',  // Cor escura para hover
            transform: 'scale(1.05)',  // Efeito de zoom no hover
            boxShadow: '0px 8px 30px rgba(98, 0, 234, 0.4)',  // Sombra mais forte no hover
          },
        },
        delete: {
          backgroundColor: '#f44336',  // Cor vibrante para botões de Delete
          color: '#fff',
          fontWeight: 700,  // Texto em negrito
          borderRadius: '15px',
          padding: '10px 20px',  // Diminuir padding para botões menores
          fontSize: '0.875rem',  // Reduzir o tamanho da fonte
          '&:hover': {
            backgroundColor: '#d32f2f',  // Cor mais escura para Delete no hover
            transform: 'scale(1.05)',  // Efeito de zoom ao passar o mouse
            boxShadow: '0px 8px 20px rgba(244, 67, 54, 0.4)',  // Sombra mais forte no hover
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          width: '100%',
          marginBottom: '24px',  // Maior espaçamento entre inputs
          '& .MuiInputBase-root': {
            padding: '16px',  // Campos maiores e mais confortáveis
            borderRadius: '12px',  // Bordas arredondadas
            backgroundColor: '#fff',
            boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',  // Sombra suave
            '&:hover': {
              boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.15)',  // Sombra ao passar o mouse
            },
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#fafafa',  // Cor de fundo mais clara e limpa
          margin: 0,
          fontFamily: 'Poppins, sans-serif',
        },
      },
    },
  },
});
 
const App = () => (
  <Admin theme={customTheme} dashboard={Dashboard} dataProvider={dataProvider}>
    {/* Recursos */}
    <Resource name="rooms" create={RoomCreate} edit={RoomEdit} list={RoomList} />
    <Resource name="guests" create={GuestCreate} edit={GuestEdit} list={GuestList} />
    <Resource name="restaurants" create={RestaurantCreate} edit={RestaurantEdit} list={RestaurantList} />
    <Resource name="services" create={ServiceCreate} edit={ServiceEdit} list={ServiceList} />
    <Resource name="hotels" create={HotelCreate} edit={HotelEdit} list={HotelList} />
    <Resource name="reservations" create={ReservationCreate} edit={ReservationEdit} list={ReservationList} />
  </Admin>
);
 
export default App;