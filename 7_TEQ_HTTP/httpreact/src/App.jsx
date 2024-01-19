import './App.css'

import { useState, useEffect } from 'react';

const url = "http://localhost:3000/products" // url dos produtos na API

function App() {
  const[products, setProducts] = useState([]) // array de produtos

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  
  // 1 - Resgatando dados:
  useEffect(() => {

    async function fetchData(){ // busca dados na API
      const res = await fetch(url);
      /* 'fetch' é utilizada para fazer uma requisição HTTP para a URL especificada. O 'await' é utilizado para esperar a conclusão da requisição antes de prosseguir. */

      const data = await res.json();
      // A resposta da requisição é convertida para JSON

      setProducts(data);
    }
    fetchData();
  }, []);

  // 2 - Adção de produtos
  const handleSubmit = async (e) => { /*Função chamada quando feito o submit */
    e.preventDefault()

    const product = {
      name: name,
      price: price,
    }

    const res = await fetch(url, { // Enviando obj "product" p/ o Back-end
      method: "POST", // POST é usado quando queremos enviar dados para o servidor
      headers: {
        "Content-Type": "application/json" // indicando que os dados no corpo da requisição estão no formato JSON.
      },
      body: JSON.stringify(product) // passando product como Json
    })

    // 3 - Carregamento dinamico:
    const addedProduct = await res.json() // produto adicionado

    setProducts((preveProducts) => [...preveProducts, addedProduct]) // "preveProducts" sao os produtos que ja estao no array, e o "addedProducts" são os que estou adicionando"

    setName("") // apagando o input apos enviar
    setPrice("")

  }


  return (
    <div className="app">
      <h1>Lista de produtos</h1>

      <ul>
        {products.map((product) => ( // "for" de todos os produtos 
          <li key={product.id}> {product.name} - R$: {product.price} </li>
        ))}
      </ul>

      <div className="add-product">
        <form onSubmit={handleSubmit}> {/*Função chamada quando feito o submit */}
          <label>
            Nome:
            <input 
            type="text"
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)} />
          </label>

          <label>
            Preço:
            <input 
            type="number"
            value={price}
            name="price"
            onChange={(e) => setPrice(e.target.value)}
             />
          </label>

          <input type="submit" value={"Criar"} />
        </form>
      </div>
    </div>
  )
}

export default App
