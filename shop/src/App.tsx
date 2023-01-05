import { number } from 'yargs';
import './App.scss';
import Catalog from './Сomponents/Catalog/Catalog';
import Categories from './Сomponents/Categories/Categories';
import Header from './Сomponents/Header/Header';
import Sort from './Сomponents/Sort/Sort';
import { Container } from '@mui/system';
import Footer from './Сomponents/Footer/Footer';
import { useState } from 'react';
import items from "../src/Constants/product.json"
import Pricing from './Сomponents/Pricing/Pricing';

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

  return (
    <>
      <Container>
        <Header searchFilter={searchFilter}/>
        <Categories categoryFilter={categoryFilter}/>
        <Sort/>
        <Pricing
          handleChange={handleChange}
          value={value}
          min={MIN}
          max={MAX}
        />
        <Catalog {...filtered}/>
      </Container>
      <Footer/>
    </>
  );

  
}
export default App;
