import React from 'react';
import { Container } from 'reactstrap';
import {
    IoLogoPython, IoLogoCss3, IoLogoSass,
    IoLogoNodejs
} from 'react-icons/io';
import {
    SiJavascript, SiTypescript, SiLodash,
    SiRedux, SiExpress, SiPostgresql,
    SiSequelize, SiPostman
} from 'react-icons/si';
import { AiFillHtml5 } from 'react-icons/ai';
import { BsBootstrapFill } from 'react-icons/bs';
import { FaReact, FaChrome,FaElementor } from 'react-icons/fa';
import { MdFormatAlignLeft } from 'react-icons/md';


export default function TechStack() {
    return (
        <Container id='tech-stack-section' className="p-5">
            <h1>Tech Stack</h1>
            <ul>
                <hr />
                <li>
                    <h5>Lenguajes de programación</h5>
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
                    </ul>
                </li>
                <hr />
                <li>
                    <h5>Tecnologias Web</h5>
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
                    </ul>
                </li>
                <hr />
                <li>
                    <h5>Frameworks/librerias</h5>
                    <ul>
                        <li>
                            <FaReact /> - ReactJs (Hooks)
                        </li>
                        <li>
                            <SiRedux /> - Redux
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
                            <FaElementor /> - Librerias basicas de Python
                        </li>
                    </ul>
                </li>
                <hr />
                <li>
                    <h5>Bases de datos / ORM</h5>
                    <ul>
                        <li>
                            <SiPostgresql /> - PostgreSQL
                        </li>
                        <li>
                            <SiSequelize /> - Sequelize
                        </li>
                    </ul>
                </li>
                <hr />
                <li>
                    <h5>Dev Tools</h5>
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
                    </ul>
                </li>
            </ul>
        </Container>
    )
}