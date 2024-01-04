import React from 'react'

const Cnh = ({nome, age, profissao}) => {
  return (
    <div>
      <h2>Historico de pessoa:</h2>
      <ul>
        <li>nome: {nome}</li>
        <li>Idade: {age}</li>
        <li>Profissao: {profissao}</li>
      </ul>

        {age >= 18 ? ("Pode ter CNH") : ("Nao Pode ter CNH")}

    </div>
  )
}

export default Cnh
