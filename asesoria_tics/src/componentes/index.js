import React from "react";
import imagenEjemplo from '../imagenes/img1.jpg';

export const Index = () => {
    return(
        <div className = 'container'>
            <h1>¿Qué puedes hacer en la red, internet o wifi?</h1>
            <div className = 'textcontainer'>
                <p>
                    Esta pagina tiene como objetivo asesorar a los adultos en el uso de las tics, se les instruira 
                    para que ellos mismos puedan hacer pagos en linea, usar las redes sociales, aprender a usar ciertas 
                    aplicaciones como Facebook, Whatsapp, etc.
                </p>
                
            </div>
            <img className='img1' src={imagenEjemplo}/>
            
        </div>
    );
}