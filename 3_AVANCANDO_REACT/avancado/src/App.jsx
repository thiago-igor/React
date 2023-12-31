import './App.css';

import City from "./assets/city.jpg"
import ManageData from './assets/components/ManageData';
import ListRender from './assets/components/ListRender';
import ConditionalRender from './assets/components/ConditionalRender';
import ShowUserName from './assets/components/ShowUserName';
import CarDetails from './assets/components/CarDetails';
import Fragments from './assets/components/Fragments';
import Container from './assets/components/Container';
import ExecuteFunction from './assets/components/ExecuteFunction';
import Cnh from './assets/components/Cnh';

function App() {

  const cars = [
    {id:1, brand: "Ferrari", color: "Amarela", km: 0, newCar: true},
    {id:2, brand: "Fiat", color: "Bege", km: 35245, newCar: false},
    {id:3, brand: "Renalt", color: "Cinza", km: 8745, newCar: false},
  ]

  function showMenssage() {
    console.log("Evento do componente pai");
  }

  const pessoas = [
    {id:1, name: "Thiago", age: 24, profissao: "Programador" },
    {id:2, name: "Sabrina", age: 18, profissao: "Enfermeira" },
    {id:3, name: "Caio", age: 16, profissao: "Estudante" },
  ]

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
      {/* Props */}
      <ShowUserName name = "Thiago" />
      {/* Destructuring */}
      <CarDetails brand="VW" km={10000} color="Azul" newCar={false} />
      {/*Reaproveitamento */}
      <CarDetails brand="ford" km={5000} color="Vermelho" newCar={false} />
      <CarDetails brand="Mercedes" km={0} color="Preta" newCar={true} />
      {/*Reaproveitamento utilizando Loop */}
      {cars.map((car) => (
        <CarDetails 
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
          key={car.id} />
      ))}
      
      <Fragments propFragments= "Teste"/>
      <Container>
        <p>Novo Conteudo</p>
      </Container>
      {/*Execução de função: */}
      <ExecuteFunction myFunction={showMenssage}/>
      {pessoas.map((pessoa) => (
        <Cnh
        key={pessoa.id} 
        nome={pessoa.name}
        age={pessoa.age}
        profissao={pessoa.profissao} />
      ))}

    </div>
  );
}

export default App;
