import React from 'react'
import '../footer/footer.css'
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

function Footer() {
  return (
    <div className='footer'>
      <hr />
      <div className="container">
        <div className="nav__footer">
          <div className="link">
            <h5><FaPhoneAlt /></h5>
            <h5><MdOutlineMailOutline /></h5>
            <h5><FaLocationDot /></h5>
            <h5><FaTelegramPlane /></h5>
          </div>
          <div className="links">
            <h4 className='footer-h4'>Home</h4>
            <h4 className='footer-h4'>About</h4>
            <h4 className='footer-h4'>Tech Stack</h4>
            <h4 className='footer-h4'>Contact</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer