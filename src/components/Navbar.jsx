import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import {BsSearch} from 'react-icons/bs'
import {gsap} from 'gsap'


const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [showSidebar, setShowSidebar] = useState(false);
  const checkResize = () => {
    setWidth(window.innerWidth)
  }
  useEffect(()=> {
    window.addEventListener('resize', checkResize)
    console.log(width);
    return () => {
      window.removeEventListener('resize', checkResize);
    }
      
  });

  const handleClick = () => {
    setShowSidebar(prev => !prev)
    console.log(showSidebar);
  }
  return (
    <div className='nav__container'>
        <div className="block-header ">
          <div className='bg-r head'>
            {/* <img src="logo" alt="" /> */}
            <h1>ANSAR-UD-DEEN ACADEMY</h1>
          {width < 760 && <div className="hamburger" onClick={handleClick}></div>}
          </div>
        </div>
        <div className={`${showSidebar ? 'shw' : 'noshw'} nav bg-r`}>
            <ul className= ' nav__content'>
                <NavLink to="/" className="nav__item">Home</NavLink>
                <NavLink to="/history" className="nav__item">History</NavLink>
                <NavLink to = "/admission" className="nav__item">Admission</NavLink>
                <NavLink to = "/about_us" className="nav__item">About us</NavLink>
                <NavLink to = "/gallery" className="nav__item">Gallery</NavLink>
                <NavLink to = "/contact" className="nav__item">Contact</NavLink>
                <NavLink to = "/login" className="nav__item">Login Dashboard</NavLink>
                <BsSearch />
            </ul>
        </div>
        
    </div>
  )
}
gsap.from('.nav__item', {opacity: 0, duration: 3, delay: 3, y: 25, ease:'expo.out', stagger: .2})

export default Navbar