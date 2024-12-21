import React, { useEffect, useState } from 'react'
import Header from '../Componnents/Header/Header'
import Projects from '../Componnents/Banner/Projects/Projects'
import About from '../Componnents/About/About'
import Comments from '../Componnents/Banner/Comments/Comments'
import './Main.css'
import MainProject from '../Componnents/MainProject/MainProject'
import ProjectBanner from '../Componnents/Banner/ProjectBanner/ProjectBanner'
import Contact from '../Componnents/Contact/Contact'
import { useTranslation } from "react-i18next";

function Main() {
  const { t } = useTranslation();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div>
      <Header />
      <div className="container" >
        <Projects />
      </div>
      <About />
      <div className="comments-bg container" id='section_2-container'>
        <h2>{t('review')}</h2>
        <Comments />
      </div>
      <div className="main-projects container">
      <h2>{t('our_projects')}</h2>
      {windowWidth > 767 ? <MainProject /> : <ProjectBanner />}
      <Contact/>
      </div>
    </div>
  )
}

export default Main