
import React, { useRef } from 'react'
import './galeria.css'
import foto1 from '../../assets/patentar.png'
import foto2 from '../../assets/verificar.png'
import foto3 from '../../assets/vendedor.png'
import derecha from '../../assets/flecha-derecha.png'
import iquierda from '../../assets/flecha-izquierda.png'


const galeria = () => {

     const slider = useRef();
     let tx=0; 
    const adelante = ()=>{
        if(tx > -50){
             tx -= 25
        }
     slider.current.style.transform = `translateX(${tx}%)`;
    }
      const atras = ()=>{
        if(tx < 0 ){
             tx += 25
        }
     slider.current.style.transform = `translateX(${tx}%)`;
    }

     return (
    <div className='galeria'>

        <img src={derecha} alt="" className='derecha' onClick={adelante} />
        <img src={iquierda} alt="" className='izquierda'  onClick={atras}/>
        <div className="slider">
            <ul ref={slider}  >
                <li>
                    <div className="slide">
                        <div className="info-usuario">
                        <img src={foto1} alt="" />
                             <div>
                                    <h3> Testamento</h3>
                                    <h4>Es un acto solemne en que una persona dispone libremente del todo o parte de sus bienes para que tenga pleno efecto despues de su muerte </h4>
                             </div>
                        </div>
                        <p>
                            
                        Procedimiento:<br/>
                        1.  ser mayor de edad.<br/>
	                    2.  Estar en pleno uso de sus facultades .<br/>
                       <br/>
                        <h3>Testamento abierto</h3>
                       
                            <p>tres testigos idoneos </p>
                            
                       
                         <h3>Testamento cerrado</h3>
                       
                            <p>Cinco testigos idoneos </p>
                            <p>Escribe  el testamento, lo coloca sobre un sobre cerrado y lo presenta al abogado  declarando de viva voz que ese sobre contiene su ultima voluntad</p>
                            
                       
	
                        </p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="info-usuario">
                        <img src={foto2} alt="" />
                             <div>
                                    <h3> Inscribir un bien inmueble </h3>
                                    <h4> Para hacerte dueño legitimo en dominio y posesión de un bien inmueble , se debe cumplir ciertos requisitos  </h4>
                             </div>
                        </div>
                        <p>
                        Documentacion Preliminar:<br/>
                        1.   Certificado Resgistral o titulo de propiedad <br/>
	                    2.   Certificado de Datos Catastrales y Plano aprobado por el INETER .<br/>
                        3.    Solvencia Municipal
                         Formalizacion del titulo :<br/>
                        1.   Escritura de Compra Venta  <br/>
	                    2. Insercion de Documentos
                        3. pago de Avaluo Catastral y pago del impuesto por transmición de bienes inmuebles. 
                          Inscripcion en el registro público de la propiedad :<br/>
                        1.   Presentación <br/>
	                    2.    Tasación y pago de aranceles  .<br/>
                        3.    Asiento de Inscripción.<br/>
                        3.    Entrega de Inscripción
                        </p>
                            
                     
                        
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="info-usuario">
                        <img src={foto2} alt="" />
                             <div>
                                    <h3>Inscripción de una Patente (Ley No. 354)</h3>
                                    <h4>Autoridad competente: RPI - MIFIC.</h4>
                             </div>
                        </div>
                        <p>
                        Tipos: Patente de invención, modelo de utilidad o diseño industrial.<br/>
Procedimiento:<br/>
1. Presentación de solicitud con descripción, reivindicaciones, dibujos y resumen.<br/>
	2. Pago de aranceles.<br/>
	3. Examen de forma.<br/>
  4. Publicación en La Gaceta.
5. Período de observaciones/oposiciones: 60 días.<br/>
6. Examen de fondo (para patentes de invención).<br/>
7. Resolución del registro.
<br/>	8. Entrega del certificado de patente.<br/>
Vigencia:<br/>
- Patente de invención: 20 años.<br/>



                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="info-usuario">
                        <img src={foto3} alt="" />
                             <div>
                                    <h3>Regristro de Marca</h3>
                             </div>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde dicta consequatur totam 
                            neque cum explicabo molestias deleniti expedita earum dolorem? Quod quis voluptate aperiam modi sed earum sit rem nemo!
                        </p>
                    </div>
                </li>
            </ul>

        </div>
      
    </div>
  )
}

export default galeria
