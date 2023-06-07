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

  const [showCart, setShowCart] = useState(false) 

  const handleShow = (value) => {
    setShowCart(value)
  }

  return (
    <div className="App">
      <Header 
        count={cart.length}
        handleShow={handleShow}
      />
      {
        showCart ? <Cart count={cart.length} cart={cart}/> : <Dashboard products={products} addToCart={addToCart} cart={cart}/>
      }
      
      <Footer />
    </div>
  );
}

export default App;
