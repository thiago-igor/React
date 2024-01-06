import './App.css'
import MyForm from './components/MyForm'

function App() {
  return (
    <div className='App'> 
      <h2>Form</h2>
      <MyForm  user= {{name: "Thiago", email: "thiago.maia0606@gmail.com"}}/>
    </div>
  )
}

export default App
