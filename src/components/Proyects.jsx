import React from 'react';
import {
    Container,
    UncontrolledCarousel
} from 'reactstrap';
import { BsCalendarDateFill } from 'react-icons/bs';
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
                                    caption: 'Landing',
                                    key: 1,
                                    src: vglanding
                                },
                                {
                                    caption: 'Home',
                                    key: 2,
                                    src: vghome
                                },
                                {
                                    caption: 'Form',
                                    key: 3,
                                    src: vgform
                                },
                                {
                                    caption: 'Detail',
                                    key: 4,
                                    src: vgdetail
                                },
                                {
                                    caption: 'Random',
                                    key: 5,
                                    src: vgrandom
                                }
                            ]}
                        />
                    </div>
                    <h6>Descripcion</h6>
                    <p>Desarrollo de una SPA usando React para el Front End, Redux para el manejo de estados globales, componentes desarrollados con vanilla CSS, la SPA consume datos de una
                        API mediante un Back End desarrollado usando Express. Además se agregó la posibilidad de agregar juegos de autoría propia mediante una base de datos local la cual interactúa con el Back End mediante Sequelize. Además admite funciones de búsqueda y
                        ordenamiento de resultados.
                    </p>
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
                                    caption: 'Landing',
                                    key: 1,
                                    src: shlanding
                                },
                                {
                                    caption: 'Home',
                                    key: 2,
                                    src: shhome
                                },
                                {
                                    caption: 'Home Team',
                                    key: 3,
                                    src: shhometeam
                                },
                                {
                                    caption: 'Team',
                                    key: 4,
                                    src: shteam
                                },
                                {
                                    caption: 'Detail',
                                    key: 5,
                                    src: shdetail
                                }
                            ]} />
                    </div>
                    <h6>Descripcion</h6>
                    <p>
                        SPA desarrollada utilizando ReactJs, axios y vanilla CSS, los datos se consumen desde
                        una API externa. La pagina ofrece la visualización de superheroes y villanos para conformar un equipo de 6 miembros, a su vez se muestran estadisticas del equipo para lo
                        cual se utilizó la ilbreria de manejo de datos Lodash.
                        Para probar: (User:zaeta@gmail.com - Password: unoDos3cu@tro).
                    </p>
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
                                    caption: 'Home',
                                    key: 1,
                                    src: wahome
                                },
                                {
                                    caption: 'Detail',
                                    key: 2,
                                    src: wadetail
                                },
                                {
                                    caption: 'About me',
                                    key: 3,
                                    src: waaboutme
                                }
                            ]}
                        />
                    </div>
                    <h6>Descripcion</h6>
                    <p>
                        SPA del clima desarrollada con React, consume datos de una API, permitiendo así la
                        búsqueda y visualización a detalle del clima en una ciudad determinada. Incorpora un
                        diseño responsive para dispositivos moviles.
                    </p>
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
                                    caption: 'Home',
                                    key: 1,
                                    src: clhome
                                },
                                {
                                    caption: 'Life time',
                                    key: 2,
                                    src: cllifetime
                                },
                                {
                                    caption: 'Next birthday',
                                    key: 3,
                                    src: clnextbirthday
                                },
                                {
                                    caption: 'About me',
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
                </div>
            </div>
        </Container>
    )
}