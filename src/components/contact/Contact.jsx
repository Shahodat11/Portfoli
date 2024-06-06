import React from 'react'
import '../contact/contact.css'
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

function Contact() {
  return (
    <div className='contact'>
        <hr />
        <div className="container contact-us">
          <div className="contactt">
            <h6>Hello.</h6>
            <h5 className='h5' ><FaPhoneAlt />Tel: +998 94 650 47 49</h5>
            <h5 className='h5' ><MdOutlineMailOutline />shahodatusmonjonova@gmail.com</h5>
            <h5 className='h5' ><FaLocationDot />shayhontohur tuman</h5>
            <h5 className='h5' ><FaTelegramPlane /><a className='h55' href="https://t.me/usmonjonovaa">Telegram</a></h5>    
          </div>
        </div>
    </div>
  )
}

export default Contact