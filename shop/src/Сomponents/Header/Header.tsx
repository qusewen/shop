import { ShoppingBasket } from '@mui/icons-material'
import { AppBar, Button, Drawer, IconButton, TextField, Toolbar, Typography } from '@mui/material'
import AppleIcon from '@mui/icons-material/Apple';
import React, { useEffect, useState } from 'react'
import './Header.scss'
import { Box } from '@mui/system';
import ClearIcon from '@mui/icons-material/Clear';
import CartItem from '../CartItem/CartItem';

type Props = {}
type IProductsProps = {
  searchFilter: (value: string) => void
  deleteFromCart: (id: number) => void
  orders: {
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
  }[]
}

export default function Header({searchFilter, deleteFromCart, orders}: IProductsProps) {

  const [drawerState, setDrawerState] = useState(false)

  const toggleDrawer = (open: boolean) =>
  (event: React.KeyboardEvent | React.MouseEvent) => {
    setDrawerState(open);
  };
  
  let sum = 0
  const totalCost = () => {
    orders.forEach(item => sum += item.cost)
    return sum
  }

  return (
    <AppBar color='default'>
      <Toolbar className='nav-bar'>
        <IconButton 
            size="large"
            edge="start"
            color="inherit">
              <AppleIcon/>
        </IconButton>
        <TextField id="outlined-basic" label="Search" variant="outlined"size='small' onChange={(event) => searchFilter(event.target.value)}/>
        <IconButton 
          color='inherit'
          onClick={toggleDrawer(true)}
        >
              <ShoppingBasket/>
        </IconButton>
        <Drawer
          anchor='right'
          open={drawerState}
          onClose={toggleDrawer(false)}
        >
           <Box
            sx={{width: 400}} 
            role="presentation"
            className='card-box'
          >
            {orders.map(item => (
              <CartItem key={item.id} item={item} deleteFromCart={deleteFromCart}/>
            ))}
            <div className='card-bottom'>
              <div className='total'>
                Total Cost: 
                <span className='total-cost'>{totalCost()}$</span>
              </div>
              <Button variant='contained'>Buy</Button>
            </div>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  )
}