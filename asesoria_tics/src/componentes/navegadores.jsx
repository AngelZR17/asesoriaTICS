import React, { useEffect } from "react";
import { Regresar } from "./btnRegresar";
import paso1 from '../imagenes/guia navegadores/paso1.jpg';
import paso2 from '../imagenes/guia navegadores/paso2.jpg';
import paso3 from '../imagenes/guia navegadores/paso3.jpg';
import paso4 from '../imagenes/guia navegadores/paso4.jpg';
import paso5 from '../imagenes/guia navegadores/paso5.jpg';
import paso6 from '../imagenes/guia navegadores/paso6.jpg';

export const NAVEGADORES = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return(
        <>
        <div className = 'container'>
            <h2>Navegadores</h2>
            <div className='card' style={{borderColor: 'black', borderWidth: '2px', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', maxWidth: '80%', paddingTop: '30px', paddingBottom: '20px'}}> 
                <p><strong>¿Qué son los navegadores de internet?</strong></p>
                <p>Los navegadores de internet son programas que usamos en nuestras computadoras, teléfonos o tabletas para ver páginas web. 
                Son como ventanas que nos permiten entrar y explorar diferentes sitios en internet.</p>
            </div>
            <div className='card' style={{borderColor: 'black', borderWidth: '2px', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', maxWidth: '80%', paddingTop: '30px', paddingBottom: '20px'}}> 
                <p><strong>¿Para qué sirven los navegadores de internet?</strong><br/>Sirven para varias cosas:</p>
                <ul style={{ textAlign: 'justify' }}>
                    <li>Nos permiten entrar a sitios web escribiendo direcciones como www.ejemplo.com.</li>
                    <li>Mostrarnos el contenido de las páginas web, como texto, imágenes y videos.</li>
                    <li>Podemos buscar información en internet usando un buscador como Google desde el navegador.</li>
                    <li>Nos ayudan a acceder a servicios en línea como el correo electrónico o redes sociales.</li>
                </ul>
            </div>
            <div className='card' style={{borderColor: 'black', borderWidth: '2px', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', maxWidth: '80%', paddingTop: '30px', paddingBottom: '20px'}}> 
                <p><strong>Algunos de los navegadores que existen</strong></p>
                <ul style={{ textAlign: 'justify' }}>
                    <li><strong>Google Chrome:</strong> Es muy popular y rápido. Lo usan muchas personas.</li>
                    <li><strong>Mozilla Firefox:</strong> Es conocido por cuidar la privacidad y se puede personalizar con diferentes funciones.</li>
                    <li><strong>Apple Safari:</strong> Viene preinstalado en los dispositivos de Apple como iPhones y Macs.</li>
                    <li><strong>Microsoft Edge:</strong> Es el navegador de Microsoft y es similar a Chrome.</li>
                    <li><strong>Opera:</strong> Tiene funciones únicas como mejorar la velocidad en conexiones lentas.</li>
                </ul>
            </div>

            <div className='card' style={{borderColor: 'black', borderWidth: '2px', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', maxWidth: '80%', paddingTop: '30px', paddingBottom: '20px'}}> 
                <p><strong>Como usar un navegador</strong></p>
                <p><strong>Abrir el navegador: </strong>Le damos clic al icono de nuestro navegador, ya sea en la computadora o en el telefono</p>
                <img  src={paso1} class="img-fluid" alt="Prueba" style={{ marginBottom: '40px', width: '300px' }}/>
                
                <p><strong>Ir a un Sitio Web: </strong>Escribe la dirección de la página web en la barra de arriba y presiona "Enter" para abrir la página</p>
                <img  src={paso2} class="img-fluid" alt="Prueba" style={{ marginBottom: '40px', width: '300px' }}/>

                <p><strong>Explorar la Página: </strong>Haz clic en enlaces o botones para ver diferentes partes de la página.</p>
                <img  src={paso3} class="img-fluid" alt="Prueba" style={{ marginBottom: '40px', width: '300px' }}/>

                <p><strong>Buscar en Internet: </strong>Usa la barra de búsqueda en la página principal del navegador para buscar información.</p>
                <img  src={paso4} class="img-fluid" alt="Prueba" style={{ marginBottom: '40px', width: '300px' }}/>

                <p><strong>Configuraciones: </strong>Puedes ajustar algunas cosas como la página de inicio o bloquear cookies desde el menú del navegador.</p>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <img src={paso5} class="img-fluid" alt="Prueba" style={{ marginBottom: '40px', width: '300px' }}/>
                    <img src={paso6} class="img-fluid" alt="Prueba" style={{ marginBottom: '40px', width: '300px' }}/>
                </div>
            </div>
        </div>
        <Regresar/>
        </>
    );
}