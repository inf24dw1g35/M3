import { Card, CardHeader, CardContent, CardMedia, Typography } from "@mui/material";

const Dashboard = () => (
  <Card>
    <CardHeader title="Welcome to the administration" />
    <CardMedia
      component="img"
      height="140"
      image="/img/hotel.jpg"
      alt="Descrição da imagem"
    />
    <CardContent>
      <Typography variant="body1">
        Trabalho relativo ao M3 de Desenvolvimento Web1, elaborado pelo grupo 35.
      </Typography>
      <Typography variant="body2">
        Aqui você pode gerenciar hotéis, hóspedes, serviços, restaurantes, reservas e quartos.
      </Typography>
      <Typography variant="body2">
        Utilize o menu à esquerda para navegar entre as diferentes seções.
      </Typography>
    </CardContent>
  </Card>
);

export default Dashboard;