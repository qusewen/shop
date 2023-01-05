import React from 'react'
import './Pricing.scss'
import { Slider } from '@mui/material'
import { Box } from '@mui/system'

type Props = {
    handleChange: (event: Event, newValue: number | number[]) => void
    value: number[]
    min: number
    max: number
}

function Pricing({handleChange, value, min, max}: Props) {
    return (
        <Box sx={{ width: 300 }}>
            <Slider
                min={min}
                max={max}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
            />
        </Box>
    )
}

export default Pricing