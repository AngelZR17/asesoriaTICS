import React from "react";
import imagenEjemplo from '../imagenes/img1.jpg';
import imagenEjemplo2 from '../imagenes/img2.jpg';
import cfe from '../imagenes/cfe.png'
import conagua from '../imagenes/conagua.png'
import infinitum from '../imagenes/infinitum.png'
import facebook from '../imagenes/facebook.png'
import whatsapp from '../imagenes/whatsapp.png'
import chrome from '../imagenes/chrome.png'
import { Card } from "./card";
import { Link } from "react-router-dom";

export const Index = () => {
    return(
        <div class = 'container'>
            <div class="row">
                <h1>¿Qué puedes hacer en la red, internet o wifi?</h1>
            </div>
            <div class="row">
                <div className = 'textcontainer col-8 card'>
                    <p className="card-body" style={{ textAlign: 'justify', marginTop: '35px'}}>
                        Esta pagina tiene como objetivo asesorar a los adultos en el uso de las tics, se les instruira 
                        para que ellos mismos puedan hacer pagos en linea, usar las redes sociales, aprender a usar ciertas 
                        aplicaciones como Facebook, Whatsapp, etc.
                    </p>
                </div>
                <div class="col-4">
                    <img  src={imagenEjemplo} class="img-fluid" style={{ marginBottom: '20px' }}/>
                </div>
                <div class="col-4">
                    <img  src={imagenEjemplo2} class="img-fluid" style={{ marginBottom: '20px' }}/>
                </div>
                <div className = "textcontainer col-8 card" style={{ display: 'flex', alignItems: 'center' }}>
                    <p className="card-body" style={{ textAlign: 'justify', marginTop: '35px'}}>
                        Los avances de la tecnologia nos ha permitido hacer las cosas con mas facilidad, es decir,
                        nos ha simplificado la vida, por ejemplo a la hora de pagar el servicio del agua, la luz y el internet
                        haciendo que se pueda pagar a traves de aplicaciones sin salir de casa o en cualquier otro lugar sin
                        ir a la sucursal.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <Card
                        image={cfe}
                        title="CFE"
                        description="Aprender a consultar recibo de luz"
                        link='/cfe'
                    />
                </div>
                <div className="col-4">
                    <Card
                        image={conagua}
                        title="CONAGUA"
                        description="Aprender a consultar recibo del agua"
                        link='/conagua'
                    />
                </div>
                <div className="col-4">
                    <Card
                        image={infinitum}
                        title="INFINITUM"
                        description="Aprender a consultar recibo de internet"
                        link='/infinitum'
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <Card
                        image={facebook}
                        title="FACEBOOK"
                        description="Aprender a usar facebook"
                        link='/facebook'
                    />
                </div>
                <div className="col-4">
                    <Card
                        image={whatsapp}
                        title="WHATSAPP"
                        description="Aprender a usar whatsapp"
                        link='/whatsapp'
                    />
                </div>
                <div className="col-4">
                    <Card
                        image={chrome}
                        title="NAVEGADORES"
                        description="Aprender a usar un navegador web"
                        link='/navegadores'
                    />
                </div>
            </div>
        </div>
    );
}