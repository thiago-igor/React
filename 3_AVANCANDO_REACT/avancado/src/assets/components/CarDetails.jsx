import React from 'react'

const CarDetails = ({brand, km, color, newCar}) =>  { // Recebendo valores herdados por "App.jsx"
  return (
    <div>
      <h2>Detalhes do carros</h2>
      <ul>
        <li>Marca: {brand}</li>
        <li>KM: {km}</li>
        <li>Cor: {color}</li>
      </ul>

      {newCar && <p>Este carro é novo</p>} {/*Se newCar == true, executa */}
    </div>
  )
}

export default CarDetails
