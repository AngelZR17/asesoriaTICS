import React from "react";
import imagenEjemplo from '../imagenes/img1.jpg';
import imagenEjemplo2 from '../imagenes/img2.jpg';

export const Index = () => {
    return(
        <div class = 'container'>
            <div class="row">
                <h1>¿Qué puedes hacer en la red, internet o wifi?</h1>
            </div>
            <div class="row">
                <div className = 'textcontainer col-8 card'>
                    <p className="card-body">
                        Esta pagina tiene como objetivo asesorar a los adultos en el uso de las tics, se les instruira 
                        para que ellos mismos puedan hacer pagos en linea, usar las redes sociales, aprender a usar ciertas 
                        aplicaciones como Facebook, Whatsapp, etc.
                    </p>
                </div>
                <div class="col-4">
                    <img  src={imagenEjemplo} class="img-fluid"/>
                </div>
                <div class="col-4">
                    <img  src={imagenEjemplo2} class="img-fluid"/>
                </div>

                <div className = 'textcontainer col-8 card'>
                    <p className="card-body">
                        Los avances de la tecnologia nos ha permitido hacer las cosas con mas facilidad, es decir,
                        nos ha simplificado la vida, por ejemplo a la hora de pagar el servicio del agua, la luz y el internet
                        haciendo que se pueda pagar a traves de aplicaciones sin salir de casa o en cualquier otro lugar sin
                        ir a la sucursal.
                    </p>
                </div>
            </div>
        </div>
    );
}