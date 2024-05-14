import React, { useEffect } from "react";
import { Regresar } from "./btnRegresar";
import { Link } from "react-router-dom";
import paso2 from '../imagenes/guia facebook/paso2.jpg';
import paso3 from '../imagenes/guia facebook/paso3.jpg';
import paso4 from '../imagenes/guia facebook/paso4.jpg';
import paso5 from '../imagenes/guia facebook/paso5.jpg';
import paso6 from '../imagenes/guia facebook/paso6.jpg';
import paso7 from '../imagenes/guia facebook/paso7.jpg';
import paso8 from '../imagenes/guia facebook/paso8.jpg';
import paso9 from '../imagenes/guia facebook/paso9.jpg';
import paso9_1 from '../imagenes/guia facebook/paso9-1.jpg';
import paso10 from '../imagenes/guia facebook/paso10.jpg';

export const FACEBOOK = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);    

    return(
        <>
        <div className = 'container'>
            <h2>Como crear una cuenta de Facebook</h2>
            <div className='card' style={{borderColor: 'black', borderWidth: '2px', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', maxWidth: '80%', paddingTop: '15px'}}> 
                <p><strong>Paso 1: </strong>Ingresa al siguiente enlace con el navegador de tu preferencia →&nbsp;
                    <Link to='https://www.facebook.com/' target='_blank'>
                        Facebook
                    </Link>
                </p>
            </div>
            <div className='card' style={{borderColor: 'black', borderWidth: '2px', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', maxWidth: '80%', paddingTop: '15px'}}> 
                <p><strong>Paso 2: </strong>Se nos abrirá una página como la siguiente, donde le daremos clic a botón de <strong>Crear cuenta nueva</strong></p>
                <img  src={paso2} class="img-fluid" alt="Prueba" style={{ marginBottom: '40px', width: '300px' }}/>
            </div>
            <div className='card' style={{borderColor: 'black', borderWidth: '2px', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', maxWidth: '80%', paddingTop: '15px'}}> 
                <p><strong>Paso 3: </strong>Después se nos abrirá la siguiente pantalla donde se nos pedirá que coloquemos nuestro nombre y apellidos,<br/>una vez que los pongamos, le daremos clic en <strong>Continuar</strong></p>
                <img  src={paso3} class="img-fluid" alt="Prueba" style={{ marginBottom: '40px', width: '300px' }}/>
            </div>
            <div className='card' style={{borderColor: 'black', borderWidth: '2px', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', maxWidth: '80%', paddingTop: '15px'}}> 
                <p><strong>Paso 4: </strong>Luego se nos abrirá la siguiente página donde nos pedirá que coloquemos nuestra fecha de nacimiento</p>
                <img  src={paso4} class="img-fluid" alt="Prueba" style={{ marginBottom: '40px', width: '300px' }}/>
            </div>
            <div className='card' style={{borderColor: 'black', borderWidth: '2px', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', maxWidth: '80%', paddingTop: '15px'}}> 
                <p><strong>Paso 5: </strong>Luego nos pedirá que coloquemos nuestro número de teléfono y damos clic en <strong>Continuar</strong></p>
                <img  src={paso5} class="img-fluid" alt="Prueba" style={{ marginBottom: '40px', width: '300px' }}/>
            </div>
            <div className='card' style={{borderColor: 'black', borderWidth: '2px', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', maxWidth: '80%', paddingTop: '15px'}}> 
                <p><strong>Paso 6: </strong>Después tenemos que seleccionar nuestro genero y damos clic en <strong>Continuar</strong></p>
                <img  src={paso6} class="img-fluid" alt="Prueba" style={{ marginBottom: '40px', width: '300px' }}/>
            </div>
            <div className='card' style={{borderColor: 'black', borderWidth: '2px', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', maxWidth: '80%', paddingTop: '15px'}}> 
                <p><strong>Paso 7: </strong>Se nos pedirá una contraseña <strong>(Esta contraseña debe ser mayor o igual a 8 caracteres,<br/>para una mayor seguridad elige una contraseña que tenga caracteres especiales números y letras)</strong></p>
                <img  src={paso7} class="img-fluid" alt="Prueba" style={{ marginBottom: '40px', width: '300px' }}/>
            </div>
            <div className='card' style={{borderColor: 'black', borderWidth: '2px', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', maxWidth: '80%', paddingTop: '15px'}}> 
                <p><strong>Paso 8: </strong>Luego hay que esperar a que se cree la cuenta</p>
                <img  src={paso8} class="img-fluid" alt="Prueba" style={{ marginBottom: '40px', width: '300px' }}/>
            </div>
            <div className='card' style={{borderColor: 'black', borderWidth: '2px', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', maxWidth: '80%', paddingTop: '15px'}}> 
                <p><strong>Paso 9: </strong>Después se nos pedirá que confirmemos nuestra cuenta creada, para ello nos llegara un correo o un mensaje<br/> de parte de Facebook donde debemos ingresar los dígitos que nos mandaron al correo, luego damos clic en <strong>Continuar</strong></p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <img  src={paso9} class="img-fluid" alt="Prueba" style={{ marginBottom: '40px', width: '300px' }}/>
                    <img  src={paso9_1} class="img-fluid" alt="Prueba" style={{ marginBottom: '40px', width: '300px' }}/>
                </div>
            </div>
            <div className='card' style={{borderColor: 'black', borderWidth: '2px', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', maxWidth: '80%', paddingTop: '15px'}}> 
                <p><strong>Paso 10: </strong>Por último, una vez confirmado la cuenta ya estaría lista nuestra cuenta para usar</p>
                <img  src={paso10} class="img-fluid" alt="Prueba" style={{ marginBottom: '40px', width: '300px' }}/>
            </div>
        </div>
        <Regresar/>
        </>
    );
}