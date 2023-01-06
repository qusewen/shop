import React from 'react'
import './Pricing.scss'
import { Accordion, AccordionDetails, AccordionSummary, Slider, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type Props = {
    handleChange: (event: Event, newValue: number | number[]) => void
    value: number[]
    min: number
    max: number
}

function Pricing({handleChange, value, min, max}: Props) {
    return (
        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
                <Typography>Price</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <div className='accordion-flex'>
                    <TextField 
                        id="outlined-basic" 
                        placeholder={JSON.stringify(value[0]) + "$"}
                        variant="outlined"
                    />
                    <TextField 
                        id="outlined-basic" 
                        placeholder={JSON.stringify(value[1]) + "$"}
                        variant="outlined"
                    />
                </div>
                <Box sx={{ maxWidth: 300 }}>
                    <Slider
                        min={min}
                        max={max}
                        value={value}
                        onChange={handleChange}
                    />
                </Box>
            </AccordionDetails>
        </Accordion>
    )
}

export default Pricing