import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsGithub, BsFillArrowUpCircleFill } from 'react-icons/bs';
import { Button, Container } from 'reactstrap';
import { FiDownloadCloud } from 'react-icons/fi';
import style from '../style.module.css';
import { useSelector } from 'react-redux';

export default function Footer() {
    const theme = useSelector(s => s.currentTheme);
    return (
        <Container className={`p-3 ${style.footerElements}`}>
            <ul className={style.iconsContact}>
                <li className={`${style.itemContact} ${style.itemContactFirst}`}><a className={theme?style.itemContactLinkDark:style.itemContactLinkLight} href="https://www.linkedin.com/in/aramayomartin/"><AiFillLinkedin /></a> </li>
                <li className={style.itemContact}><a className={theme?style.itemContactLinkDark:style.itemContactLinkLight} href='https://github.com/aramayomartin'><BsGithub /></a></li>
                <li className={style.itemContact}>
                    <a href='https://drive.google.com/file/d/1Duglp7RCVxVXth4ToqHOGXyJ7XYCw8Ur/view?usp=sharing'>
                        <Button color='info'>
                            <FiDownloadCloud /> CV
                        </Button>
                    </a>
                </li>
            </ul>
            <Button href='#' color='info'>
                <BsFillArrowUpCircleFill />
            </Button>
        </Container>
    )
}