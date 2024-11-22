import React from "react";
import Slider from "react-slick";
import './ProjectBanner.css'
import ProjectBanner1 from '../../../assets/Case-study__image.svg'


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectBanner = () => {
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
                <div className="card1">
                    <img src={ProjectBanner1} alt="Card 1" />
                    <div className="card-body">
                        <h3>Website Design for SCFC Canada</h3>
                        <p className="text">Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="card1">
                    <img src={ProjectBanner1} alt="Card 1" />
                    <div className="card-body">
                        <h3>Website Design for SCFC Canada</h3>
                        <p className="text">Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="card1">
                    <img src={ProjectBanner1} alt="Card 1" />
                    <div className="card-body">
                        <h3>Website Design for SCFC Canada</h3>
                        <p className="text">Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.</p>
                    </div>
                </div>
            </div>
        </Slider>
    );
};

export default ProjectBanner;
