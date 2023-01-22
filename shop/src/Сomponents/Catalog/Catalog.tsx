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

type Props = {
  addToCart: (item: Items) => void
  filtered: {
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

export default function Catalog({addToCart, filtered}: Props) {
  function handleClick(){

  }

  return (
    <Grid container spacing={4}>
      {filtered.map(item => (
       <Cards key={item.id} item={item} addToCart={addToCart}/>
      ))}
    </Grid>
  )
}
