import React, { useState }  from 'react';
import './navbar.css'
import logo from '../../assets/logo4.png'
import { Link, Element } from 'react-scroll'
import  icono from '../../assets/icono.png'


const navbar = () => {
   /*const[estado, SetEstado]=UseState(false);

   UseEffect(()=>{
      window.addEventListener('scroll', ()=>{
         window.scrollY > 500 ? SetEstado(true) : SetEstado(false);
         console.log(estado);
         
      })
   },[]);*/
   const[menu, setmenu]= useState(false);
   const tocmenu = () =>{
      menu ? setmenu(false) : setmenu(true);

   }
  return  (
    /*<nav className={`container ${estado?'dark-nav' : ''}`} >*/
    <nav className='container'>

    <img src={logo} alt="" className='logo' />
       <ul className={menu? '': 'mobile-icon' }>
       <li><Link to="fondo" smooth={true} duration={260}>inicio</Link> </li>
       <li><Link to="objetivos" smooth={true} duration={260}>Objetivos</Link></li>
       <li><Link to="acerca" smooth={true} duration={260}>Regristro</Link></li>
       <li><Link to="galeria" smooth={true} duration={260}>Requisitos</Link></li>
       <li><Link to="fondo" smooth={true} duration={260}>Contactanos</Link></li>
       
       </ul>
      <img src={icono} alt="" className='icono' onClick={tocmenu} />
    </nav>
   )
}

export default navbar
