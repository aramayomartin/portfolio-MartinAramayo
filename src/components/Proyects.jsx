import React from "react";
import { Button, Container, UncontrolledCarousel } from "reactstrap";
import { BsCalendarDateFill } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { useTranslation } from "react-i18next";
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
import db from "../images/proyectsImages/disney/db.JPG";
// packing
import packing1 from "../images/proyectsImages/packing/packing1.png";
import packing2 from "../images/proyectsImages/packing/packing2.png";
import packing3 from "../images/proyectsImages/packing/packing3.png";

import style from "../style.module.css";

export default function Proyects() {
  const { t } = useTranslation();
  return (
    <Container id="skr" className="p-5">
      <h1>{t("projects.title")}</h1>
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

          <h6>{t("projects.description")}</h6>
          <div
            dangerouslySetInnerHTML={{
              __html: t("projects.videogamesApp.description"),
            }}
          />
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
          <h5 className="pt-3">Packing Application</h5>
          <h6>Frontend Developer</h6>
          <h6>
            <BsCalendarDateFill /> 10/2022 - 11/2022
          </h6>
          <div className={style.carrouselProy}>
            <UncontrolledCarousel
              captionText={undefined}
              items={[
                {
                  key: 1,
                  src: packing1,
                },
                {
                  key: 2,
                  src: packing2,
                },
                {
                  key: 3,
                  src: packing3,
                },
              ]}
            />
          </div>
          <h6>{t("projects.description")}</h6>
          <div
            dangerouslySetInnerHTML={{
              __html: t("projects.packing.description"),
            }}
          />
        </div>
        <div>
          <h5 className="pt-3">Disney - Alkemy Challenge</h5>
          <h6>BackEnd Developer</h6>
          <h6>
            <BsCalendarDateFill /> 03/2022
          </h6>
          <h6>{t("projects.description")}</h6>
          <img className={style.imageProy} src={db} alt="ERF database." />
          <div
            dangerouslySetInnerHTML={{
              __html: t("projects.disney.description"),
            }}
          />
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
          <h6>{t("projects.description")}</h6>
          <div
            dangerouslySetInnerHTML={{
              __html: t("projects.superheroApp.description"),
            }}
          />
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
          <h6>{t("projects.description")}</h6>
          <div
            dangerouslySetInnerHTML={{
              __html: t("projects.weatherApp.description"),
            }}
          />
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
          <h6>{t("projects.description")}</h6>
          <div
            dangerouslySetInnerHTML={{
              __html: t("projects.ageCalculator.description"),
            }}
          />
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
