import React from 'react';
import {
    Button,
    Container,
    UncontrolledCarousel
} from 'reactstrap';
import { BsCalendarDateFill } from 'react-icons/bs';
import {BiWorld} from 'react-icons/bi';
import {AiFillGithub} from 'react-icons/ai';
// Images
// videogamesApp
import vglanding from '../images/proyectsImages/videogameApp/vglanding.png';
import vghome from '../images/proyectsImages/videogameApp/vghome.png';
import vgform from '../images/proyectsImages/videogameApp/vgform.png';
import vgdetail from '../images/proyectsImages/videogameApp/vgdetail.png';
import vgrandom from '../images/proyectsImages/videogameApp/vgrandom.png';
// superhero app
import shlanding from '../images/proyectsImages/superheroApp/shlanding.png';
import shhome from '../images/proyectsImages/superheroApp/shhome.png';
import shhometeam from '../images/proyectsImages/superheroApp/shhometeam.png';
import shteam from '../images/proyectsImages/superheroApp/shteam.png';
import shdetail from '../images/proyectsImages/superheroApp/shdetail.png';
// weatherApp
import wahome from '../images/proyectsImages/weatherApp/wahome.png';
import wadetail from '../images/proyectsImages/weatherApp/wadetail.png';
import waaboutme from '../images/proyectsImages/weatherApp/waaboutme.png';
// calculadora
import clhome from '../images/proyectsImages/calculadora/clhome.png';
import cllifetime from '../images/proyectsImages/calculadora/cllifetime.png';
import clnextbirthday from '../images/proyectsImages/calculadora/clnextbirthday.png';
import claboutme from '../images/proyectsImages/calculadora/claboutme.png';

import style from '../style.module.css';

