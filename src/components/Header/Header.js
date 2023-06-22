import React from 'react'
import './header.css'
// import {  } from " react-router-dom ";
const Header = () => {
  return (
    <div>
       
    <nav class="navbar fixed-top   navbar-expand-lg   bg-body-tertiary" style={{width:'100vw'}}>
  <div class="container-fluid d-flex make_flex justify-content-evenly">
    <a  href="#"   > <img  style={{width:'170px' , height:'30px', width:'100%'}} src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d857bb593d0d6f444528aa_full_logo.webp" alt="" /> </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse set_links"   id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 links_right me-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Products</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Solution</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Resources</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Support</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
       
        
      </ul>
    </div>

    <div className='w-25 display_none'>
    <a href ='SignIn' type="button" style={{borderRadius:'10px', marginLeft:'10px' ,padding:'11px 15px 11px 15px'}} class="btn btn-outline-dark" disabled>Sign In</a>
    <button type="button" style={{borderRadius:'10px', marginLeft:'10px' ,padding:'11px 15px 11px 15px'}} class="btn btn-dark  "> Get Started </button>
    </div>
  </div>
</nav>



    </div>
  )
}

export default Header
