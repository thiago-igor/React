import logo from './logo.svg';

//components:
import FristComponent from "./components/FristComponent"
import TemplateExpressions from './components/TemplateExpressions';
import MyComponent from './components/MyComponent';
import Events from './components/Events';

// Styles 
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos react</h1>
      <FristComponent />
      <TemplateExpressions />
      <MyComponent />
      <Events />
    </div>
  );
}

export default App;
