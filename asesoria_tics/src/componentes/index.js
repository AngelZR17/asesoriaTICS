import React from "react";
import imagenEjemplo from '../imagenes/img1.jpg';
import imagenEjemplo2 from '../imagenes/img2.jpg';
import cfe from '../imagenes/cfe.png'
import conagua from '../imagenes/cona.png'
import infinitum from '../imagenes/infinitum.png'

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
            <div className="row cards">
                <div className="col-4">   
                    <div class="card">
                        <div class="image">
                            <img src={cfe}/>
                        </div>
                        <div class="content">
                            <a href="#">
                            <span class="title">
                                CFE
                            </span>
                            </a>

                            <p class="desc">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                            dolores, possimus pariatur animi temporibus nesciunt praesentium 
                            </p>

                            <a class="action" href="#">
                            Find out more
                            <span aria-hidden="true">
                                →
                            </span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-4">      
                    <div class="card">
                        <div class="image">
                            <img className="conagua" src={conagua}/>
                        </div>
                        <div class="content">
                            <a href="#">
                            <span class="title">
                               Conagua
                            </span>
                            </a>

                            <p class="desc">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                            dolores, possimus pariatur animi temporibus nesciunt praesentium 
                            </p>

                            <a class="action" href="#">
                            Find out more
                            <span aria-hidden="true">
                                →
                            </span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-4">   
                    <div class="card">
                        <div class="image">
                            <img className="infinitum" src={infinitum}/>
                        </div>
                        <div class="content">
                            <a href="#">
                            <span class="title">
                                Infinitum
                            </span>
                            </a>

                            <p class="desc">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                            dolores, possimus pariatur animi temporibus nesciunt praesentium 
                            </p>

                            <a class="action" href="#">
                            Find out more
                            <span aria-hidden="true">
                                →
                            </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}