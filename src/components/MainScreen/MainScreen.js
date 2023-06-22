import React from 'react'
import './mainscreen.css';
import Mainsection from './Mainsection';
import Cards from '../Cards/Cards';
const MainScreen = () => {
  return (
    <>
    
    <div className='setScreen'>
        <div className='' >
        <div className ='Center_The_Screen'>
        <div className=''>
<h1 className='fw-bold font_primary '>Best way to grow your </h1>
<h1 className='fw-bold font_primary'> local business</h1>
        </div>
        <div>
<p style={{color:'grey'}}  className='font_secondary' >Artificial Intelligence powered easy-to-use tools to get more customers  & give them </p>
<p style={{color:'grey'}}  className='font_secondary'>a better experience</p>
        </div>
        <div className='d-flex justify-content-between' style={{width:'60%'  , margin:'auto'}}>
            <div style={{width:'80%' }}>
            <input className='input-box' type="email" class="form-control" id="floatingInput" placeholder="ENTER YOUR EMAIL"/>
            </div>
        <div style={{width:'20%'}}>
        <button type="button" style={{height:'100%'}} class="btn btn-primary">GET DEMO</button>
        </div>
                
            
        </div>

     </div>
        </div>

    </div>

    <div style={{width:'100vw' }}>
    <img  style={{width:'100%'}} src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62b0e797d67fcfafb89723e3_home-hero-agnostic-l-2x%20(1)-p-1600.webp" alt="" />
    {/* <h1>jsd</h1> */}
    </div>

    <Mainsection/>
   
   </>
  )
}

export default MainScreen