export default function Proyects() {
    return (
        <Container id='skr' className="p-5">
            <h1>Proyectos</h1>
            <div className={style.proyElements}>
                <div>
                    <h5 className='pt-3'>Videogame WebApp</h5>
                    <h6>Full Stack Developer</h6>
                    <h6><BsCalendarDateFill /> 10/2021 - 12/2021</h6>
                    <div className={style.carrouselProy}>
                        <UncontrolledCarousel
                            captionText={undefined}
                            items={[
                                {
                                    key: 1,
                                    src: vglanding
                                },
                                {
                                    key: 2,
                                    src: vghome
                                },
                                {
                                    key: 3,
                                    src: vgform
                                },
                                {
                                    key: 4,
                                    src: vgdetail
                                },
                                {
                                    key: 5,
                                    src: vgrandom
                                }
                            ]}
                        />
                    </div>
                    <h6>Descripción</h6>
                    <p>
                        Desarrollo de una Single Page Application (SPA), el trabajo realizado puede dividirse en tres partes globales.

                    </p>
                    <p>
                        Entre las funcionalidades que ofrece la pagina se puede encontrar:
                    </p>
                    <ul style={{'list-style':`none`}}>
                        <li>Posibilidad de agregar juegos de autoria propia.</li>
                        <li>Busqueda de juegos por nombre, tanto en DB como en una API externa.</li>
                        <li>Visualización del detalle por juego, plataformas disponibles, generos correspondientes y descripción.</li>
                        <li>Funcion de ordenamiento por rating del juego o alfabetico.</li>
                        <li>Funcion de filtrado por genero u origen del juego (DB o externo).</li>
                        <li>Visualizador random de videojuegos, dota al usuario de la capacidad de descubrir nuevos titulos.</li>
                    </ul>
                    <ul>
                        <li>
                            <p>Base de datos</p>
                            <ul>
                                <li>
                                    Diseño e implementación de una base de datos relacional con PostgreSQL, se utilizaron dos entidades
                                    (Genres y Videogames) que se relacionan entre sí por una tabla intermedia.
                                    <br />
                                    Para la realización de consultas e inserciones en DB y la interacción de esta con el Back-End implementado se hizo uso
                                    de Sequelize, un ORM (Object Relational Mapping).
                                </li>
                            </ul>
                        </li>
                        <br />
                        <li>
                            <p>Back-End</p>
                            <ul>
                                <li>
                                    Se utilizó ExpressJs para la puesta en marcha del servidor y como se explicó en a sección anterior
                                    se usó Sequelize para las querys a DB. Por otro lado las request a la <a href="https://api.rawg.io/docs/">API REST externa</a> (RAWG Video Games Database API)
                                    se realizaron utilizando la libreria Axios. El manejo de promesas
                                    se realizó mediante la utilización de async-await.
                                    <br />
                                    La inclusión de un desarrollo Back-End en este tipo de proyecto obedece principalmente a dos motivos, el primero de ellos
                                    es la manipulación y acondicionamiento de datos provenientes tanto de DB como de la API externa y el segundo motivo es para
                                    mantener la Videogames WebApp operativa (total o parcialmente) durante más tiempo, funcionando de buffer para el front
                                    ante cambios que podrian producirse en la documentación de la API.
                                </li>
                            </ul>
                        </li>
                        <br />
                        <li>
                            <p>Front-End</p>
                            <ul>
                                <li>
                                    Para el desarrollo Front-End se utilizó ReactJs (hooks) y Redux para el manejo de estados globales. Las peticiones al servidor
                                    se realizaron con Axios. Y para caracteres especiales en componentes presentacionales se usó React-icons.
                                    <br />
                                    Para los estilos se utilizó vanilla CSS y una paleta de colores provista por <a href="https://coolors.co/">esta pagina.</a>.
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className={style.buttonsProyect}>
                       <a href="https://videogame-webapp.vercel.app/"><Button color='info'><BiWorld/></Button></a> 
                       <a href="https://github.com/aramayomartin/PI-Videogame"><Button color='info'><AiFillGithub/></Button></a> 
                    </div>
                </div>
                <hr />
                <div>
                    <h5 className='pt-3'>SuperHero WebApp</h5>
                    <h6>FrontEnd Developer</h6>
                    <h6><BsCalendarDateFill /> 12/2021 - 01/2022</h6>
                    <div className={style.carrouselProy}>
                        <UncontrolledCarousel
                            items={[
                                {
                                    key: 1,
                                    src: shlanding
                                },
                                {
                                    key: 2,
                                    src: shhome
                                },
                                {
                                    key: 3,
                                    src: shhometeam
                                },
                                {
                                    key: 4,
                                    src: shteam
                                },
                                {
                                    key: 5,
                                    src: shdetail
                                }
                            ]} />
                    </div>
                    <h6>Descripción</h6>
                    <p>
                        SPA desarrollada utilizando ReactJs, axios y vanilla CSS, los datos se consumen desde una API externa. 
                        La pagina ofrece la visualización de superheroes y villanos para conformar un equipo de 6 miembros, a 
                        su vez se muestran estadisticas del equipo para lo cual se utilizó la ilbreria de manejo de datos Lodash.
                        Para probar: (User:zaeta@gmail.com - Password: unoDos3cu@tro).
                    </p>
                    <div className={style.buttonsProyect}>
                       <a href="https://superhero-web-app.vercel.app/"><Button color='info'><BiWorld/></Button></a> 
                       <a href="https://github.com/aramayomartin/superhero-web-app"><Button color='info'><AiFillGithub/></Button></a> 
                    </div>
                </div>
                <hr />
                <div>
                    <h5 className='pt-3'>Weather WebApp</h5>
                    <h6>FrontEnd Developer</h6>
                    <h6><BsCalendarDateFill /> 09/2021</h6>
                    <div className={style.carrouselProy}>
                        <UncontrolledCarousel
                            items={[
                                {
                                    key: 1,
                                    src: wahome
                                },
                                {
                                    key: 2,
                                    src: wadetail
                                },
                                {
                                    key: 3,
                                    src: waaboutme
                                }
                            ]}
                        />
                    </div>
                    <h6>Descripción</h6>
                    <p>
                        SPA del clima desarrollada con React, consume datos de una API, permitiendo así la
                        búsqueda y visualización a detalle del clima en una ciudad determinada. Incorpora un
                        diseño responsive para dispositivos moviles.
                    </p>
                    <div className={style.buttonsProyect} id='withoutDeploy'>
                       <a href="https://github.com/aramayomartin/weather-webApp"><Button color='info'><AiFillGithub/></Button></a> 
                    </div>
                </div>
                <hr />
                <div>
                    <h5 className='pt-3'>Calculadora de edad</h5>
                    <h6>FrontEnd Developer</h6>
                    <h6><BsCalendarDateFill /> 08/2021</h6>
                    <div className={style.carrouselProy}>
                        <UncontrolledCarousel
                            items={[
                                {
                                    key: 1,
                                    src: clhome
                                },
                                {
                                    key: 2,
                                    src: cllifetime
                                },
                                {
                                    key: 3,
                                    src: clnextbirthday
                                },
                                {
                                    key: 4,
                                    src: claboutme
                                }
                            ]}
                        />
                    </div>
                    <h6>Descripción</h6>
                    <p>
                        Desarrollo de una SPA en React, el estilo de los componentes fue desarrollado con
                        vanilla CSS. Mediante el ingreso de la fecha de nacimiento brinda la posibilidad
                        de visualizar los años, días, horas o minutos de vida del usuario. Incorpora un diseño responsive para dispositivos moviles.
                    </p>
                    <div className={style.buttonsProyect}>
                       <a href="https://calculador-de-edad.vercel.app/"><Button color='info'><BiWorld/></Button></a> 
                       <a href="https://github.com/aramayomartin/calculador-de-edad"><Button color='info'><AiFillGithub/></Button></a> 
                    </div>
                </div>
            </div>
        </Container>
    )
}