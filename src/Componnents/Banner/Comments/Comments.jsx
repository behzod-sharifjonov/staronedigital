import React from "react";
import Slider from "react-slick";
import './Comments.css'
import comments_user from '../../../assets/account.svg'

// Import slick-carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";

const Comments = () => {
    const { t } = useTranslation();
    const settings = {
        infinite: true,
        speed: 700,
        slidesToShow: 3, // Show 3 comments-cards at a time
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        ltr: true,
        centerMode: false, // Центрирует слайды
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 767,
                settings: "unslick",
            },
        ],
    };

    const comments = [
        { name: "Utkurov Abdulaziz", company: "IMART", text: t('comment_1') },
        { name: "Behzod Sharifjonov", company: "StarOne Entity", text: t('comment_2') },
        { name: "Nuri Ismatov", company: "Chat ME", text: t('comment_3') },
        { name: "Aziz", company: "Digital", text: t('comment_4') },
        { name: "Yuliya", company: "Corner5", text: t('comment_5') },
        { name: "Nodir", company: "Glowy", text: t('comment_6') },
    ];


    // Определяем, мобильное устройство или нет
    const isMobile = window.innerWidth <= 767;

    // Оставляем только первые 3 карточки на мобильной версии
    const filteredComments = isMobile ? comments.slice(0, 3) : comments;

    return (
        <div className="slider-wrapper">
            <Slider {...settings}>
                {filteredComments.map((comment, index) => (
                    <div key={index} className="comments-card">
                        <div className="comment-user">
                            <img src={comments_user} alt="" />
                            <div className="comment-company">
                                <h4>{comment.name}</h4>
                                <span>{comment.company}</span>
                            </div>
                        </div>
                        <div className="comments-data">
                            <p>{comment.text}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Comments;
