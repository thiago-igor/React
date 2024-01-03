import React from 'react'

const Fragments = ({propFragments}) => {
  return (
    <> {/* Tag vazia para simplificar */}
      <h2>Primeiro titulo</h2>
      <h3>Segundo titulo</h3>
      <h4>{propFragments}</h4>
    </>
  )
}

export default Fragments
