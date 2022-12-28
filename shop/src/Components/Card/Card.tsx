import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Cards() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image="https://o.aolcdn.com/hss/storage/midas/be8deaf69ebb2e866257646588bb5999/206681111/IPHONE.jpg"
          alt="iphone"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Iphone
          </Typography>
          <Typography variant="body2" color="text.secondary">
            text-about-iphone
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}