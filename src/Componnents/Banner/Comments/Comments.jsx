import React from "react";
import Slider from "react-slick";
import './Comments.css'
import comments_user from '../../../assets/comments_user.svg'

// Import slick-carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Comments = () => {
    const settings = {
        infinite: true,
        speed: 700,
        slidesToShow: 3.01, // Show 3 comments-cards at a time
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
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <Slider {...settings}>
            <div>
                <div className="comments-card">
                    <div className="comment-user">
                        <img src={comments_user} alt="" />
                        <div className="comment-company">
                            <h4>Behzod Sharifjonov</h4>
                            <span>IMART</span>
                        </div>
                    </div>
                    <div className="comments-data">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro facere asperiores quas, dolores praesentium quod quis amet necessitatibus magnam eius!</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="comments-card">
                    <div className="comment-user">
                        <img src={comments_user} alt="" />
                        <div className="comment-company">
                            <h4>Behzod Sharifjonov</h4>
                            <span>IMART</span>
                        </div>
                    </div>
                    <div className="comments-data">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="comments-card">
                    <div className="comment-user">
                        <img src={comments_user} alt="" />
                        <div className="comment-company">
                            <h4>Behzod Sharifjonov</h4>
                            <span>StarOne Entity</span>
                        </div>
                    </div>
                    <div className="comments-data">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro facere asperiores quas,</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="comments-card">
                    <div className="comment-user">
                        <img src={comments_user} alt="" />
                        <div className="comment-company">
                            <h4>Behzod Sharifjonov</h4>
                            <span>Chat ME</span>
                        </div>
                    </div>
                    <div className="comments-data">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro facere asperiores quas, dolores praesentium quod quis amet necessitatibus magnam eius!</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="comments-card">
                    <div className="comment-user">
                        <img src={comments_user} alt="" />
                        <div className="comment-company">
                            <h4>Behzod Sharifjonov</h4>
                            <span>Cook Book</span>
                        </div>
                    </div>
                    <div className="comments-data">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro facere asperiores quas, dolores praesentium quod quis amet necessitatibus magnam eius!</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="comments-card">
                    <div className="comment-user">
                        <img src={comments_user} alt="" />
                        <div className="comment-company">
                            <h4>Behzod Sharifjonov</h4>
                            <span>Corner5</span>
                        </div>
                    </div>
                    <div className="comments-data">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro facere asperiores quas, dolores praesentium quod quis amet necessitatibus magnam eius!</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="comments-card">
                    <div className="comment-user">
                        <img src={comments_user} alt="" />
                        <div className="comment-company">
                            <h4>Behzod Sharifjonov</h4>
                            <span>Market</span>
                        </div>
                    </div>
                    <div className="comments-data">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro facere asperiores quas, dolores praesentium quod quis amet necessitatibus magnam eius!</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="comments-card">
                    <div className="comment-user">
                        <img src={comments_user} alt="" />
                        <div className="comment-company">
                            <h4>Behzod Sharifjonov</h4>
                            <span>IMART</span>
                        </div>
                    </div>
                    <div className="comments-data">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro facere asperiores quas, dolores praesentium quod quis amet necessitatibus magnam eius!</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="comments-card">
                    <div className="comment-user">
                        <img src={comments_user} alt="" />
                        <div className="comment-company">
                            <h4>Behzod Sharifjonov</h4>
                            <span>IMART</span>
                        </div>
                    </div>
                    <div className="comments-data">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro facere asperiores quas, dolores praesentium quod quis amet necessitatibus magnam eius!</p>
                    </div>
                </div>
            </div>
        </Slider>
    );
};

export default Comments;
