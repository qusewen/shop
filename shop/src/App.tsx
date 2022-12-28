import { number } from 'yargs';
import './App.scss';
import Catalog from './Components/Catalog/Catalog';
import Categories from './Components/Categories/Categories';
import Header from './Components/Header/Header';
import Sort from './Components/Sort/Sort';

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
