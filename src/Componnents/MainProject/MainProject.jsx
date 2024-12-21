import React from 'react';
import './Mainproject.css'
import mainproject1 from '../../assets/project_1.png';
import mainproject2 from '../../assets/project_2.png';
import { useTranslation } from "react-i18next";


function MainProject() {
  const { t } = useTranslation();
  const projects = [
    {
      image: mainproject1,
      title: t('project_name_1'),
      description: t('project_info_1'),
    },
    {
      image: mainproject2,
      title: t('project_name_2'),
      description: t('project_info_2'),
    }
  ];

  return (
    <div className="main-design" id="section_3-container">
      {projects.map((project, index) => (
        <div className="design" key={index}>
          <div className="imageContainer">
            <img src={project.image} alt={`${project.title} изображение`} />
          </div>
          <div className="textContainer">
            <div className="textBox">
              <h2>{project.title}</h2>
              <p className="text">{project.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}


export default MainProject