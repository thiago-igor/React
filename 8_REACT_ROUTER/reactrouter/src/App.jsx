import './App.css'

// config react router:
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// pags:
import Home from './pages/Home'
import About from './pages/About';

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
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
