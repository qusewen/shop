import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Dialog, Grid, Modal } from '@mui/material';
import './Card.scss'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/system';

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

  const [fullItem, setFullItem] = React.useState(false)
  const [fullItemObj, setFullItemObj] = React.useState({})
  
  const showFullItem = (item: Items) => {
    setFullItem(!fullItem)
    setFullItemObj(item)
  }

  const handleClose = () => {
    setFullItem(!fullItem)
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
            onClick={() => showFullItem(item)}
          />
          <Dialog 
            open={fullItem} 
            fullScreen
            onClose={handleClose}
          >
             <AppBar sx={{ position: 'relative' }}>
              <Toolbar>
                <IconButton
                  edge="start"
                  color="inherit"
                  onClick={handleClose}
                  aria-label="close"
                >
                  <CloseIcon />
                </IconButton>
                <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                  {item.name}
                </Typography>
              </Toolbar>
            </AppBar>
            <Box className='full-item__box'>
              <img src={item.image} alt={item.name}/>
              
              <div className='full-item__charac'> 
                <div><span>Color: </span>{item.color}</div>
                <div><span>Memory: </span>{item.memory}GB</div>
                <div><span>Screen Size: </span>{item.screenSize}"</div>
                <div><span>Screen Resolution: </span>{item.screenResolution}</div>
                <div><span>cpu: </span>{item.cpu}</div>
                <div><span>Screen Type: </span>{item.screenType}</div>
              </div>
              
              <div className='full-item__buy'>
                <div className='full-item__name'>{item.name}</div>
                <div className='full-item__cost'>{item.cost}$</div>
                <Button onClick={() => addToCart(item)} variant='contained' sx={{width: 300}} >Add to Cart</Button>
              </div>
            </Box>
          </Dialog>
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