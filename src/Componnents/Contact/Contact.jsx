import React, { useState } from 'react';
import contact1 from '../../assets/Group 36787.png'
import './contact.css'
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();
  // Состояние для хранения данных формы
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComments] = useState('');

  // Обработчик отправки формы
  const handleSubmit = async (event) => {
    event.preventDefault(); // Чтобы форма не перезагружала страницу

    // Создаем объект данных для отправки
    const data = {
      name: name,
      phone: phone,
      comment: comment,
    };

    try {
      // Отправляем POST-запрос на API
      const response = await fetch('https://staronedigital.uz/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      // Проверяем успешность запроса
      if (response.ok) {
        // Успешный запрос
        alert('Ваши данные успешно отправлены!');
        // Очищаем форму
        setName('');
        setPhone('');
        setComments('');
      } else {
        throw new Error('Ошибка при отправке данных');
      }
    } catch (error) {
      // Обработка ошибок
      alert('Произошла ошибка: ' + error.message);
    }
  };

  return (
    <div className='main-contact'>
      <h1>{t('contact')}</h1>
      <div className="contact" id='contact-container-1'>
        <div className="contactLeft">
          <div className="icons">
            <i className="fa-solid fa-phone"></i>
            <h6>+998 93 385 17 55</h6>
            <a href="https://www.instagram.com/starone_digital/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://t.me/starone_uzb" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-telegram"></i>
            </a>
          </div>
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder={t('name')}
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
            <input 
              type="text" 
              placeholder={t('phone_number')} 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
            />
            <textarea 
              type="text"
              placeholder={t('description')} 
              value={comment} 
              onChange={(e) => setComments(e.target.value)} 
            />
            <button type="submit">{t('send_button')}</button>
          </form>
        </div>
        <div className="contactRight">
          <h4>{t('footer_text')}</h4>
          <img src={contact1} alt="" />
        </div>
      </div>
      <div className="BoxBottom">
        <h5>2024 © ООО “STARONE ENTITY”. ИНН 309976567. Все права защищены.</h5>
      </div>
    </div>
  );
}

export default Contact;