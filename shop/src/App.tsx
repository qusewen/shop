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


function App() {
  const [filtered, setFiltered] = useState(items)
  const [searchValue, setSearchValue] = useState('')

  const searchFilter = (text: string) => {
    setSearchValue(text)
    if(text) {
      let filteredProducts = items.filter(product => (
        product.name.toLowerCase().includes(searchValue.toLowerCase())
      ))
      setFiltered(filteredProducts)
    } else {
      setFiltered(items)
    }
  }
  

  const categoryFilter = (title: string): void => {
    if(title === 'all') {
      setFiltered(items)
    } else {
      let filteredCategory = items.filter(item => item.category === title)
      setFiltered(filteredCategory)
    }
  }

  return (
    <>
      <Container>
        <Header searchFilter={searchFilter}/>
        <Categories categoryFilter={categoryFilter}/>
        <Sort/>
        <Catalog {...filtered}/>
      </Container>
      <Footer/>
    </>
  );

  
}
export default App;
