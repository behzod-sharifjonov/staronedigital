import React, { useState, useEffect } from 'react';
import './Header.css'
import logo from '../../assets/logo.svg'
import { Link, scroller} from 'react-scroll'
import mobile_logo from '../../assets/mobile_logo.svg'
import ruFlag from '../../assets/ru-flag.svg'; // Путь к флагу России
import uzFlag from '../../assets/uz-flag.svg';  // Путь к флагу Узбекистана
import BurgerIcon from '../../assets/burger.svg';
import CancelIcon from '../../assets/cancel.svg';
import { useTranslation } from "react-i18next";

function Navbar() {
    const { t, i18n } = useTranslation();

    const [activeLink, setActiveLink] = useState('header-container'); // По умолчанию "О нас
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    useEffect(() => {
        // Прокрутка к секции "О нас" при загрузке страницы
        scroller.scrollTo('header-container', {
            smooth: true,
            duration: 500,
            offset: -100,
        });
    }, []);

    const [language, setLanguage] = useState('RU'); // Изначально русский

    // const handleLanguageChange = () => {
    //     setLanguage(language === 'RU' ? 'UZ' : 'RU'); // Переключение языка
    // };

    const handleLanguageChange = () => {
        const newLanguage = language === 'RU' ? 'uz' : 'ru';
        setLanguage(newLanguage === 'ru' ? 'RU' : 'UZ'); // Меняем текст кнопки
        i18n.changeLanguage(newLanguage); // Меняем язык i18next
    };

    const handleSetActive = (link) => {
        setActiveLink(link); // Устанавливает активную ссылку
    };

    // Обработчик для закрытия меню при клике на ссылку
    const closeMenuOnClick = () => {
        setIsMenuOpen(false); // Закрытие меню
    };

    return (
        <nav className='display-center between'>
            
            <div className="logo">
                <img className='pc-logo display-center' src={logo} alt="" />
                <img className='mobile-logo' src={mobile_logo} alt="" />
            </div>

            <div className="navbar display-center">
                <ul className='display-center'>
                    <Link activeClass='active'
                        to="header-container"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        className='nav-link'
                        >{t('about')}</Link>

                    <Link activeClass='active'
                        to="one-id"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500} 
                        className='nav-link'
                        >{t('servis')}</Link>

                    <Link activeClass='active'
                        to="section_2-container"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        className='nav-link'
                        >{t('review')}</Link>

                    <Link activeClass='active'
                        to="section_3-container"
                        spy={true}s
                        smooth={true}
                        offset={-150}
                        duration={500}
                        className='nav-link' >{t('projects')}</Link>
                </ul>
            </div>
            <div className="nav-btns display-center">
                    <div
                        className={`nav-select ${i18n.language === 'ru' ? 'ru-language' : 'uz-language'}`}
                        onClick={handleLanguageChange}
                    >
                        <img
                            src={i18n.language === 'ru' ? ruFlag : uzFlag}
                            alt="Language Flag"
                            className="language-flag"
                        />
                        <span>{i18n.language.toUpperCase()}</span>
                    </div>
                    {/* Бургер-меню */}
                    <div className="burger-menu" onClick={toggleMenu}>
                    {isMenuOpen ? (
                        <img src={CancelIcon} alt="Cancel Icon" className="icon cancel-icon" />
                    ) : (
                        <img src={BurgerIcon} alt="Burger Icon" className="icon burger-icon" />
                    )}
                </div>
            </div>
            {/* Мобильное меню */}
            <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                <ul className='mobile-navbar'>
                    <Link
                        activeClass='active'
                        to="header-container"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        className='nav-link'
                        onClick={closeMenuOnClick}
                    >{t('about')}</Link>

                    <Link
                        activeClass='active'
                        to="one-id-2"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        className='nav-link'
                        onClick={closeMenuOnClick}
                    >{t('servis')}</Link>

                    <Link
                        activeClass='active'
                        to="section_2-container"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        className='nav-link'
                        onClick={closeMenuOnClick}
                    >{t('review')}</Link>

                    <Link
                        activeClass='active'
                        to="section_3-container"
                        spy={true}
                        smooth={true}
                        offset={-150}
                        duration={500}
                        className='nav-link'
                        onClick={closeMenuOnClick}
                    >{t('projects')}</Link>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar