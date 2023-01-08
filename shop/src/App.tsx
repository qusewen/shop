import { number } from 'yargs';
import './App.scss';
import Catalog from './Сomponents/Catalog/Catalog';
import Categories from './Сomponents/Categories/Categories';
import Header from './Сomponents/Header/Header';
import Sort from './Сomponents/Sort/Sort';
import { Container } from '@mui/system';
import Footer from './Сomponents/Footer/Footer';
import { useState, useEffect } from 'react';
import items from "../src/Constants/product.json"
import Pricing from './Сomponents/Pricing/Pricing';
import { Grid } from '@mui/material';

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

function App() {
  const [filtered, setFiltered] = useState(items)
  const [searchValue, setSearchValue] = useState('')
  const [chosenProducts, setChosenProducts] = useState(items)

  const searchFilter = (text: string) => {
    setSearchValue(text)
    if(text) {
      let filteredProducts = items.filter(product => (
        product.name.toLowerCase().includes(searchValue.toLowerCase())
      ))
      setFiltered(filteredProducts)
      setChosenProducts(filteredProducts)
    } else {
      setFiltered(items)
      setChosenProducts(items)
    }
  }

  const categoryFilter = (title: string): void => {
    if(title === 'all') {
      setFiltered(items)
      setChosenProducts(items)
    } else {
      let filteredCategory = items.filter(item => item.category === title)
      setFiltered(filteredCategory)
      setChosenProducts(filteredCategory)
    }
  }

  // Фильтрация по цене
  let prices = items.map(item => item.cost)
  let sortedPrice = prices.sort((a, b) => a - b)
  let MIN = Math.min(...sortedPrice)
  let MAX = Math.max(...sortedPrice)

  const [value, setValue] = useState<number[]>([MIN, MAX]);

  const handleChange = (event: Event, newValue: number | number[]) => {
      setValue(newValue as number[]);
      filterCost()
  };

  const filterCost = () => {
      let filteredCost = chosenProducts.filter(item => (
          item.cost >= value[0] && item.cost <= value[1]
      ))
      setFiltered(filteredCost)
  }

  // Добавление товара в корзину
  const [orders, setOrders] = useState<Items[]>([])

  const addToCart = (item: Items) => {
    let isInArray = false;
    orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true
    })
    if(!isInArray) {
      setOrders([...orders, item])
    }
  }

  // Удаление товара из корзины
  const deleteFromCart = (id: number) => {
    setOrders(orders.filter(item => item.id !== id))
  }

  useEffect(() => {console.log(orders)})

  return (
    <>
      <Container maxWidth='xl'>
        <Header searchFilter={searchFilter} deleteFromCart={deleteFromCart} orders={orders}/>
        <Grid container spacing={5}>
          <Grid item xs={3}>
            <Categories categoryFilter={categoryFilter}/>
            <Sort/>
            <Pricing
              handleChange={handleChange}
              value={value}
              min={MIN}
              max={MAX}
            />
          </Grid>
          <Grid item xs={9}>
            <Catalog filtered={filtered} addToCart={addToCart}/></Grid>
        </Grid>
      </Container>
      <Footer/>
    </>
  );

  
}
export default App;
