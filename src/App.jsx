import React from 'react'
import './index.css'
export default function App(){
  
  return (
    <>
      <header className='header'>
        <a id='name' href="#home">Raaja 
        <span id='sname'  > Kartikeya</span></a>
        <nav className='navbar'>
          <a href="#home" className='active'>Home </a>
          <a href="#skills">Skills </a>
          <a href="https://github.com/raajakartikeya" target='_blank'>Projects </a>
          <a href="https://drive.google.com/file/d/1RcIQJZWY0ppQZIX1TKck1RLyLyjKSJxt/view" target='_blank'>Resume </a>
          <a href="mailto:raajakartikeyanrs@gmail.com">Contact </a>
        </nav>
      </header>

      <div className='image'>
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
      </div>

      <div id='skills' className='skills'>
        <h1>SKILLS</h1>
        <img src="icons/html-5.png" alt="" />
        <img src="icons/css-3.png" alt="" />
        <img src="icons/js.png" alt="" />
        <img src="icons/react.png" alt="" />
        <img src="icons/python.png" alt="" />
        <img src="icons/cpp.png" alt="" />
      </div>

    </>
  );
}
