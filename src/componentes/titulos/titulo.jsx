import React from 'react'
import './titulo.css'

const titulo = ({subtitulo , titulo}) => {
  return (
    <div className='titulo'>
        <p>{titulo}</p>
        <h2> {subtitulo}</h2>
      
    </div>
  )
}

export default titulo
