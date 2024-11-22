import React from 'react'
import contact1 from '../../assets/Group 36787.png'
import './contact.css'
function Contact() {
  return (
    <div>
        <h1>Контакты</h1>
        <div className="contact">
            <div className="contactLeft">
                <div className="icons">
                <i className="fa-solid fa-phone"></i>
                <h6>+998 94 936 54 27</h6>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-telegram"></i>
                </div>
                <form action="">
                    <input type="text" placeholder='Имя'/>
                    <input type="text" placeholder='Номер телефона'/>
                    <textarea name="" id="" placeholder='Добавить коментарий'></textarea>
                    <button>Отправить</button>

                </form>
            </div>
            <div className="contactRight">
                <h4>Если у вас остались вопросы, то оставьте <br /> свои контакты, с вами свяжуться!</h4>
                <img src={contact1} alt="" />
            </div>
        </div>
        <div className="BoxBottom">
            <h5>2024 © ООО “STARONE ENTITY”. ИНН 309976567. Все права защищены.</h5>
        </div>
    </div>
  )
}

export default Contact