import React from "react";
import { Container } from "reactstrap";
import {
  IoLogoPython,
  IoLogoCss3,
  IoLogoSass,
  IoLogoNodejs,
} from "react-icons/io";
import {
  SiJavascript,
  SiTypescript,
  SiLodash,
  SiRedux,
  SiExpress,
  SiPostgresql,
  SiSequelize,
  SiPostman,
  SiJsonwebtokens,
  SiPhp,
  SiStorybook,
} from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import {DiDatabase} from "react-icons/di";
import { BsBootstrapFill } from "react-icons/bs";
import { FaReact, FaChrome, FaElementor, FaLanguage, FaLaravel } from "react-icons/fa";
import { MdFormatAlignLeft,MdOutlineLibraryAddCheck } from "react-icons/md";
import { useTranslation } from "react-i18next";

export default function TechStack() {
  const { t } = useTranslation();
  return (
    <Container id="tech-stack-section" className="p-5">
      <h1>{t("techStack.title")}</h1>
      <ul>
        <hr />
        <li>
          <h5>{t("techStack.languages")}</h5>
          <ul>
            <li>
              <SiJavascript /> - Javascript
            </li>
            <li>
              <IoLogoPython /> - Python
            </li>
            <li>
              <SiTypescript /> - Typescript
            </li>
            <li>
              <SiPhp /> - PHP
            </li>
          </ul>
        </li>
        <hr />
        <li>
          <h5>{t("techStack.webTechnologies")}</h5>
          <ul>
            <li>
              <AiFillHtml5 /> - HTML5
            </li>
            <li>
              <IoLogoCss3 /> - CSS3
            </li>
            <li>
              <IoLogoSass /> - SASS
            </li>
            <li>
              <BsBootstrapFill /> - Bootstrap
            </li>
            <li>
              <IoLogoNodejs /> - NodeJs
            </li>
            <li>
              <SiJsonwebtokens /> - Json Web Token
            </li>
            <li>
              <SiStorybook /> - StoryBook
            </li>
            <li>
              <FaLanguage/> - I18n
            </li>
            <li>
              <SiRedux /> - Redux
            </li>
            <li>
              <MdOutlineLibraryAddCheck/> - ReactContext
            </li>
            <li>
              <MdOutlineLibraryAddCheck/> - ReactQuery
            </li>
          </ul>
        </li>
        <hr />
        <li>
          <h5>{t("techStack.frAndLibraries")}</h5>
          <ul>
            <li>
              <FaReact /> - ReactJs (Hooks)
            </li>
            <li>
              <FaLaravel/> - Laravel
            </li>
            <li>
              <SiExpress /> - ExpressJs
            </li>
            <li>
              <MdFormatAlignLeft /> - Formik
            </li>
            <li>
              <SiLodash /> - Lodash
            </li>
            <li>
              <MdOutlineLibraryAddCheck/> - Axios
            </li>
            <li>
              <FaElementor /> - Basic Python's libraries
            </li>
          </ul>
        </li>
        <hr />
        <li>
          <h5>{t("techStack.dataBase")}</h5>
          <ul>
            <li>
              <SiPostgresql /> - PostgreSQL
            </li>
            <li>
              <SiSequelize /> - Sequelize
            </li>
            <li>
              <DiDatabase/> - Eloquent
            </li>
          </ul>
        </li>
        <hr />
        <li>
          <h5>{t("techStack.devTools")}</h5>
          <ul>
            <li>
              <FaChrome /> - Chrome dev tools
            </li>
            <li>
              <FaReact /> - React dev tools
            </li>
            <li>
              <SiRedux /> - Redux dev tools
            </li>
            <li>
              <SiPostman /> - Postman
            </li>
            <li>
              <MdOutlineLibraryAddCheck/> - React Context dev tools
            </li>
          </ul>
        </li>
      </ul>
    </Container>
  );
}
