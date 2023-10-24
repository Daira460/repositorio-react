import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailsContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Todos nuestros productos'}/>} />
          <Route path='/category/:categoryId' element={<ItemListContainer  greeting={'Productos por categoria'}/>} />
          <Route path='/item/:itemId' element={<ItemDetailsContainer />} />
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/chekout' element={<Checkout/>}/>
          <Route path='*' element={<h1>404 NOT FOUND</h1>} />
        </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App;










