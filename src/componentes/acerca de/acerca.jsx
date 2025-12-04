import React from 'react'
import './acerca.css'
import registro from '../../assets/registro.jpg'

const acerca = () => {
  return (
    <div className='acerca'>
        <div className="acerca-izquierda">
            <img src={registro} alt=""  className='acerca-img'/>
        </div>
      <div className="acerca-derecha">
                <h2>Procedimientos para Inscribir </h2>
                <h3>Marca, Patente y Obras de Propiedad Intelectual en Nicaragua </h3>
                <p>En Nicaragua, los procedimientos para inscribir una marca, una patente y obras protegidas 
                  por derechos de autor están regulados principalmente por tres leyes:</p>
                
                 <p>1. Ley No. 380, Ley de Marcas y Otros Signos Distintivos <br/>
                  2. Ley No. 354, Ley de Patentes de Invención, Modelos de Utilidad y Diseños Industriales<br/>
                  3. Ley No. 312, Ley de Derecho de Autor y Derechos Conexos
</p>
      </div>
    </div>
  )
}

export default acerca
