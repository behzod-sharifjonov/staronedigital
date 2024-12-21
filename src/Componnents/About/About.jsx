import React from 'react'
import './About.css'
import about_1 from '../../assets/about_1.svg'
import about_2 from '../../assets/about_2.svg'
import about_3 from '../../assets/about_3.svg'
import about_4 from '../../assets/about_4.svg'
import about_5 from '../../assets/about_6.svg'
import about_6 from '../../assets/about_5.svg'
import { useTranslation } from 'react-i18next';

function About() {
    const { t } = useTranslation();

    return (
        <div className="about" >
            <div className='about-container parent'>
                <div className="about-parent display-center" id='one-id'>
                    <div className="about-child-1">

                        <div className="about-card">
                            <div className='about-card-data'>
                                <img src={about_1} alt="" />
                                <h3>{t('servis_1')}</h3>
                            </div>
                        </div>
                        <div className="about-card">
                            <div className='about-card-data'>
                                <img src={about_2} alt="" />
                                <h3>{t('servis_2')}</h3>
                            </div>
                        </div>
                        <div className="about-card">
                            <div className='about-card-data'>
                                <img src={about_3} alt="" />
                                <h3>{t('servis_3')}</h3>
                            </div>
                        </div>
                        <div className="about-card">
                            <div className='about-card-data about-image-smaller'>
                                <img src={about_4} alt="" />
                                <h3>{t('servis_4')}</h3>
                            </div>
                        </div>

                    </div>
                    <div className="about-child-2">
                        <div className="about-text" >
                            <h2>{t('info_2')}</h2>
                            <p id='one-id'>{t('info_3')}</p>
                        </div>
                        <div className="about-cards display-center">
                            <div className="about-card">
                                <div className='about-card-data about-image-smaller'>
                                    <img src={about_5} alt="" />
                                    <h3>{t('servis_5')}</h3>
                                </div>
                            </div>
                            <div className="about-card">
                                <div className='about-card-data about-image-smaller'>
                                    <img src={about_6} alt="" />
                                    <h3>{t('servis_6')}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about-parent-mobile">
                    <div className="about-container-mobile">
                        <h2>{t('info_2')}</h2>
                        <p id='one-id-2'>{t('info_3')}</p>
                        <div className="about-cards-mobile">
                            <div className="about-card">
                                <div className='about-card-data'>
                                    <img src={about_1} alt="" />
                                    <h3>{t('servis_1')}</h3>
                                </div>
                            </div>
                            <div className="about-card">
                                <div className='about-card-data'>
                                    <img src={about_2} alt="" />
                                    <h3>{t('servis_2')}</h3>
                                </div>
                            </div>
                            <div className="about-card">
                                <div className='about-card-data'>
                                    <img src={about_3} alt="" />
                                    <h3>{t('servis_3')}</h3>
                                </div>
                            </div>
                            <div className="about-card">
                                <div className='about-card-data about-image-smaller'>
                                    <img src={about_4} alt="" />
                                    <h3>{t('servis_4')}</h3>
                                </div>
                            </div>
                            <div className="about-card">
                                <div className='about-card-data about-image-smaller'>
                                    <img src={about_5} alt="" />
                                    <h3>{t('servis_5')}</h3>
                                </div>
                            </div>
                            <div className="about-card">
                                <div className='about-card-data about-image-smaller'>
                                    <img src={about_6} alt="" />
                                    <h3>{t('servis_6')}</h3>
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