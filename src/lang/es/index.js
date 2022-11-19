export default {
  navBar: {
    aboutMe: "Acerca de mi",
    stack: "Stack de tecnologías",
    projects: "Proyectos",
    contact: "Contacto",
  },
  aboutMe: {
    title: "Acerca de mi",
    presentation: ` Hola, mi nombre es Martín Aramayo y tengo 25 años, soy un Ingeniero
    Nuclear realizando sus primeros pasos en el mundo IT. A lo largo de mi
    formación como ingeniero he desarrollado un pensamiento lógico que me
    permite solucionar problemas encontrando soluciones rápidas y
    eficientes.
    <br />
    Mi historia con la programación comienza a temprana edad mientras
    estudiaba en la Escuela de Educación Técnica 3138 - "Alberto Einstein"
    en Salta donde programábamos microcontroladores usando lenguaje
    Assembler. Posteriormente, durante la carrera de grado he tenido la
    oportunidad de realizar diversos trabajos en lenguajes como C, C++,
    Python (Jupyter Notebooks) y también realizando cálculos numéricos con
    lenguajes orientados como MatLab, Mathematica, Wolfram Alpha y otros de
    software libre como Octave.
    <br />
    Me considero un apasionado de la tecnología y del aprendizaje continuo,
    por lo que reconociendo que nos encontramos en un contexto de constante
    crecimiento de la industria tech, en el año 2021 comienzo mi formación
    como desarrollador full stack iniciando el bootcamp de Soy Henry.
    <br />
    Si tengo que describirme con dos palabras estas serían perseverancia y
    tenacidad. Soy consciente que los objetivos se logran con trabajo duro y
    es por ello que mi sello personal es una gran entrega y pasión por las
    tareas que desempeño. Mis objetivos a mediano y largo plazo son crecer
    dentro de la industria y convertirme en un ciudadano del mundo
    explotando el concepto de nómada digital.
    <br />
    Gracias por leerme, bienvenido a mi portafolio.`,
  },
  techStack: {
    title: "Stack de tecnologías",
    languages: "Lenguajes de programación",
    webTechnologies: "Tecnologías Web",
    frAndLibraries: "Frameworks / Librerias",
    dataBase: "Bases de datos / ORM",
    devTools: "Herramientas de desarrollador",
  },
  projects: {
    title: "Proyectos",
    description: "Descripción",
    videogamesApp: {
      description: `
      <p> 
      Desarrollo de una Single Page Application (SPA), el trabajo
      realizado puede dividirse en tres partes globales.
      </p>
      <p>
      Entre las funcionalidades que ofrece la pagina se puede encontrar:
      </p>
      <ul style={{ "list-style": 'none' }}>
        <li>Posibilidad de agregar juegos de autoria propia.</li>
        <li>
          Busqueda de juegos por nombre, tanto en DB como en una API
          externa.
        </li>
        <li>
          Visualización del detalle por juego, plataformas disponibles,
          generos correspondientes y descripción.
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
                  Diseño e implementación de una base de datos relacional con
                  PostgreSQL, se utilizaron dos entidades (Genres y Videogames)
                  que se relacionan entre sí por una tabla intermedia.
                  <br />
                  Para la realización de consultas e inserciones en DB y la
                  interacción de esta con el Back-End implementado se hizo uso
                  de Sequelize, un ORM (Object Relational Mapping).
                </li>
              </ul>
            </li>
            <br />
            <li>
              <p>Back-End</p>
              <ul>
                <li>
                  Se utilizó ExpressJs para la puesta en marcha del servidor y
                  como se explicó en a sección anterior se usó Sequelize para
                  las querys a DB. Por otro lado las request a la
                  <a href="https://api.rawg.io/docs/">API REST externa</a> (RAWG
                  Video Games Database API) se realizaron utilizando la libreria
                  Axios. El manejo de promesas se realizó mediante la
                  utilización de async-await.
                  <br />
                  La inclusión de un desarrollo Back-End en este tipo de
                  proyecto obedece principalmente a dos motivos, el primero de
                  ellos es la manipulación y acondicionamiento de datos
                  provenientes tanto de DB como de la API externa y el segundo
                  motivo es para mantener la Videogames WebApp operativa (total
                  o parcialmente) durante más tiempo, funcionando de buffer para
                  el front ante cambios que podrian producirse en la
                  documentación de la API.
                </li>
              </ul>
            </li>
            <br />
            <li>
              <p>Front-End</p>
              <ul>
                <li>
                  Para el desarrollo Front-End se utilizó ReactJs (hooks) y
                  Redux para el manejo de estados globales. Las peticiones al
                  servidor se realizaron con Axios. Y para caracteres especiales
                  en componentes presentacionales se usó React-icons.
                  <br />
                  Para los estilos se utilizó vanilla CSS y una paleta de
                  colores provista por
                  <a href="https://coolors.co/">esta pagina.</a>.
                </li>
              </ul>
            </li>
          </ul>`,
    },
    disney: {
      description: `
      <p>
            API desarrollada siguiendo el patron REST utilizando Express,
            Sequelize y NodeJs, permite conocer y modificar los personajes que
            componen el maravilloso mundo de Disney y entender en qué películas
            estos participaron. Por otro lado, expone la información para que
            cualquier frontend pueda consumirla.
            <br />
            Para el modelado de la base de datos se utilizó un modelo relacional
            en PostgreSQL y para la interacción con el backEnd se utilizó
            Sequelize. El manejo de sesiones se realizó con Json Web Token con
            un tiempo de expiración del mismo de 10 min. A continuación se
            enumeran algunos de los endpoints desarrollados durante el trabajo.
          </p>

          <h5>Caracteristicas</h5>
          <ul>
            <li>Modelado de base de datos.</li>
            <li>Autenticación de Usuarios.</li>
            <li>CRUD, busqueda y detalle de personajes.</li>
            <li>CRUD, busqueda y detalle de peliculas.</li>
            <li>Envio de emails ante registro e inicios de sesion.</li>
          </ul>
          <h5>Endpoints</h5>
          <ul>
            <li>POST - "/auth/register" - Registro de cuenta.</li>
            <li>POST - "/auth/login" - Inicio de sesion.</li>
            <li>GET - "/characters" - Obtener lista de personajes.</li>
            <li>
              POST - "/characters/create" - Crear nuevo personaje y sus
              peliculas asociadas.
            </li>
            <li>
              PUT - "/characters/edit/:id" - Editar un personaje existente.
            </li>
            <li>
              DELETE - "/characters/delete/:id" - Eliminar un personaje
              existente.
            </li>
            <li>GET - "/character/:id" - Obtener detalle de un personaje.</li>
            <li>
              GET - "/characters?name=nombre" - Busqueda de personaje por
              nombre.
            </li>
            <li>
              GET - "/characters?age=edad" - Busqueda de personaje por edad.
            </li>
            <li>
              GET - "/characters?movies=idMovie" - Busqueda de personaje por
              pelicula.
            </li>
            <li>GET - "/movies" - Obtener listado de peliculas en DB.</li>
            <li>GET - "/movie/:id" - Detalle de pelicula por id.</li>
            <li>
              POST - "/movies/create" - Crear nueva pelicula y sus personajes
              asociados.
            </li>
            <li>PUT - "/movies/edit/:id" - Editar pelicula existente.</li>
            <li>DELETE - "/movies/delete/:id" - Eliminar pelilcula por id.</li>
            <li>
              GET - "/movies?name=nombre" - Busqueda de pelicula por nombre
            </li>
            <li>
              GET - "/movies?genre=idGenero" - Busqueda de pelicula por genero.
            </li>
            <li>
              GET - "/movies?order=ASC | DESC" - Ordenamiento de listado de
              peliculas.
            </li>
          </ul>
      `,
    },
    superheroApp: {
      description: `
      <p>
            SPA desarrollada utilizando ReactJs, axios y vanilla CSS, los datos
            se consumen desde una API externa. La pagina ofrece la visualización
            de superheroes y villanos para conformar un equipo de 6 miembros, a
            su vez se muestran estadisticas del equipo para lo cual se utilizó
            la ilbreria de manejo de datos Lodash. Para probar:
            (User:zaeta@gmail.com - Password: unoDos3cu@tro).
      </p>
      `,
    },
    weatherApp: {
      description: `
      <p>
      SPA del clima desarrollada con React, consume datos de una API,
      permitiendo así la búsqueda y visualización a detalle del clima en
      una ciudad determinada. Incorpora un diseño responsive para
      dispositivos moviles.
      </p>
      `,
    },
    ageCalculator: {
      description: `
      <p>
      Desarrollo de una SPA en React, el estilo de los componentes fue
      desarrollado con vanilla CSS. Mediante el ingreso de la fecha de
      nacimiento brinda la posibilidad de visualizar los años, días, horas
      o minutos de vida del usuario. Incorpora un diseño responsive para
      dispositivos moviles.
      </p>
      `,
    },
    packing: {
      description: `
      <p>
      Durante mi tiempo trabajando para Muni Tienda participé de diversos
      proyectos tanto de back como de frontend. 
    </p>
    <p>
      Entre ellos destaco a la migración del proceso de packing de productos en bodega,
      ya que fue de los que tuvieron mayor envergadura y en el que pude involucrarme más.
    </p>
    <p>Las caracteristicas de este proyecto son:</p>
    <ul>
      <li>Desarrollado completamente en React.</li>
      <li>Traducido en su totalidad al portugués usando la libreria i18next.</li>
      <li>Diseño 100% responsive para dispositivos Zebra.</li>
      <li>Integración con pistola para escaneo de productos.</li>
      <li>Para la obtención de datos se consume una API de uso interno.</li>
      <li>Los componentes de frontend utilizados provienen de una libreria de uso interno la cual gestionabamos usando StoryBook.</li>
    </ul>
  </div>
  <hr />
      `,
    },
  },
  contact:{
    title:'Contacto',
    requiredField: 'Campo requerido',
    invalidEmail: 'Email invalido',
    placeholders:{
      name: 'Nombre',
      email: 'Email',
    },
    message:'Mensaje',
    loading: 'Cargando',
    submit: 'Enviar'
  }
};
