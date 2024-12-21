import React from 'react'
import { Link } from 'react-scroll';
import './Header.css'
import Navbar from './Navbar'
import header_image from '../../assets/header_image.svg'
import button_image from '../../assets/Button.png'
import star1 from '../../assets/star1.svg'
import star2 from '../../assets/star2.svg'
import star3 from '../../assets/star3.svg'
import { useTranslation } from 'react-i18next';


function Header() {
    const { t } = useTranslation();

    return (
        <header className='container-main' id=''>
            <Navbar />

            <div className="header-container">
                <div className="display-center between header-parent ">
                    <div className="header-text">
                        <h3>Starone Digital</h3>
                        <h1>{t('slogan')}</h1>
                        <p>{t('info')}</p>
                        <Link to="contact-container-1" smooth={true} duration={500} spy={true} offset={-100}>
                            <button className="btn">{t('contact')}</button>
                        </Link>
                        <Link to="contact-container-1" smooth={true} duration={500} spy={true} offset={-100}>
                        <div class="animated-button">
                            <div class="stars">
                                <img src={star1} alt="star 1" class="star star1" />
                                <img src={star2} alt="star 2" class="star star2" />
                                <img src={star3} alt="star 3" class="star star3" />
                            </div>
                            <span class="btn-2">{t('contact')}</span>
                            <div class="button-stroke"></div>
                        </div>
                        </Link>
                    </div>
                    <div className="header-image">
                        <img src={header_image} alt="" />
                    </div>
                </div>
            </div>

            <div class="animated-background">
                <div class="circle-container">
                    <div class="circle red"></div>
                    <div class="circle blue"></div>
                    <div class="circle yellow"></div>
                </div>
                <div class="blur-layer"></div>
            </div>

            <div className="bubble-container">
                <div className="bubble bubble1"></div>
                <div className="bubble bubble2"></div>
                <div className="bubble bubble3"></div>
                <div className="bubble bubble4"></div>
                <div className="bubble bubble5"></div>
                <div className="bubble bubble6"></div>
                <div className="bubble bubble7"></div>
                <div className="bubble bubble8"></div>
                <div className="bubble bubble9"></div>
            </div>
        </header>
    )
}

export default Header