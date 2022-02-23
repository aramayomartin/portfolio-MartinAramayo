import React from 'react';
import { Container } from 'reactstrap';
import style from '../style.module.css';
import profile from '../images/profile.jpeg';
import 'animate.css';

export default function AboutMe() {
    return (
        <Container id='about-me-section' className={`px-5 pt-5 ${style.aboutMe}`}>
            <h1>Acerca de mi</h1>
            <div className={style.aboutMeElements}>
                <img src={profile} alt="profile" className={style.profileImage} />
                <h3 className='animate__fadeInLeft'>
                    Martín Aramayo
                    <br />
                    Ing. Nuclear || Full Stack Dev.
                </h3>
            </div>
            <p>
                Hola, mi nombre es Martín Aramayo y tengo 25 años, soy un Ingeniero Nuclear
                realizando sus primeros pasos en el mundo IT. A lo largo de mi formación como ingeniero he desarrollado un pensamiento lógico que me
                permite solucionar problemas encontrando soluciones rápidas y eficientes.
                <br />
                Mi historia
                con la programación comienza a temprana edad mientras estudiaba en la Escuela de Educación
                Técnica 3138 - "Alberto Einstein" en Salta donde programábamos microcontroladores usando
                lenguaje Assembler. Posteriormente, durante la carrera de grado he tenido la oportunidad de
                realizar diversos trabajos en lenguajes como C, C++, Python (Jupyter Notebooks) y también
                realizando cálculos numéricos con lenguajes orientados como MatLab,
                Mathematica, Wolfram Alpha y otros de software libre como Octave.
                <br />
                Me considero un apasionado de la tecnología y del aprendizaje continuo, por lo que
                reconociendo que nos encontramos en un contexto de constante crecimiento de la industria tech,
                en el año 2021 comienzo mi formación como desarrollador full stack iniciando el bootcamp de Soy Henry.
                <br />
                Si tengo que describirme con dos palabras estas serían perseverancia y tenacidad. Soy consciente que los
                objetivos se logran con trabajo duro y es por ello que mi sello personal es una gran entrega y pasión por las
                tareas que desempeño. Mis objetivos a mediano y largo plazo son crecer dentro de la industria y convertirme en un
                ciudadano del mundo explotando el concepto de nómada digital.
                <br />
                Gracias por leerme, bienvenido a mi portafolio.
            </p>
        </Container>
    )
}