import React from "react";
import { Regresar } from "./btnRegresar";
import { Link } from "react-router-dom";
import ejemplo from '../imagenes/guia cfe/ejemplo.png';
import paso2 from '../imagenes/guia cfe/paso2.png';
import paso3 from '../imagenes/guia cfe/paso3.png';
import paso4 from '../imagenes/guia cfe/paso4.png';

export const CFE = () => {
    return(
        <>
        <div className = 'container'>
            <h2>Guía para consultar el recibo de la Luz</h2>
            <div className="alert alert-danger" style={{ display: 'flex' ,paddingBottom: '0px', width: '100%', justifyContent: 'center'}}>
                <p>Nota: Antes de consultar tu recibo en digital, recuerda contar con un recibo en físico a la mano</p>
            </div>
            <div className='card' style={{borderColor: 'black', borderWidth: '2px', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', maxWidth: '80%', paddingTop: '15px'}}> 
                <p><strong>Paso 1: </strong> Ingresa al siguiente enlace en tu navegador de preferencia →
                    <Link to='https://app.cfe.mx/Aplicaciones/CCFE/SolicitudesCFE/Solicitudes/ConsultaTuReciboLuzGmx' target='_blank'>
                        Consultar recibo CFE
                    </Link>
                </p>
            </div>
            <div className='card' style={{borderColor: 'black', borderWidth: '2px', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', maxWidth: '80%', paddingTop: '15px'}}> 
                <p style={{ marginBottom: '30px' }}>
                <strong>Paso 2: </strong>Al ingresar al enlace nos abrirá una pagina como la siguiente, en donde debemos colocar los siguientes datos:
                </p>
                <ul style={{ marginBottom: '50px', textAlign: 'justify' }}>
                    <li><strong>Nombre del servicio (Campo obligatorio): </strong>Aquí se coloca el nombre del cliente</li>
                    <li><strong>Numero de servicio (Campo obligatorio): </strong>Aquí se coloca el numero de servicio</li>
                </ul>
                <img  src={ejemplo} class="img-fluid" alt="Prueba" style={{ marginBottom: '20px', width: '500px' }}/>
                <ul style={{ marginBottom: '50px', textAlign: 'justify'}}>
                    <li style={{ marginLeft: '70px' }}><strong>Lada (Campo obligatorio): </strong>Aquí colocamos la lada de nuestro número de teléfono fijo</li>
                    <li style={{ marginLeft: '100px' }}><strong>Teléfono fijo (Campo obligatorio): </strong>Aquí colocamos el número de teléfono fijo</li>
                    <p style={{ color: 'red', marginBottom: '0px' }}>(Nota: debe ser a 8 dígitos, en caso de no completar los 8 dígitos puedes replicar el ultimo digito de tu número)</p>
                    <li style={{ marginLeft: '100px' }}><strong>Teléfono móvil (Campo no obligatorio): </strong>Aquí colocamos el número de celular</li>
                    <li style={{ marginLeft: '100px' }}><strong>Correo electrónico (Campo obligatorio):  </strong>Aquí colocamos un correo electrónico</li>
                </ul>
                <img  src={paso2} class="img-fluid" alt="Prueba" style={{ marginBottom: '20px', width: '500px' }}/>
            </div>
            <div className='card' style={{borderColor: 'black', borderWidth: '2px', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', maxWidth: '80%', paddingTop: '15px'}}> 
                <p><strong>Paso 3: </strong> Damos clic en la casilla de No soy un robot para posteriormente dar clic en el botón de Continuar</p>
                <img  src={paso3} class="img-fluid" alt="Prueba" style={{ marginBottom: '20px', width: '500px' }}/>
            </div>
            <div className='card' style={{borderColor: 'black', borderWidth: '2px', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', maxWidth: '80%', paddingTop: '15px'}}> 
                <p><strong>Paso 4: </strong> Una vez dado al botón de "Continuar" se nos abre la siguiente página donde <br/>podemos visualizar todos nuestros recibos, para descargarlos solo damos clic en el icono pdf correspondiente a la fecha que deseas consultar </p>
                <img  src={paso4} class="img-fluid" alt="Prueba" style={{ marginBottom: '20px', width: '300px' }}/>
            </div>
        </div>
        <Regresar/>
        </>
    );
}