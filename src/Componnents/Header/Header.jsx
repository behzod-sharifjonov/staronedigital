import React from 'react'
import './Header.css'
import Navbar from './Navbar'
import header_image from '../../assets/header_image.svg'

function Header() {
    return (
        <header className='container'>
            <Navbar />

            <div className="header-container">
                <div className="display-center between header-parent">
                    <div className="header-text">
                        <h3>Starone Digital</h3>
                        <h1>Ваш успех через IT-решения</h1>
                        <p>Мы помогаем создать и управлять командой разработчиков, чтобы воплотить вашу идею в жизнь. Давайте начнем!</p>
                        <button className='btn'>Контакты</button>
                    </div>
                    <div className="header-image">
                        <img src={header_image} alt="" />
                    </div>
                </div>
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