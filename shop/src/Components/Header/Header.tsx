import { ShoppingBasket } from '@mui/icons-material'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import AppleIcon from '@mui/icons-material/Apple';
import React from 'react'
import './Header.scss'

type Props = {}

export default function Header({}: Props) {
  return (
    <AppBar color='default'>
      <Toolbar className='nav-bar'>
        <IconButton 
            size="large"
            edge="start"
            color="inherit">
              <AppleIcon/>
        </IconButton>
        <IconButton color='inherit'>
              <ShoppingBasket/>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}