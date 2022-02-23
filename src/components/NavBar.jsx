import React from 'react';
import { Container, Nav, NavItem, NavLink } from 'reactstrap';
import SwitchTheme from './SwitchTheme';
import style from '../style.module.css';
export default function NavBar() {
    return (
        <div className={`p-3 mx-5 mt-1 opacity-60 ${style.bannerTop}`}>
            <Nav
                fill
                pills
            >
                <NavItem>
                    <NavLink href="#about-me-section" className='text-white'>
                        Acerca de mi
                    </NavLink>
                </NavItem>
                <NavItem className={style.navItem}>
                    <NavLink href="#tech-stack-section" className='text-white'>
                        Tech Stack
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#skr" className='text-white'>
                        Proyectos
                    </NavLink>
                </NavItem>
                <NavItem className={style.navItem}>
                    <NavLink href="#contact-section" className='text-white'>
                        Contacto
                    </NavLink>
                </NavItem>
                <NavItem>
                    <SwitchTheme />
                </NavItem>
            </Nav>
        </div>
    )
}