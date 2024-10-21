import React from 'react'
import './About.css'
import about_1 from '../../assets/about_1.svg'
import about_2 from '../../assets/about_2.svg'
import about_3 from '../../assets/about_3.svg'
import about_4 from '../../assets/about_4.svg'
import about_5 from '../../assets/about_6.svg'
import about_6 from '../../assets/about_5.svg'

function About() {
    return (
        <div className="about">
            <div className='about-container parent'>
                <div className="about-parent display-center">
                    <div className="about-child-1">

                        <div className="about-card">
                            <div className='about-card-data'>
                                <img src={about_1} alt="" />
                                <h3>Продвижение вашего сайта</h3>
                            </div>
                        </div>
                        <div className="about-card">
                            <div className='about-card-data'>
                                <img src={about_2} alt="" />
                                <h3>Разработка сайтов и приложений</h3>
                            </div>
                        </div>
                        <div className="about-card">
                            <div className='about-card-data'>
                                <img src={about_3} alt="" />
                                <h3>Мобилографические услуги</h3>
                            </div>
                        </div>
                        <div className="about-card">
                            <div className='about-card-data about-image-smaller'>
                                <img src={about_4} alt="" />
                                <h3>Качественный контент</h3>
                            </div>
                        </div>

                    </div>
                    <div className="about-child-2">
                        <div className="about-text">
                            <h2>Все наши услуги для вас</h2>
                            <p>Мы стремимся к тому, чтобы каждая услуга была адаптирована под ваши нужды, обеспечивая высокое качество и результативность. Свяжитесь с нами, чтобы узнать больше!</p>
                        </div>
                        <div className="about-cards display-center">
                            <div className="about-card">
                                <div className='about-card-data about-image-smaller'>
                                    <img src={about_5} alt="" />
                                    <h3>Маркетинг в социальных сетях</h3>
                                </div>
                            </div>
                            <div className="about-card">
                                <div className='about-card-data about-image-smaller'>
                                    <img src={about_6} alt="" />
                                    <h3>И многое другое</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about-parent-mobile">
                    <div className="about-container-mobile">
                        <h2>Все наши услуги <br /> для вас</h2>
                        <p>Мы стремимся к тому, чтобы каждая услуга <br /> была адаптирована под ваши нужды, <br /> обеспечивая высокое качество и <br /> результативность. Свяжитесь с нами, чтобы <br /> узнать больше!</p>
                        <div className="about-cards-mobile">
                            <div className="about-card">
                                <div className='about-card-data'>
                                    <img src={about_1} alt="" />
                                    <h3>Продвижение вашего сайта</h3>
                                </div>
                            </div>
                            <div className="about-card">
                                <div className='about-card-data'>
                                    <img src={about_2} alt="" />
                                    <h3>Разработка сайтов и приложений</h3>
                                </div>
                            </div>
                            <div className="about-card">
                                <div className='about-card-data'>
                                    <img src={about_3} alt="" />
                                    <h3>Мобилографические услуги</h3>
                                </div>
                            </div>
                            <div className="about-card">
                                <div className='about-card-data about-image-smaller'>
                                    <img src={about_4} alt="" />
                                    <h3>Качественный контент</h3>
                                </div>
                            </div>
                            <div className="about-card">
                                <div className='about-card-data about-image-smaller'>
                                    <img src={about_5} alt="" />
                                    <h3>Маркетинг в социальных сетях</h3>
                                </div>
                            </div>
                            <div className="about-card">
                                <div className='about-card-data about-image-smaller'>
                                    <img src={about_6} alt="" />
                                    <h3>И многое другое</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About