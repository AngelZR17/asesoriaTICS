import React from "react";
import { Regresar } from "./btnRegresar";
import { Link } from "react-router-dom";
import ejemplo from '../imagenes/guia cfe/ejemplo.png'
import paso2 from '../imagenes/guia cfe/paso2.png'
import paso3 from '../imagenes/guia cfe/paso3.png'
import paso4 from '../imagenes/guia cfe/paso4.png';

export const CFE = () => {
    return(
        <>
        <div className = 'container'>
            <h2>Guía para consultar el recibo de la Luz </h2>
            <p style={{ color: 'red' }}>Nota: Antes de consultar tu recibo en digital, recuerda contar con un recibo en físico a la mano</p>
            <p><strong>Paso 1: </strong> Ingresa al siguiente enlace en tu navegador de preferencia →
                <Link to='https://app.cfe.mx/Aplicaciones/CCFE/SolicitudesCFE/Solicitudes/ConsultaTuReciboLuzGmx' target='_blank'>
                    Consultar recibo CFE
                </Link>
            </p>
            <p style={{ marginBottom: '30px' }}>
            <strong>Paso 2: </strong>Al ingresar al enlace nos abrirá una pagina como la siguiente, en donde debemos colocar los siguientes datos:
            </p>
            <ul>
                <li><strong>Nombre del servicio (Campo obligatorio): </strong>Aquí se coloca el nombre del cliente, este lo podemos encontrar en nuestro recibo físico</li>
                <li><strong>Numero de servicio (Campo obligatorio): </strong>Aquí se coloca el numero de servicio, este lo podemos encontrar en nuestro recibo físico</li>
            </ul>
            <img  src={ejemplo} class="img-fluid" alt="Prueba" style={{ marginBottom: '20px', width: '500px' }}/>
            <ul style={{ marginBottom: '50px' }}>
                <li><strong>Lada (Campo obligatorio): </strong>Aquí colocamos la lada de nuestro número de teléfono fijo</li>
                <li><strong>Teléfono fijo (Campo obligatorio): </strong>Aquí colocamos el número de teléfono fijo<br/> (Nota: debe ser a 8 dígitos, 
                en caso de no completar los 8 dígitos puedes replicar el ultimo digito de tu número)</li>
                <li><strong>Teléfono móvil (Campo no obligatorio): </strong>Aquí colocamos el número de celular</li>
                <li><strong>Correo electrónico (Campo obligatorio):  </strong>Aquí colocamos un correo electrónico ya sea personal o de algún familiar</li>
            </ul>
            <img  src={paso2} class="img-fluid" alt="Prueba" style={{ marginBottom: '20px', width: '500px' }}/>
            <p><strong>Paso 3: </strong> Damos clic en la casilla de No soy un robot para posteriormente dar clic en el botón de Continuar</p>
            <img  src={paso3} class="img-fluid" alt="Prueba" style={{ marginBottom: '20px', width: '500px' }}/>
            <p><strong>Paso 4: </strong> Una vez dado al botón de "Continuar" se nos abre la siguiente página donde <br/>podemos visualizar todos nuestros recibos, para descargarlos solo damos clic en el icono pdf </p>
            <img  src={paso4} class="img-fluid" alt="Prueba" style={{ marginBottom: '20px', width: '300px' }}/>
        </div>
        <Regresar></Regresar>
        </>
    );
}