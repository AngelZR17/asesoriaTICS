import React from "react";
import { Regresar } from "./btnRegresar";
import paso1 from '../imagenes/guia shein/paso1.jpg';
import paso2 from '../imagenes/guia shein/paso2.jpg';
import paso3 from '../imagenes/guia shein/paso3.jpg';
import paso4 from '../imagenes/guia shein/paso4.jpg';
import paso5 from '../imagenes/guia shein/paso5.jpg';
import paso6 from '../imagenes/guia shein/paso6.jpg';
import paso7 from '../imagenes/guia shein/paso7.jpg';
import paso8 from '../imagenes/guia shein/paso8.jpg';
import paso9 from '../imagenes/guia shein/paso9.jpg';

export const SHEIN = () => {
    return(
        <>
        <div className = 'container'>
            <h2>Cómo crear una cuenta en Shein</h2>
            <div className='card' style={{borderColor: 'black', borderWidth: '2px', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', maxWidth: '80%', paddingTop: '30px'}}>
                <p><strong>Paso 1:</strong> Ubicamos nuestra aplicación <strong>Shein</strong> descargada en nuestro dispositivo móvil</p>
                <img  src={paso1} class="img-fluid" alt="Prueba" style={{ marginBottom: '40px', width: '300px' }}/>
            </div>
            <div className='card' style={{borderColor: 'black', borderWidth: '2px', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', maxWidth: '80%', paddingTop: '30px'}}>
                <p><strong>Paso 2:</strong> Al ingresar por primera vez a la aplicación se nos abrirá la siguiente pantalla de <strong>Bienvenido a Shein</strong>
                <br/> y le damos clic al botón <strong>Ir de compras</strong></p>
                <img  src={paso2} class="img-fluid" alt="Prueba" style={{ marginBottom: '40px', width: '300px' }}/>
            </div>
            <div className='card' style={{borderColor: 'black', borderWidth: '2px', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', maxWidth: '80%', paddingTop: '30px'}}>
                <p><strong>Paso 3:</strong> En caso de que se abra el siguiente diálogo para cupones, le daremos clic a la "X" para cerrar el diálogo</p>
                <img  src={paso3} class="img-fluid" alt="Prueba" style={{ marginBottom: '40px', width: '300px' }}/>
            </div>
            <div className='card' style={{borderColor: 'black', borderWidth: '2px', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', maxWidth: '80%', paddingTop: '30px'}}> 
                <p><strong>Paso 4:</strong> En la pantalla principal nos aparecen varios botones y pestañas,<br/>aqui ubicaremos la seccion <strong>Yo</strong> para poder crear una cuenta en <strong>Shein</strong></p>
                <img  src={paso4} class="img-fluid" alt="Prueba" style={{ marginBottom: '40px', width: '300px' }}/>
            </div>
            <div className='card' style={{borderColor: 'black', borderWidth: '2px', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', maxWidth: '80%', paddingTop: '30px'}}>
                <p><strong>Paso 5:</strong> Se nos abrirá la siguiente pantalla donde buscaremos el icono de <strong>ajustes</strong> en la parte superior</p>
                <img  src={paso5} class="img-fluid" alt="Prueba" style={{ marginBottom: '40px', width: '300px' }}/>
            </div>
            <div className='card' style={{borderColor: 'black', borderWidth: '2px', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', maxWidth: '80%', paddingTop: '30px'}}>
                <p><strong>Paso 6:</strong> Damos clic en <strong>Iniciar sesión/registrarse</strong> para empezar a crear nuestra cuenta</p>
                <img  src={paso6} class="img-fluid" alt="Prueba" style={{ marginBottom: '40px', width: '300px' }}/>
            </div>
            <div className='card' style={{borderColor: 'black', borderWidth: '2px', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', maxWidth: '80%', paddingTop: '30px'}}>
                <p><strong>Paso 7:</strong> Se nos abrirá la siguiente pantalla donde le daremos clic al boton <strong>Continuar con Google</strong></p>
                <img  src={paso7} class="img-fluid" alt="Prueba" style={{ marginBottom: '40px', width: '300px' }}/>
            </div>
            <div className='card' style={{borderColor: 'black', borderWidth: '2px', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', maxWidth: '80%', paddingTop: '30px'}}>
                <p><strong>Paso 8:</strong> Se nos abrirá un diálogo donde nos pide que elijamos la cuenta. 
                <br/>Para este caso utilizaremos de ejemplo la cuenta <strong>DEV BSEWAMODS</strong> y seleccionamos la cuenta</p>
                <img  src={paso8} class="img-fluid" alt="Prueba" style={{ marginBottom: '40px', width: '300px' }}/>
            </div>
            <div className='card' style={{borderColor: 'black', borderWidth: '2px', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', maxWidth: '80%', paddingTop: '30px'}}>
                <p><strong>Paso 9:</strong> Nos avisará la app que nuestro registro ha sido exitoso, así que procedemos a cerrar el diálogo con la "X"<br/>y ya tenemos una cuenta en <strong>Shein</strong> para poder comprar articulos en linea</p>
                <img  src={paso9} class="img-fluid" alt="Prueba" style={{ marginBottom: '40px', width: '300px' }}/>
            </div>
        </div>
    <Regresar/>
    </>
    );
}