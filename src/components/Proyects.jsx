import React from "react";
import { Button, Container, UncontrolledCarousel } from "reactstrap";
import { BsCalendarDateFill } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
// Images
// videogamesApp
import vglanding from "../images/proyectsImages/videogameApp/vglanding.png";
import vghome from "../images/proyectsImages/videogameApp/vghome.png";
import vgform from "../images/proyectsImages/videogameApp/vgform.png";
import vgdetail from "../images/proyectsImages/videogameApp/vgdetail.png";
import vgrandom from "../images/proyectsImages/videogameApp/vgrandom.png";
// superhero app
import shlanding from "../images/proyectsImages/superheroApp/shlanding.png";
import shhome from "../images/proyectsImages/superheroApp/shhome.png";
import shhometeam from "../images/proyectsImages/superheroApp/shhometeam.png";
import shteam from "../images/proyectsImages/superheroApp/shteam.png";
import shdetail from "../images/proyectsImages/superheroApp/shdetail.png";
// weatherApp
import wahome from "../images/proyectsImages/weatherApp/wahome.png";
import wadetail from "../images/proyectsImages/weatherApp/wadetail.png";
import waaboutme from "../images/proyectsImages/weatherApp/waaboutme.png";
// calculadora
import clhome from "../images/proyectsImages/calculadora/clhome.png";
import cllifetime from "../images/proyectsImages/calculadora/cllifetime.png";
import clnextbirthday from "../images/proyectsImages/calculadora/clnextbirthday.png";
import claboutme from "../images/proyectsImages/calculadora/claboutme.png";
// disney
import db from '../images/proyectsImages/disney/db.JPG';

import style from "../style.module.css";

