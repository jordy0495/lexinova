import React from 'react'
import Navbar from './componentes/Navbar/navbar'
import   Fondo from './componentes/fondo/fondo'
import Titulo from './componentes/titulos/titulo'
import Objetivos from './componentes/objetivos/objetivos'
import Acerca from  './componentes/acerca de/acerca'
import Galeria  from  './componentes/galeria/galeria'
import Notarial  from  './componentes/galeria/notarial'
import Final from  './componentes/footer/footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Fondo/>
      <div className="container">

      <Titulo subtitulo='Objetivos de Lexinova' titulo='TITULO'  />
      <Objetivos />
     s
      <Titulo subtitulo=' Derecho Notarial ' titulo='TITULO'  />
      <Notarial/>
      <Titulo subtitulo='Derecho comercial' titulo='TITULO'  />
       <Galeria/>
      <Final/>
    
      
      </div>
      
    </div>
  )
}

export default App

