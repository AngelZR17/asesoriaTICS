import React from "react";
import imagenEjemplo from '../imagenes/img1.jpg';

export const Index = () => {
    return(
        <div class = 'container'>
            <div class="row">
                <h1>¿Qué puedes hacer en la red, internet o wifi?</h1>
            </div>
            <div class="row">
            <div className = 'textcontainer' class="col-8">
                <p>
                    Esta pagina tiene como objetivo asesorar a los adultos en el uso de las tics, se les instruira 
                    para que ellos mismos puedan hacer pagos en linea, usar las redes sociales, aprender a usar ciertas 
                    aplicaciones como Facebook, Whatsapp, etc.
                </p>
                
            </div>
            <img class="col-4" src={imagenEjemplo}/>
            </div>
            
        </div>
    );
}