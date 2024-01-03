import React, { useState } from 'react'

const ConditionalRender = () => {
    const [x] = useState(true);

    const [name, setName] = useState("Thiago");

  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p>Se x for true, Sim!</p>}

       <h1>if ternario:</h1> {/*Operador ternario*/}
      {name === "Joao"? ( // IF
        <div>
            <p>O nome é Joao</p>
        </div>
      ) : ( // ELSE
        <div>
            <p>Nome nao encontrado</p>
        </div>
      )}

      <button onClick={() => setName("Joao")}>Clique Aqui</button>
    </div>
  )
}

export default ConditionalRender
