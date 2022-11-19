export default {
  navBar: {
    aboutMe: "About me",
    stack: "Tech Stack",
    projects: "Projects",
    contact: "Contact me",
  },
  aboutMe: {
    title: "About me",
    presentation: `Hello, my name is Martín Aramayo and I am 25 years old, I am an Engineer
    Nuclear making its first steps in the IT world. throughout my
    training as an engineer I have developed a logical thinking that
    allows you to solve problems by finding quick solutions and
    efficient.
    <br />
    My history with programming begins at an early age while
    studied at the School of Technical Education 3138 - "Alberto Einstein"
    in Salta where we programmed microcontrollers using language
    Assembler. Subsequently, during my undergraduate degree I have had the
    opportunity to do various jobs in languages ​​such as C, C++,
    Python (Jupyter Notebooks) and also performing numerical calculations with
    oriented languages ​​like MatLab, Mathematica, Wolfram Alpha and others from
    free software like Octave.
    <br />
    I consider myself passionate about technology and continuous learning,
    therefore, recognizing that we find ourselves in a context of constant
    growth of the tech industry, in the year 2021 I start my training
    as a full stack developer starting the Soy Henry bootcamp.
    <br />
    If I have to describe myself with two words, these would be perseverance and
    tenacity. I am aware that goals are achieved with hard work and
    That is why my personal seal is a great dedication and passion for the
    tasks I perform. My medium and long-term goals are to grow
    within the industry and become a citizen of the world
    exploiting the concept of digital nomad.
    <br />
    Thanks for reading, welcome to my portfolio.`,
  },
  techStack: {
    title: "Tech Stack",
    languages: "Programming languages",
    webTechnologies: "Web technologies",
    frAndLibraries: "Frameworks / Libraries",
    dataBase: "Databases / ORM",
    devTools: "Developer Tools",
  },
  projects: {
    title: "Proyectos",
    description: "Descripción",
    videogamesApp: {
      description: `
      <p>
      Development of a Single Page Application (SPA), the work
      carried out can be divided into three global parts.
      </p>
      <p>
      Among the features offered by the page you can find:
      </p>
      <ul style={{ "list-style": 'none' }}>
        <li>Possibility of adding own authored games.</li>
        <li>
          Search for games by name, both in DB and in an API
          external
        </li>
        <li>
          Detail display by game, available platforms,
          corresponding genera and description.
        </li>
        <li>Sorting function by game classification or alphabetical.</li>
        <li>
          Filter function by genre or origin of the game (DB or external).
        </li>
        <li>
          Random video game viewer, provides the user with the
          ability to discover new titles.
        </li>
      </ul>
      <ul>
      <li>
      <p>Database</p>
      <ul>
        <li>
          Design and implementation of a relational database with
          PostgreSQL, two entities were used (Genres and Videogames)
          They are related to each other by an intermediate table.
          <br />
          For the execution of queries and insertions in DB and the
          interaction of this with the implemented Back-End was used
          from Sequelize, an ORM (Object Relational Mapping).
        </li>
      </ul>
    </li>
    <br />
    <li>
      <p>Back-End</p>
      <ul>
        <li>
          ExpressJs was used for the start-up of the server and
          As explained in the previous section, Sequelize was used to
          the queries to DB. On the other hand, the requests to the
          <a href="https://api.rawg.io/docs/">External REST API</a> (RAWG
          Video Games Database API) were made using the library
          Axios. The handling of promises was carried out by means of the
          use of async-await.
          <br />
          The inclusion of a Back-End development in this type of
          project is mainly due to two reasons, the first of
          they is the manipulation and conditioning of data
          coming from both DB and external API and the second
          The reason is to keep the Videogames WebApp operational (total
          or partially) for a longer time, working as a buffer for
          the front facing changes that could occur in the
          API documentation.
        </li>
      </ul>
    </li>
    <br />
    <li>
      <p>Front End</p>
      <ul>
        <li>
          For Front-End development ReactJs (hooks) was used and
          Redux for handling global states. The requests to
          server were made with Axios. And for special characters
          in presentational components React-icons was used.
          <br />
          For the styles, vanilla CSS and a color palette were used.
          colors provided by
          <a href="https://coolors.co/">this page.</a>.
        </li>
      </ul>
    </li>
  </ul>`,
    },
    disney: {
      description: `
      <p>
            API developed following the REST pattern using Express,
            Sequelize and NodeJs, allows to know and modify the characters that
            make up the wonderful world of Disney and understand in which movies
            these participated. On the other hand, it exposes the information so that
            any frontend can consume it.
            <br />
            For the modeling of the database, a relational model was used.
            in PostgreSQL and for the interaction with the backend we used
            Sequelize. Session handling was done with Json Web Token with
            an expiration time thereof of 10 min. Next is
            list some of the endpoints developed during the work.
          </p>

          <h5>Features</h5>
          <ul>
            <li>Database modeling.</li>
            <li>User Authentication.</li>
            <li>CRUD, search and detail of characters.</li>
            <li>CRUD, search and detail of movies.</li>
            <li>Sending emails before registration and login.</li>
          </ul>
          <h5>Endpoints</h5>
          <ul>
            <li>POST - "/auth/register" - Account registration.</li>
            <li>POST - "/auth/login" - Login.</li>
            <li>GET - "/characters" - Get list of characters.</li>
            <li>
              POST - "/characters/create" - Create new character and its
              associated movies.
            </li>
            <li>
              PUT - "/characters/edit/:id" - Edit an existing character.
            </li>
            <li>
              DELETE - "/characters/delete/:id" - Delete a character
              existing.
            </li>
            <li>GET - "/character/:id" - Get detail of a character.</li>
            <li>
              GET - "/characters?name=name" - Character search by
              Name.
            </li>
            <li>
              GET - "/characters?age=edad" - Search for character by age.
            </li>
            <li>
              GET - "/characters?movies=idMovie" - Character search by
              film.
            </li>
            <li>GET - "/movies" - Get list of movies in DB.</li>
            <li>GET - "/movie/:id" - Movie detail by id.</li>
            <li>
              POST - "/movies/create" - Create new movie and its characters
              associates.
            </li>
            <li>PUT - "/movies/edit/:id" - Edit existing movie.</li>
            <li>DELETE - "/movies/delete/:id" - Delete movie by id.</li>
            <li>
              GET - "/movies?name=name" - Movie search by name
            </li>
            <li>
              GET - "/movies?genre=idGenero" - Movie search by genre.
            </li>
            <li>
              GET - "/movies?order=ASC | DESC" - Listing ordering
              films.
            </li>
          </ul>
      `,
    },
    superheroApp: {
      description: `
        <p>
        SPA developed using ReactJs, axios and vanilla CSS, the data
        they are consumed from an external API. The page offers the visualization
        of superheroes and villains to form a team of 6 members,
        In turn, statistics of the equipment for which it was used are shown.
        the Lodash data management library. To try:
        (User: zaeta@gmail.com - Password: unoDos3cu@tro).
        </p>
      `,
    },
    weatherApp: {
      description: `
      <p>
      Weather SPA developed with React, consumes data from an API,
      thus allowing the search and visualization in detail of the weather in
      a certain city. It incorporates a responsive design to
      mobile devices.
      </p>
      `,
    },
    ageCalculator: {
      description: `
      <p>
      Development of a SPA in React, the style of the components was
      Developed with vanilla CSS. By entering the date of
      birth offers the possibility of visualizing the years, days, hours
      or minutes of user life. It incorporates a responsive design to
      mobile devices.
      </p>
      `,
    },
    packing: {
      description: `
      <p>
      During my time working for Muni Tienda I participated in various
      both back and frontend projects.
    </p>
    <p>
      Among them I highlight the migration of the packing process of products in the warehouse,
      since it was one of those that had the greatest scope and in which I was able to get more involved.
    </p>
    <p>The characteristics of this project are:</p>
    <ul>
      <li>Developed entirely in React.</li>
      <li>Fully translated into Portuguese using the i18next library.</li>
      <li>100% responsive design for Zebra devices.</li>
      <li>Integration with gun for product scanning.</li>
      <li>An API for internal use is consumed to obtain data.</li>
      <li>The frontend components used come from a library for internal use which we managed using StoryBook.</li>
    </ul>
  </div>
  <hr />
      `,
    },
  },
  contact:{
    title:'Contact me',
    requiredField: 'Required field',
    invalidEmail: 'Invalid email',
    placeholders:{
      name: 'Name',
      email: 'Email',
    },
    message:'Message',
    loading: 'Loading',
    submit: 'Submit'
  }
};
