import React from 'react'
import './objetivos.css'
import imagen1 from '../../assets/imagen1.jpg'
import imagen2 from '../../assets/imagen2.jpg'
import imagen3 from '../../assets/imagen3.jpg'
import tienda from '../../assets/comida.png'
import  documento from '../../assets/buscar.png'
import  duda from '../../assets/pregunta.png'

const objetivos = () => {
  return (
    <div className='objetivos'>
        <div className="objetivo">
            <img src={imagen1} alt="" />
            <div className="informacion">
                <img src={tienda} alt="" />
                <h2>Sitio</h2>
                <p>Crear un espacio donde los emprendedores puedan encontrar respuestas a preguntas frecuentes sobre propiedad intelectual</p>
            </div>
        </div>
        <div className="objetivo">
            <img src={imagen2} alt="" />
            <div className="informacion">
                <img src={documento} alt="" />
                <h2>Información</h2>
                <p>Proporcionar información detallada y actualizada sobre los requisitos, 
                    procedimientos y costos asociados al registro de marcas y patentes en Nicaragua.</p>
            </div>
        </div>
        <div className="objetivo">
            <img src={imagen3} alt="" />
            <div className="informacion">
                <img src={duda} alt="" />
                <h2>Guia</h2>
                <p>Ofrecer guías paso a paso y recursos para facilitar el proceso de registro.</p>
            </div>
        </div>
    </div>
  )
}

export default objetivos