export default function Proyects() {
  return (
    <Container id="skr" className="p-5">
      <h1>Proyectos</h1>
      <div className={style.proyElements}>
        <div>
          <h5 className="pt-3">Videogame WebApp</h5>
          <h6>Full Stack Developer</h6>
          <h6>
            <BsCalendarDateFill /> 10/2021 - 12/2021
          </h6>
          <div className={style.carrouselProy}>
            <UncontrolledCarousel
              captionText={undefined}
              items={[
                {
                  key: 1,
                  src: vglanding,
                },
                {
                  key: 2,
                  src: vghome,
                },
                {
                  key: 3,
                  src: vgform,
                },
                {
                  key: 4,
                  src: vgdetail,
                },
                {
                  key: 5,
                  src: vgrandom,
                },
              ]}
            />
          </div>
          <h6>Descripci??n</h6>
          <p>
            Desarrollo de una Single Page Application (SPA), el trabajo
            realizado puede dividirse en tres partes globales.
          </p>
          <p>
            Entre las funcionalidades que ofrece la pagina se puede encontrar:
          </p>
          <ul style={{ "list-style": `none` }}>
            <li>Posibilidad de agregar juegos de autoria propia.</li>
            <li>
              Busqueda de juegos por nombre, tanto en DB como en una API
              externa.
            </li>
            <li>
              Visualizaci??n del detalle por juego, plataformas disponibles,
              generos correspondientes y descripci??n.
            </li>
            <li>Funcion de ordenamiento por rating del juego o alfabetico.</li>
            <li>
              Funcion de filtrado por genero u origen del juego (DB o externo).
            </li>
            <li>
              Visualizador random de videojuegos, dota al usuario de la
              capacidad de descubrir nuevos titulos.
            </li>
          </ul>
          <ul>
            <li>
              <p>Base de datos</p>
              <ul>
                <li>
                  Dise??o e implementaci??n de una base de datos relacional con
                  PostgreSQL, se utilizaron dos entidades (Genres y Videogames)
                  que se relacionan entre s?? por una tabla intermedia.
                  <br />
                  Para la realizaci??n de consultas e inserciones en DB y la
                  interacci??n de esta con el Back-End implementado se hizo uso
                  de Sequelize, un ORM (Object Relational Mapping).
                </li>
              </ul>
            </li>
            <br />
            <li>
              <p>Back-End</p>
              <ul>
                <li>
                  Se utiliz?? ExpressJs para la puesta en marcha del servidor y
                  como se explic?? en a secci??n anterior se us?? Sequelize para
                  las querys a DB. Por otro lado las request a la{" "}
                  <a href="https://api.rawg.io/docs/">API REST externa</a> (RAWG
                  Video Games Database API) se realizaron utilizando la libreria
                  Axios. El manejo de promesas se realiz?? mediante la
                  utilizaci??n de async-await.
                  <br />
                  La inclusi??n de un desarrollo Back-End en este tipo de
                  proyecto obedece principalmente a dos motivos, el primero de
                  ellos es la manipulaci??n y acondicionamiento de datos
                  provenientes tanto de DB como de la API externa y el segundo
                  motivo es para mantener la Videogames WebApp operativa (total
                  o parcialmente) durante m??s tiempo, funcionando de buffer para
                  el front ante cambios que podrian producirse en la
                  documentaci??n de la API.
                </li>
              </ul>
            </li>
            <br />
            <li>
              <p>Front-End</p>
              <ul>
                <li>
                  Para el desarrollo Front-End se utiliz?? ReactJs (hooks) y
                  Redux para el manejo de estados globales. Las peticiones al
                  servidor se realizaron con Axios. Y para caracteres especiales
                  en componentes presentacionales se us?? React-icons.
                  <br />
                  Para los estilos se utiliz?? vanilla CSS y una paleta de
                  colores provista por{" "}
                  <a href="https://coolors.co/">esta pagina.</a>.
                </li>
              </ul>
            </li>
          </ul>
          <div className={style.buttonsProyect}>
            <a href="https://videogame-webapp.vercel.app/">
              <Button color="info">
                <BiWorld />
              </Button>
            </a>
            <a href="https://github.com/aramayomartin/PI-Videogame">
              <Button color="info">
                <AiFillGithub />
              </Button>
            </a>
          </div>
        </div>
        <hr />
        <div>
          <h5 className="pt-3">Disney - Alkemy Challenge</h5>
          <h6>BackEnd Developer</h6>
          <h6>
            <BsCalendarDateFill /> 03/2022
          </h6>
          <h6>Descripci??n</h6>
          <p>
            API desarrollada siguiendo el patron REST utilizando Express, Sequelize y NodeJs, 
            permite conocer y modificar los personajes que componen el maravilloso mundo de Disney 
            y entender en qu?? pel??culas estos participaron. Por otro lado, expone la informaci??n 
            para que cualquier frontend pueda consumirla.
            <br/>
            Para el modelado de la base de datos se utiliz?? un modelo relacional en PostgreSQL y para la interacci??n con
            el backEnd se utiliz?? Sequelize. El manejo de sesiones se realiz?? con Json Web Token con un tiempo de
            expiraci??n del mismo de 10 min. A continuaci??n se enumeran algunos de los endpoints desarrollados durante el trabajo.
          </p>
          <img className={style.imageProy} src={db} alt="ERF database." />
          <h5>Caracteristicas</h5>
          <ul>
            <li>Modelado de base de datos.</li>
            <li>Autenticaci??n de Usuarios.</li>
            <li>CRUD, busqueda y detalle de personajes.</li>
            <li>CRUD, busqueda y detalle de peliculas.</li>
            <li>Envio de emails ante registro e inicios de sesion.</li>
          </ul>
          <h5>Endpoints</h5>
          <ul>
              <li>POST - "/auth/register" - Registro de cuenta.</li>
              <li>POST - "/auth/login" - Inicio de sesion.</li>
              <li>GET - "/characters" - Obtener lista de personajes.</li>
              <li>POST - "/characters/create" - Crear nuevo personaje y sus peliculas asociadas.</li>
              <li>PUT - "/characters/edit/:id" - Editar un personaje existente.</li>
              <li>DELETE - "/characters/delete/:id" - Eliminar un personaje existente.</li>
              <li>GET - "/character/:id" - Obtener detalle de un personaje.</li>
              <li>GET - "/characters?name=nombre" - Busqueda de personaje por nombre.</li>
              <li>GET - "/characters?age=edad" - Busqueda de personaje por edad.</li>
              <li>GET - "/characters?movies=idMovie" - Busqueda de personaje por pelicula.</li>
              <li>GET - "/movies" - Obtener listado de peliculas en DB.</li>
              <li>GET - "/movie/:id" - Detalle de pelicula por id.</li>
              <li>POST - "/movies/create" - Crear nueva pelicula y sus personajes asociados.</li>
              <li>PUT - "/movies/edit/:id" - Editar pelicula existente.</li>
              <li>DELETE - "/movies/delete/:id" - Eliminar pelilcula por id.</li>
              <li>GET - "/movies?name=nombre" - Busqueda de pelicula por nombre</li>
              <li>GET - "/movies?genre=idGenero" - Busqueda de pelicula por genero.</li>
              <li>GET - "/movies?order=ASC | DESC" - Ordenamiento de listado de peliculas.</li>
          </ul>
          <div className={style.buttonsProyect}>
            <a href="https://github.com/aramayomartin/Dysney-backend-alkemy-challenge">
              <Button color="info">
                <AiFillGithub />
              </Button>
            </a>
          </div>
        </div>
        <hr />
        <div>
          <h5 className="pt-3">SuperHero WebApp</h5>
          <h6>FrontEnd Developer</h6>
          <h6>
            <BsCalendarDateFill /> 12/2021 - 01/2022
          </h6>
          <div className={style.carrouselProy}>
            <UncontrolledCarousel
              items={[
                {
                  key: 1,
                  src: shlanding,
                },
                {
                  key: 2,
                  src: shhome,
                },
                {
                  key: 3,
                  src: shhometeam,
                },
                {
                  key: 4,
                  src: shteam,
                },
                {
                  key: 5,
                  src: shdetail,
                },
              ]}
            />
          </div>
          <h6>Descripci??n</h6>
          <p>
            SPA desarrollada utilizando ReactJs, axios y vanilla CSS, los datos
            se consumen desde una API externa. La pagina ofrece la visualizaci??n
            de superheroes y villanos para conformar un equipo de 6 miembros, a
            su vez se muestran estadisticas del equipo para lo cual se utiliz??
            la ilbreria de manejo de datos Lodash. Para probar:
            (User:zaeta@gmail.com - Password: unoDos3cu@tro).
          </p>
          <div className={style.buttonsProyect}>
            <a href="https://superhero-web-app.vercel.app/">
              <Button color="info">
                <BiWorld />
              </Button>
            </a>
            <a href="https://github.com/aramayomartin/superhero-web-app">
              <Button color="info">
                <AiFillGithub />
              </Button>
            </a>
          </div>
        </div>
        <hr />
        <div>
          <h5 className="pt-3">Weather WebApp</h5>
          <h6>FrontEnd Developer</h6>
          <h6>
            <BsCalendarDateFill /> 09/2021
          </h6>
          <div className={style.carrouselProy}>
            <UncontrolledCarousel
              items={[
                {
                  key: 1,
                  src: wahome,
                },
                {
                  key: 2,
                  src: wadetail,
                },
                {
                  key: 3,
                  src: waaboutme,
                },
              ]}
            />
          </div>
          <h6>Descripci??n</h6>
          <p>
            SPA del clima desarrollada con React, consume datos de una API,
            permitiendo as?? la b??squeda y visualizaci??n a detalle del clima en
            una ciudad determinada. Incorpora un dise??o responsive para
            dispositivos moviles.
          </p>
          <div className={style.buttonsProyect} id="withoutDeploy">
            <a href="https://github.com/aramayomartin/weather-webApp">
              <Button color="info">
                <AiFillGithub />
              </Button>
            </a>
          </div>
        </div>
        <hr />
        <div>
          <h5 className="pt-3">Calculadora de edad</h5>
          <h6>FrontEnd Developer</h6>
          <h6>
            <BsCalendarDateFill /> 08/2021
          </h6>
          <div className={style.carrouselProy}>
            <UncontrolledCarousel
              items={[
                {
                  key: 1,
                  src: clhome,
                },
                {
                  key: 2,
                  src: cllifetime,
                },
                {
                  key: 3,
                  src: clnextbirthday,
                },
                {
                  key: 4,
                  src: claboutme,
                },
              ]}
            />
          </div>
          <h6>Descripci??n</h6>
          <p>
            Desarrollo de una SPA en React, el estilo de los componentes fue
            desarrollado con vanilla CSS. Mediante el ingreso de la fecha de
            nacimiento brinda la posibilidad de visualizar los a??os, d??as, horas
            o minutos de vida del usuario. Incorpora un dise??o responsive para
            dispositivos moviles.
          </p>
          <div className={style.buttonsProyect}>
            <a href="https://calculador-de-edad.vercel.app/">
              <Button color="info">
                <BiWorld />
              </Button>
            </a>
            <a href="https://github.com/aramayomartin/calculador-de-edad">
              <Button color="info">
                <AiFillGithub />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
