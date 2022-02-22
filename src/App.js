import React from 'react';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainCard from './components/MainCard';
import TechStack from './components/TechStack';
import AboutMe from './components/AboutMe';
import Proyects from './components/Proyects';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import {useSelector} from 'react-redux';
import style from './style.module.css';

function App() {
  const theme = useSelector(s=>s.currentTheme);
  return (
    <div id='proyects-section' className={theme?style.appThemeDark:style.appThemeLight}>
      <NavBar/>
      <MainCard/>
      <AboutMe/>
      <TechStack/>
      <Proyects/>
      <ContactMe/>
      <Footer/>
    </div>
  );
}

export default App;
