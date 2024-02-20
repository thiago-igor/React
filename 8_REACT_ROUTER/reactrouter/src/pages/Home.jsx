import {link} from "react-router-dom"
import {useEffect} from "../hooks/useFetch";

import './Home.css'

const Home = () => {
     //3 - carregamento dos dados:
     const url = 'http://localhost:3000'
     const {data: items, loading, error} = useEffect(url)

     
  return ( 
    <div>
      <h1>Produtos</h1>
      {error && <p>{error} </p>}
      <ul className="products">
        {items && items.map(item => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>R$: {item.price} </p>
          </li>
          
        ))}
      </ul>
    </div>
  )
}

export default Home
