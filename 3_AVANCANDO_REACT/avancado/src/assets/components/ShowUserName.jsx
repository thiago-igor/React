import React from 'react'

const ShowUserName = (props) => {
  return (
    <div>
      <h2>O nome do usuario: {props.name}</h2> {/*Pegando valor por herança do pai que esta em "App.jsx" */}
    </div>
  )
}

export default ShowUserName
