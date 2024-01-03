import './App.css';

import City from "./assets/city.jpg"
import ManageData from './assets/components/ManageData';
import ListRender from './assets/components/ListRender';
import ConditionalRender from './assets/components/ConditionalRender';

function App() {
  return (
    <div className="App">
      <h1>ola mundo</h1>

      <div>
        {/*Img public */}
        <img src="/img1.jpg" alt="paisagem" />
      </div>

      <div>
        {/*Img asset */}
        <img src={City} alt="cidade" />
      </div>

      <ManageData />
      <ListRender />
      <ConditionalRender />

    </div>
  );
}

export default App;
