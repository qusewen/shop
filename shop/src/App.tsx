import { number } from 'yargs';
import './App.scss';
import Catalog from './components/Catalog/Catalog';
import Categories from './components/Categories/Categories';
import Header from './components/Header/Header';
import Sort from './components/Sort/Sort';

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
