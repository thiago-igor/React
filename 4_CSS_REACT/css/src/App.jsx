import './App.css'
import MyComponent from './Components/MyComponent'
import Title from './Components/Title'

function App() {

  const n = 100
  const redTitle = true

  return (
    <>
      {/*CSS Global */}
      <h1>React com css</h1>
      {/*CSS De Componente */}
      <MyComponent />
      <p>Esse paragrafo é do App.jsx</p>
      {/*CSS Inline Dinamico */}
      <h2 style={n > 10 ? {color: "purple"} : {color: "pink"}}>
      Css Dinamico
      </h2>
      {/*Classe dinamica:*/}
      <h2 className={redTitle ? "red-title" : "title" }>
        Esse Titulo vai ter classe dinamica
        </h2>
        {/*CSS Modules */}
        <Title />
    </>

  )
}

export default App
