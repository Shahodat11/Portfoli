import React from 'react'
import '../main/main.css'
import html from '../../assets/vscode-icons_file-type-html.svg'
import js from '../../assets/vscode-icons_file-type-js-official.svg'
import react from '../../assets/logos_react.svg'
import react2 from '../../assets/Vector (2).svg'
import t from '../../assets/vscode-icons_file-type-tailwind.svg'
import sass from '../../assets/logos_sass.svg'
import vsc from '../../assets/vscode-icons_file-type-vscode.svg'
import github from '../../assets/akar-icons_github-fill.svg'

function Main() {
  return (
    <div className='main'>
        <div className="container">
            <div className="mains">
                <h4>My Tech Stack</h4>
                <h5> Technologies I’ve been working with recently</h5>
                <div className="icons">
                    <img className='icon' src={html} alt="" />
                    <img className='icon' src={js} alt="" />
                    <img className='icon' src={react} alt="" />
                    <img className='icon' src={react2} alt="" />
                    <img className='icon' src={t} alt="" />
                    <img className='icon' src={sass} alt="" />
                    <img className='icon' src={vsc} alt="" />
                    <img className='icon' src={github} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main