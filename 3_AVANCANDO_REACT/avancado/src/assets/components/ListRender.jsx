import React from 'react'
import { useState } from 'react'
// gerenciar o estado de algum valor
// getter and setter

const ListRender = () => {
    const [list] = useState(["matheus", "Pedro", "thiago"])

    // maneira mais indicada:
    const [user, setUsers] = useState([
      {id:1, name: "Matheus", age: 31},
      {id:2, name: "Pedro", age: 22},
      {id:3, name: "Thiago", age: 55},
    ])

    const deleteRandom = () => {
      const randomNumber = Math.floor(Math.random() * 4);

      // Previous Value (para alterar o valor, nesse caso excluindo um elemento do array)
      setUsers((prevUsers) => {
        console.log(prevUsers)
        return prevUsers.filter((user) => randomNumber !== user.id)
      })

    }


  return (
    <div>
      <ul>
        {list.map((item, i) => (
            <li key={i}>{item}</li>
        ))}
      </ul>

          {/*Maneira mais indicada: */}
      <ul>
        {user.map((user) => (
          <li key={user.id}>{user.name} - {user.age}</li>
        ))}
      </ul>

      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  );
};

export default ListRender
