import React from 'react'
import '../about/About.css'
import logo from '../../assets/images.jpg'

function About() {
  return (
    <div className='about'>
        <div className="container nav-link-about">
            <div className="abouts">
                <h2>About</h2>
                <h3>I am Shahadat. Frontend Developer, developer and problem solver.</h3>
                <p>I've always been fascinated by the edge of programming, and I've never been afraid to just jump in and try it out, whether it's Redux, the Redux toolkit, Next js, or different styles. I will be designing with computers starting in 2023.</p>
                <p>This resonates so deeply with me because I have no desire to make pretty things just for the sake of it. Some people love that! But it's not for me. I only want to make, design or build ideas and products that are real, that matter and have an impact in the world.</p>
            </div>
            <img className='about-img' src={logo} alt="" />
        </div>
    </div>
  )
}

export default About