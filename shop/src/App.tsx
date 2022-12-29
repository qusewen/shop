import { number } from 'yargs';
import './App.scss';
import Catalog from './Сomponents/Catalog/Catalog';
import Categories from './Сomponents/Categories/Categories';
import Header from './Сomponents/Header/Header';
import Sort from './Сomponents/Sort/Sort';

function App() {
  return (
    <>
    <Header/>
    <Categories/>
    <Sort/>
    <Catalog/>
    </>
  );
}

export default App;
