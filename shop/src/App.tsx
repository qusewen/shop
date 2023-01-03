import { number } from 'yargs';
import './App.scss';
import Catalog from './Сomponents/Catalog/Catalog';
import Categories from './Сomponents/Categories/Categories';
import Header from './Сomponents/Header/Header';
import Sort from './Сomponents/Sort/Sort';
import { Container } from '@mui/system';
import Footer from './Сomponents/Footer/Footer';

function App() {
  return (
    <>
      <Container>
         <Header/>
        <Categories/>
        <Sort/>
        <Catalog/>
      </Container>
      <Footer/>
    </>
  );
}

export default App;
