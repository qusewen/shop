import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
type Props = {}

export default function Categories({}: Props) {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

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
          <MenuItem value={10}>Iphone</MenuItem>
          <MenuItem value={20}>MacBook</MenuItem>
          <MenuItem value={30}>Ipad</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}


