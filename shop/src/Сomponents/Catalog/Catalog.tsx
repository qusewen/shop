import Cards from "../Card/Card";
import items from "../../Constants/product.json"
import "./Catalog.scss"
import { Grid } from "@mui/material";

export default function Catalog() {
  function handleClick(){

  }
  return (
    // <div className="flex-grid">
    <Grid container spacing={4}>
      {items.map(item => (
       <Cards key={item.id} {...item}/>
      ))}
    </Grid>
    

    // </div>
  )
}
