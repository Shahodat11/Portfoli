import React from 'react'
import '../navbar/navbar.css'

function Navbar() {
  return (
    <div className="header">
    <div className='container'>
       <div className="navbar">
        <h1>LOGO</h1>
        <ul>
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">About</a>
            </li>
            <li>
                <a href="#">Tech Stack</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
        </ul>
        </div> 
    </div>

    </div>
  )
}

export default Navbar