import React from 'react'
import { NavLink ,Outlet} from 'react-router-dom';
const AboutUs=()=> {
  return (
    <div>
      <h1>hello this website is build by UTKARSH MOHAN </h1>
      <h4>@ copyrights 2024</h4>
      <br/>
      <div className="link">
      <NavLink to="/about/faq">FAQ</NavLink>
      <NavLink to ="/about/help">Help !!</NavLink>
      </div>
      <main><Outlet/></main>
    </div>

  )
}

export default AboutUs;
