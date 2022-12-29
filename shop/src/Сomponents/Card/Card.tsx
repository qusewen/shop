import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';

type CardsProps = {
  name: string,
  cost: number,
  image : string
}

export default function Cards({name, cost, image}: CardsProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image={image}
          alt="iphone"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {cost}$
          </Typography>
          <Button variant='outlined'>Buy</Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}