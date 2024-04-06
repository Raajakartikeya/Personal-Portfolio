import React, { useState } from 'react'
import CIcon from '@coreui/icons-react';
import { cibLeetcode } from '@coreui/icons';
import './index.css'
import { Projects } from './components/Projects/';

export default function App(){

  const [button,setButton] = useState(false);

  function func()
  {
    button?setButton(false):setButton(true);
  }
  return (
    <>
      <header id='home' className='header'>
        <a id={button?"namenone":"name"} href="#home">Raaja 
        <span id='sname'  > Kartikeya</span></a>
        <button onClick={func} className='menubtn'><i class='bx bx-menu'></i></button>
        <nav className={button?"navbar-active":"navbar"}>
          <a href="#home" >Home </a>
          <a href="#skills">Skills </a>
          <a href="#projects">Projects </a>
          <a href="https://drive.google.com/file/d/1RcIQJZWY0ppQZIX1TKck1RLyLyjKSJxt/view" target='_blank'>Resume </a>
          <a href="mailto:raajakartikeyanrs@gmail.com">Contact </a>
        </nav>
      </header>
      <div className={button?"popup-overlay":""}></div>
      <div  className='image'>
        <img src="images/img2.png" alt="" />
      </div>
     <h1 className='h1name'>I'm <span>Raaja Kartikeya</span></h1>
     <p>To land a demanding job in a field where I can apply my knowledge,
      expertise, and enthusiasm to successfully support the organisation's
      success while advancing my own development on both a personal
      and professional level.</p>

      <div className='socialicons'>
        <a href="https://github.com/raajakartikeya" target='_blank' ><i className='bx bxl-github' ></i></a>
        <a href="https://www.linkedin.com/in/raajakartikeya/" target='_blank'><i className='bx bxl-linkedin' ></i></a>
        <a target='_blank' href="https://leetcode.com/Raajakartikeya/"  ><CIcon id="leetcode" icon={cibLeetcode} /></a>
      </div>

      <div id='skills' className='skills'>
        <h1>SKILLS</h1>
        <img src="icons/html-5.png" alt="" />
        <img src="icons/css-3.png" alt="" />
        <img src="icons/js.png" alt="" />
        <img src="icons/react.png" alt="" />
        <img src="icons/python.png" alt="" />
        <img src="icons/cpp.png" alt="" />
        <img src="icons/sql-server.png" alt="" />
      </div>

    
      <h1 id='projects' className='projects'>PROJECTS</h1>
      <div className='project-container'>
        <Projects />
      </div>
    </>
  );
}
