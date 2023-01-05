import Cards from "../Card/Card";
import "./Catalog.scss"
import { Grid } from "@mui/material";

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

export default function Catalog(filtered: Items[]) {
  function handleClick(){

  }

  return (
    <Grid className="grid" container spacing={4}>
      {Object.values(filtered).map(item => (
       <Cards key={item.id} {...item}/>
      ))}
    </Grid>
  )
}
