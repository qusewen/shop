import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import './Card.scss'


type CardsProps = {
  name: string,
  cost: number,
  image : string
}

export default function Cards({name, cost, image}: CardsProps) {
  const [allCost, setAllCost] = React.useState(0);
  function handleClick(){
    console.log(allCost)
   return setAllCost(allCost+cost)
  }
  return (
    <Grid item xs={12} md={4}>
       <Card sx={{ maxWidth: 235 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="275"
            image={image}
            alt="iphone"
          />
          <CardContent>
            <Typography gutterBottom variant="subtitle1" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {cost}$
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={handleClick} variant='outlined' >Buy</Button>
          </CardActions>
        </CardActionArea>
      </Card>
    </Grid>
  );
}