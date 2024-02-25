import './App.css'

// config react router:
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// pags:
import Home from './pages/Home'
import About from './pages/About';
import Product from './pages/product';

//componets:
import Navbar from './components/Navbar';

function App() {

  return (
    <div className="App">
      <h1>React Router</h1> {/*Aparece em todas as pag*/}
      <BrowserRouter>
        {/* 2 - Links com react routes */}
        <Navbar />
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/*4 - rotas dinamicas */}
          <Route path="/products/:id" element={<Product />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
