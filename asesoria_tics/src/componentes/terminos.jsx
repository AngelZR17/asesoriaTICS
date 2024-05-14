import React, { useEffect } from "react";
import { Regresar } from "./btnRegresar";

export const TERMINOS = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
    return(
        <>
        <div className = 'container'>
            <h2>Términos</h2>
            <div className='card' style={{borderColor: 'black', borderWidth: '2px', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', maxWidth: '80%', paddingTop: '30px', paddingBottom: '20px'}}> 
                <p><strong>¿Qué es un virus?<br/></strong>Un virus informático es un programa o software malicioso diseñado para infectar, dañar o controlar<br/> una computadora u otro dispositivo electrónico. Los virus pueden realizar diversas acciones nocivas 
                <br/>como robar información, corromper archivos, ralentizar el sistema o permitir el acceso no autorizado a la computadora.</p>
            </div>
            <div className='card' style={{borderColor: 'black', borderWidth: '2px', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', maxWidth: '80%', paddingTop: '30px', paddingBottom: '20px'}}> 
                <p><strong>Tipos de virus<br/></strong>Existen varios tipos de virus informáticos, entre ellos:</p>
                <ul style={{ textAlign: 'justify' }}>
                    <li><strong>Virus: </strong>Se adjuntan a programas ejecutables y se activan cuando estos programas se ejecutan.</li>
                    <li><strong>Gusanos: </strong>Se propagan a través de redes informáticas, explotando vulnerabilidades en sistemas conectados.</li>
                    <li><strong>Troyanos: </strong>Aparentan ser programas legítimos pero en realidad tienen funciones maliciosas ocultas.</li>
                    <li><strong>Spyware: </strong>Recopila información del usuario sin su consentimiento, como contraseñas o hábitos de navegación.</li>
                    <li><strong>Ransomware: </strong>Bloquea el acceso a la computadora o archivos hasta que se pague un rescate.</li>
                </ul>
            </div>
            <div className='card' style={{borderColor: 'black', borderWidth: '2px', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', maxWidth: '80%', paddingTop: '30px', paddingBottom: '20px'}}> 
                <p><strong>Como mantenerse seguro de los virus<br/></strong>Para mantenerse seguro frente a virus y otras amenazas informáticas, considera seguir estos consejos:</p>
                <ul style={{ textAlign: 'justify' }}>
                    <li><strong>Instala software antivirus: </strong>Utiliza un buen programa antivirus actualizado para proteger tu dispositivo.</li>
                    <li><strong>Mantén el software actualizado: </strong>Instala regularmente las actualizaciones de software y parches de seguridad.</li>
                    <li><strong>Ten cuidado con los correos electrónicos sospechosos: </strong>No abras archivos adjuntos ni hagas clic<br/> a los enlaces de correos electrónicos desconocidos o no solicitados.</li>
                    <li><strong>Descarga solo de fuentes confiables: </strong>Evita descargar software de sitios web no verificados o de dudosa procedencia.</li>
                    <li><strong>Usa contraseñas seguras: </strong>Utiliza contraseñas únicas y sólidas para proteger tus cuentas y dispositivos.</li>
                    <li><strong>Realiza copias de seguridad regulares: </strong>Guarda copias de seguridad de tus archivos importantes<br/> ya sea en la nube, en una usb o en un disco duro</li>
                </ul>
            </div>
            <div className='card' style={{borderColor: 'black', borderWidth: '2px', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', maxWidth: '80%', paddingTop: '30px', paddingBottom: '20px'}}> 
                <p><strong>Consejos para mantenerte a ti y a tus hijos protegidos en la red<br/></strong></p>
                <ul style={{ textAlign: 'justify' }}>
                    <li><strong>Educación sobre seguridad en línea: </strong>Enséñales sobre los riesgos en línea y a cómo proteger su información personal.</li>
                    <li><strong>Configuración de privacidad: </strong>Ayúdales a ajustar la configuración de privacidad en sus cuentas y dispositivos.</li>
                    <li><strong>Uso de controles parentales: </strong>Instala y configura software de control parental en sus dispositivos.</li>
                </ul>
            </div>
            <div className='card' style={{borderColor: 'black', borderWidth: '2px', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', maxWidth: '80%', paddingTop: '30px', paddingBottom: '20px'}}> 
                <p><strong>¿Qué es un control parental?<br/></strong>
                Un control parental es una herramienta que permite a los padres monitorear y restringir la actividad en linea de sus hijos.<br/> 
                Puede incluir funciones como limitar el tiempo en línea, bloquear sitios web inapropiados y controlar las actividades en internet. 
                Es una forma facil y eficaz de proteger a tus hijos del contenido que no es apto para su edad y de supervisar su actividad en la red.
                </p>
            </div>
            <div className='card' style={{borderColor: 'black', borderWidth: '2px', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', maxWidth: '80%', paddingTop: '30px', paddingBottom: '20px'}}> 
                <p><strong>Consejos que los padres de familia les pueden dar a sus hijos<br/></strong>
                Un control parental es una herramienta que permite a los padres monitorear y restringir la actividad en linea de sus hijos.<br/> 
                Puede incluir funciones como limitar el tiempo en línea, bloquear sitios web inapropiados y controlar las actividades en internet. 
                Es una forma facil y eficaz de proteger a tus hijos del contenido que no es apto para su edad y de supervisar su actividad en la red.
                </p>
                <ul style={{ paddingLeft: '50px', paddingRight: '20px',textAlign: 'justify' }}>
                    <li><strong>Educación sobre el uso seguro de internet: </strong> Enséñales a tus hijos sobre los peligros potenciales en línea, 
                    como el contacto con extraños, el compartir información personal y el comportamiento adecuado en internet.</li><br/>
                    <li><strong>Establecer reglas y límites: </strong> Define reglas claras sobre cuándo y por cuánto tiempo pueden usar internet. 
                    Establece límites de tiempo y lugares adecuados para usar dispositivos en casa.</li><br/>
                    <li><strong>Supervisar la actividad en línea: </strong> Mantente al tanto de qué sitios web visitan tus hijos y qué actividades realizan en línea. 
                    Puedes utilizar herramientas de control parental y configurar filtros de contenido.</li><br/>
                    <li><strong>Comunicación abierta: </strong> Fomenta un ambiente donde tus hijos se sientan cómodos hablando contigo sobre sus experiencias en línea. 
                    Anímalos a compartir si se sienten incómodos o si ven algo inapropiado.</li><br/>
                    <li><strong>Enseñar sobre privacidad y seguridad: </strong> Explícales la importancia de no compartir información personal en línea, 
                    como su dirección, número de teléfono o detalles de la escuela.</li><br/>
                    <li><strong>Utilizar software de seguridad: </strong> Instala software antivirus y de seguridad en los dispositivos 
                    que utilizan tus hijos para protegerlos de amenazas en línea, como malware o virus.</li><br/>
                    <li><strong>Filtrar y bloquear contenido inapropiado: </strong> Configura controles parentales en los dispositivos y
                     en el router de internet para bloquear sitios web inapropiados según la edad de tus hijos.</li><br/>
                    <li><strong>Supervisar las redes sociales y aplicaciones: </strong> Si tus hijos usan redes sociales u otras aplicaciones, 
                    asegúrate de revisar sus configuraciones de privacidad y establecer restricciones adecuadas.</li>
                </ul>
            </div>
        </div>
        <Regresar/>
        </>
    );
}