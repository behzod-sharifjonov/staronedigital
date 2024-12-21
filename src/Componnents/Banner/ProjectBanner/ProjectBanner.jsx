import React from "react";
import Slider from "react-slick";
import './ProjectBanner.css'
import mainproject1 from '../../../assets/project_1.png';
import mainproject2 from '../../../assets/project_2.png';
import { useTranslation } from "react-i18next";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectBanner = () => {
    const { t } = useTranslation();
    const settings1 = {
        infinite: true,
        speed: 700,
        slidesToShow: 5, // Show 3 cards at a time
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <Slider {...settings1}>
            <div>
                <div className="card1" id="section_3-container">
                    <img src={mainproject1} alt="Card 1" />
                    <div className="card-body" >
                        <h3>{t('project_name_1')}</h3>
                        <p className="text">{t('project_info_1')}</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="card1">
                    <img src={mainproject2} alt="Card 1" />
                    <div className="card-body">
                        <h3>{t('project_name_2')}</h3>
                        <p className="text">{t('project_info_2')}</p>
                    </div>
                </div>
            </div>
        </Slider>
    );
};

export default ProjectBanner;
