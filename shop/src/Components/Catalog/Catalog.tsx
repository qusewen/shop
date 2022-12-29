import Cards from "../Card/Card";
import items from "../../Constants/product.json"
import "./Catalog.scss"

export default function Catalog() {
  return (
    <div className="flex-grid">
    {items.map(item => (
       <Cards key={item.id} {...item}/>
    ))}
    </div>
  )
}
