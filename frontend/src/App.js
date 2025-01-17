
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Shop } from '../src/Pages/Shop';
import { ShopCategory } from '../src/Pages/ShopCategory';
import { LoginSignup } from '../src/Pages/LoginSignup';
import { Cart } from '../src/Pages/Cart';
import { Product } from '../src/Pages/Product';
import { Footer } from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kids_banner from './Components/Assets/banner_kids.png';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop/>} />
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path='/womens' element={<ShopCategory category="women" banner={women_banner} />} />
          <Route path='/kids' element={<ShopCategory category="kid" banner={kids_banner} />} />
          <Route path='/product' element={<Product />} >
            <Route path=':productId' element={<Product/>} />
          </Route>
          <Route path='/cart' element={<Cart/>} />
          <Route path='/login' element={<LoginSignup/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
