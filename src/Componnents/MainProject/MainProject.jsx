import React from 'react';
import './Mainproject.css'
import mainproject1 from '../../assets/Case-study__image.png';
import mainproject2 from '../../assets/Case-study__image (1).png';


function MainProject() {

  return (
    <div className='main-design'>
      <div className="design">
        <div className="designLeft">
          <img src={mainproject1} alt="" />
        </div>
        <div className="designRight">
         <div className="textBox">
         <h2>Website Design for SCFC Canada</h2>
         <p className="text">Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.</p>
         </div>

        </div>
      </div>
      <div className="design">
        <div className="designLeft">
          <img className='first' src={mainproject2} alt="" />
        </div>
        <div className="designRight">
         <div className="textBox">
         <h2>Website Design for SCFC Canada</h2>
         <p className="text">Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.</p>
         </div>

        </div>
      </div>
    </div>
  )
}

export default MainProject