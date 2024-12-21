import React from "react";
import Slider from "react-slick";
import './Projects.css'
import imart_icon from '../../../assets/imart_icon.svg'
import market_icon from '../../../assets/market_icon.svg'
import corner_icon from '../../../assets/coner_icon.svg'
import book_icon from '../../../assets/book_icon.svg'
import chat_icon from '../../../assets/chat_icon.svg'

// Import slick-carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
    const settings = {
        infinite: true,
        speed: 700,
        slidesToShow: 5, // Show 3 cards at a time
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
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
                    slidesToShow: 1.5,
                },
            },

            {
                breakpoint: 574,
                settings: {
                    slidesToShow: 1.5,
                },
            },
        ],
    };

    return (
        <Slider {...settings}>
            <div>
                <div className="card">
                    <img src={imart_icon} alt="Card 1" />
                    <div className="card-body">
                        <h3>IMART</h3>
                    </div>
                </div>
            </div>
            <div>
                <div className="card">
                    <img src={market_icon} alt="Card 2" />
                    <div className="card-body">
                        <h3>Market</h3>
                    </div>
                </div>
            </div>
            <div>
                <div className="card">
                    <img src={corner_icon} alt="Card 3" />
                    <div className="card-body">
                        <h3>Corner5</h3>
                    </div>
                </div>
            </div>
            <div>
                <div className="card">
                    <img src={book_icon} alt="Card 4" />
                    <div className="card-body">
                        <h3>cook book</h3>
                    </div>
                </div>
            </div>
            <div>
                <div className="card">
                    <img src={chat_icon} alt="Card 5" />
                    <div className="card-body">
                        <h3>chat me</h3>
                    </div>
                </div>
            </div>
        </Slider>
    );
};

export default Projects;
