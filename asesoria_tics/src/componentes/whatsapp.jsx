import React from "react";
import { Regresar } from "./btnRegresar";
import paso1 from '../imagenes/guia whatsapp/paso1.jpg';
import paso2 from '../imagenes/guia whatsapp/paso2.jpg';
import paso3 from '../imagenes/guia whatsapp/paso3.jpg';
import paso4 from '../imagenes/guia whatsapp/paso4.jpg';
import paso5 from '../imagenes/guia whatsapp/paso5.jpg';
import paso6 from '../imagenes/guia whatsapp/paso6.jpg';
import paso7 from '../imagenes/guia whatsapp/paso7.jpg';
import paso8 from '../imagenes/guia whatsapp/paso8.jpg';

export const WHATSAPP = () => {
    return(
        <>
        <div className = 'container'>
            <h2>Como crear una cuenta en WhatsApp Messenger</h2>
            <div className='card' style={{borderColor: 'black', borderWidth: '2px', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', maxWidth: '80%', paddingTop: '30px'}}> 
                <p><strong>Paso 1: </strong>Para iniciar se nos abre la siguiente ventana en donde debemos seleccionar el idioma<br/> 
                de la aplicación pulsamos en el idioma <strong>Español</strong> y luego damos clic en el <strong>botón verde con la fechita</strong></p>
                <img  src={paso1} class="img-fluid" alt="Prueba" style={{ marginBottom: '40px', width: '300px' }}/>
            </div>
            <div className='card' style={{borderColor: 'black', borderWidth: '2px', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', maxWidth: '80%', paddingTop: '30px'}}> 
                <p><strong>Paso 2: </strong>Luego damos clic en el boton <strong>Aceptar y continuar</strong></p>
                <img  src={paso2} class="img-fluid" alt="Prueba" style={{ marginBottom: '40px', width: '300px' }}/>
            </div>
            <div className='card' style={{borderColor: 'black', borderWidth: '2px', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', maxWidth: '80%', paddingTop: '30px'}}> 
                <p><strong>Paso 3: </strong>Se nos abrirá la siguiente ventana donde debemos ingresar <br/>el <strong>número de teléfono</strong> y damos clic en <strong>Sig.</strong></p>
                <img  src={paso3} class="img-fluid" alt="Prueba" style={{ marginBottom: '40px', width: '300px' }}/>
            </div>
            <div className='card' style={{borderColor: 'black', borderWidth: '2px', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', maxWidth: '80%', paddingTop: '30px'}}> 
                <p><strong>Paso 4: </strong>Nos saldrá un mensaje como el siguiente preguntándonos si el número de teléfono es correcto,<br/> una vez que verifiquemos que el telefono es el correcto, daremos clic en <strong>Ok</strong></p>
                <img  src={paso4} class="img-fluid" alt="Prueba" style={{ marginBottom: '40px', width: '300px' }}/>
            </div>
            <div className='card' style={{borderColor: 'black', borderWidth: '2px', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', maxWidth: '80%', paddingTop: '30px'}}> 
                <p><strong>Paso 5: </strong>Después nos saldrá una ventana como la siguiente, donde debemos<br/> colocar el código de verificación que nos llega por mensaje de texto</p>
                <img  src={paso5} class="img-fluid" alt="Prueba" style={{ marginBottom: '40px', width: '300px' }}/>
            </div>
            <div className='card' style={{borderColor: 'black', borderWidth: '2px', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', maxWidth: '80%', paddingTop: '30px'}}> 
                <p><strong>Paso 6: </strong>Automáticamente nos redirigirá a la siguiente ventana en donde podemos<br/> cambiar nuestro nombre y nuestra foto de perfil, una vez que lo tengamos damos clic en <strong>Sig.</strong></p>
                <img  src={paso6} class="img-fluid" alt="Prueba" style={{ marginBottom: '40px', width: '300px' }}/>
            </div>
            <div className='card' style={{borderColor: 'black', borderWidth: '2px', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', maxWidth: '80%', paddingTop: '30px'}}> 
                <p><strong>Paso 7: </strong>Por último, esperamos un momento en lo que se crea nuestra cuenta de WhatsApp </p>
                <img  src={paso7} class="img-fluid" alt="Prueba" style={{ marginBottom: '40px', width: '300px' }}/>
            </div>
            <div className='card' style={{borderColor: 'black', borderWidth: '2px', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', maxWidth: '80%', paddingTop: '30px'}}> 
                <p><strong>Paso 8: </strong>Y listo se ha creado nuestra cuenta de WhatsApp satisfactoriamente</p>
                <img  src={paso8} class="img-fluid" alt="Prueba" style={{ marginBottom: '40px', width: '300px' }}/>
            </div>
        </div>
        <Regresar/>
        </>
    );
}