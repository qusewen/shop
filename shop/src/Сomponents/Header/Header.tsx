import { ShoppingBasket } from '@mui/icons-material'
import { AppBar, IconButton, TextField, Toolbar, Typography } from '@mui/material'
import AppleIcon from '@mui/icons-material/Apple';
import React from 'react'
import './Header.scss'

type Props = {}
type IProductsProps = {
  searchFilter: (value: string) => void
}

export default function Header({searchFilter}: IProductsProps) {

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
        <IconButton color='inherit'>
              <ShoppingBasket/>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}