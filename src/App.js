import { useEffect, useState } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Dashboard from './components/Dashboard';
import Cart from './components/Cart';

function App() {
  
  const API = "https://dummyjson.com/products";

  const fetchData = async (url) => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        setProducts(data.products)
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() => {
    fetchData(API)
  },[])

  const [products, setProducts] = useState([])
  
  const [cart, setCart] = useState([])

  const addToCart = (data) => {
    setCart(prevList => (
      [...prevList, { ...data, quantity: 1}]
    ))
  }

  const removeFromCart = (data) => {
    setCart(prevList => (
      prevList.filter(item => item.id !== data.id)
    ))
  }

  const updateCart = (cart) => {
    setCart(() => cart)
  }

  const [showCart, setShowCart] = useState(false) 

  const handleShow = (value) => {
    setShowCart(value)
  }

  const [filterProduct, setFilteredProduct] = useState('')

  const handleFilterProduct = (input) => {
    setFilteredProduct(() => input)
  }

  return (
    <div className="App">
      <Header 
        count={cart.length}
        handleShow={handleShow}
        handleFilterProduct={handleFilterProduct}
        filterProduct={filterProduct}
        showCart={showCart}
      />
      {
        showCart ? <Cart count={cart.length} cart={cart} updateCart={updateCart} removeFromCart={removeFromCart} /> : <Dashboard products={products} addToCart={addToCart} cart={cart} removeFromCart={removeFromCart} filterProduct={filterProduct}/>
      }
      
      <Footer />
    </div>
  );
}

export default App;
