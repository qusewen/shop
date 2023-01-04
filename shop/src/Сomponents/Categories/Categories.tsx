import React, { useState } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

// type Props = {}

type ICategoryProps = {
  categoryFilter: (title: string) => void
}

export default function Categories({categoryFilter}: ICategoryProps) {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  
  const [category, setCategory] = useState([
    {
      id: 1,
      title: 'all'
    },
    {
      id: 2,
      title: 'phone'
    },
    {
      id: 3,
      title: 'computer'
    },
    {
      id: 4,
      title: 'tablet'
    }
  ])

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Product</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Product"
          onChange={handleChange}
        >
          <MenuItem value={10} onClick={() => categoryFilter(category[0].title)}>All</MenuItem>
          <MenuItem value={20} onClick={() => categoryFilter(category[1].title)}>Iphone</MenuItem>
          <MenuItem value={30} onClick={() => categoryFilter(category[2].title)}>MacBook</MenuItem>
          <MenuItem value={40} onClick={() => categoryFilter(category[3].title)}>Ipad</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}


