import React from 'react'
import './Header.css'
import logo from '../../assets/logo.svg'
import { Link } from 'react-scroll'
import mobile_logo from '../../assets/mobile_logo.svg'

function Navbar() {
    return (
        <nav className='display-center between'>
            <div className="logo">
                <img className='pc-logo' src={logo} alt="" />
                <img className='mobile-logo' src={mobile_logo} alt="" />
            </div>
            <div className="navbar display-center">
                <ul className='display-center'>
                    <Link activeClass="active"
                        to="header-container"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500} >О нас</Link>

                    <Link activeClass="active"
                        to="one-id"
                        spy={true}
                        smooth={true}
                        offset={-150}
                        duration={500} >Услуги</Link>

                    <Link activeClass="active"
                        to="section_2-container"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500} >Отзывы</Link>

                    <Link activeClass="active"
                        to="section_3-container"
                        spy={true}
                        smooth={true}
                        offset={-150}
                        duration={500} ></Link>
                </ul>
                <div className="nav-btns display-center">
                    <div className="nav-select">
                        <select name="" id="">
                            <option value="uz">uz</option>
                            <option value="ru">ru</option>
                        </select>
                    </div>
                    <div className="nav-btn">
                        <button className='btn'>Контакты</button>
                    </div>
                    {/* <div className="nav-menu">
                        <IoMenu className='icon' />
                    </div> */}
                </div>
            </div>
        </nav>
    )
}

export default Navbar