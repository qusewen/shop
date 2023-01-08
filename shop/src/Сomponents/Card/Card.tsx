import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import './Card.scss'

interface Items {
  id: number,
  name: string,
  cost: number,
  color: string,
  description: string,
  category: string,
  memory: number,
  screenSize: number,
  screenResolution: string,
  cpu: string,
  screenType: string,
  frontFacingCamera?: number,
  image: string,
  image2: string,
  image3: string
}

type CardsProps = {
  name: string,
  cost: number,
  image : string,
  addToCart: (item: Items) => void
}

type Props = {
  addToCart: (item: Items) => void
  item: {
    id: number,
    name: string,
    cost: number,
    color: string,
    description: string,
    category: string,
    memory: number,
    screenSize: number,
    screenResolution: string,
    cpu: string,
    screenType: string,
    frontFacingCamera?: number,
    image: string,
    image2: string,
    image3: string
  }
}

export default function Cards({item, addToCart}: Props) {
  const [allCost, setAllCost] = React.useState(0);
  function handleClick(){
    console.log(allCost)
   return setAllCost(allCost+item.cost)
  }
  return (
    <Grid item xs={12} md={4}>
       <Card sx={{ maxWidth: 235 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="275"
            image={item.image}
            alt="iphone"
          />
          <CardContent>
            <Typography gutterBottom variant="subtitle1" component="div">
              {item.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.cost}$
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={() => addToCart(item)} variant='outlined' >Buy</Button>
          </CardActions>
        </CardActionArea>
      </Card>
    </Grid>
  );
}