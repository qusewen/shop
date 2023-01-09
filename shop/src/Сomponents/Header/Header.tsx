import { ShoppingBasket } from '@mui/icons-material'
import { AppBar, Badge, Button, Drawer, IconButton, TextField, Toolbar, Typography } from '@mui/material'
import AppleIcon from '@mui/icons-material/Apple';
import React, { useEffect, useState } from 'react'
import './Header.scss'
import { Box } from '@mui/system';
import ClearIcon from '@mui/icons-material/Clear';
import CartItem from '../CartItem/CartItem';

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

type Props = {}
type IProductsProps = {
  searchFilter: (value: string) => void
  deleteFromCart: (id: number) => void
  orders: Items[]
  allOrders: Items[]
  setAllOrders: (el: Items[]) => void
}

export default function Header({searchFilter, deleteFromCart, orders, allOrders, setAllOrders}: IProductsProps) {

  const [drawerState, setDrawerState] = useState(false)

  const toggleDrawer = (open: boolean) =>
  (event: React.KeyboardEvent | React.MouseEvent) => {
    setDrawerState(open);
  };

  const totalCost = () => {
    let sum = 0
    allOrders.forEach(item => sum += item.cost)
    return sum
  }

  const showNothing = () => {
    return (
      <div className='empty'>
        <h2>Basket is empty</h2>
      </div>
    )
  }

  const showOrders = () => {
    return (
      <>
        {orders.map(item => (
          <CartItem key={item.id} item={item} deleteFromCart={deleteFromCart} totalCost={totalCost} allOrders={allOrders} setAllOrders={setAllOrders}/>
        ))}
        <div className='card-bottom'>
          <div className='total'>
            Total Cost: 
            <span className='total-cost'>{totalCost()}$</span>
          </div>
            <Button variant='contained'>Buy</Button>
        </div>
      </>
    )
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
            <Badge color="primary" badgeContent={allOrders.length}>
              <ShoppingBasket/>
            </Badge>
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
            {orders.length > 0 ? showOrders() : showNothing()}
            {/* {orders.map(item => (
              <CartItem key={item.id} item={item} deleteFromCart={deleteFromCart} totalCost={totalCost} allOrders={allOrders} setAllOrders={setAllOrders}/>
            ))}
            <div className='card-bottom'>
              <div className='total'>
                Total Cost: 
                <span className='total-cost'>{totalCost()}$</span>
              </div>
              <Button variant='contained'>Buy</Button>
            </div> */}
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  )
}