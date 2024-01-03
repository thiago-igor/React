import React from 'react'

const Container = ({children}) => {
  return (
    <div>
      <h2>Esse é o titulo do conteiner</h2>
      {children} {/*Filho de "App.jsx" */}
    </div>
  )
}

export default Container
