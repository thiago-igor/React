import './App.css'

import { useState, useEffect } from 'react';

function App() {
  const[products, setProducts] = useState([]) // array de produtos
  const url = "http://localhost:3000/products" // url dos produtos na API

  // 1 - Resgatando dados:
  useEffect(() => {

    async function fetchData(){
      const res = await fetch(url);

      const data = await res.json();

      setProducts(data)
    }
    fetchData();
  }, []);
  return (
    <div className="app">
      <h1>Lista de produtos</h1>

      <ul>
        {products.map((product) => ( // "for" de todos os produtos 
          <li key={product.id}> {product.name} - R$: {product.price} </li>
        ))}
      </ul>
    </div>
  )
}

export default App
