import React from 'react'
import Card from '../Cards/Card'
import CardsLayout from '../Cards/CardsLayout';
import CardSection from '../Cards/CardSection';
import Cards from '../Cards/Cards';
import './mainscreen.css';
const Mainsection = () => {
  return (
    <>
       <div style={{width:'80%' , margin:'auto'}}>
    <div className="m-5 p-5 ">
    {/* https://assets.website-files.com/62a83ee090ccdee139c347e5/62b0e797d67fcfafb89723e3_home-hero-agnostic-l-2x%20(1)-p-1600.webp */}
    <h1 className='fw-bold font_third'> Trusted by 100,000+ local businesses globally</h1>
    </div>
    <div className=' d-flex flex justify-content-around' style={{border:'2px solid grey' , width:'100%'}}>
<div style={{width:'16%'}}>
<img src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969cad44fb711e700c0a1_Group%2018530.webp" alt="" />
</div> 
 <div style={{width:'16%'}}>
<img src="https://assets.website-files.com/62a83ee090ccdee13…347e5/62d969cae70f01d34820d129_Group%2018531.webp" alt="" />
</div>
<div style={{width:'16%'}}>
    <img src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969c99e10c822b37179e8_Group%2018532.webp" alt="" />
</div>
<div style={{width:'16%'}}>
    <img src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969ca47165b7b29cd5bfa_Group%2018534.webp" alt="" />
</div>
<div style={{width:'16%'}}>
 <img src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969cb054ce48a81f23d47_Group%2018535.webp" alt="" />   
</div> 
<div style={{width:'16%'}} >
<img src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969caa274fa886bbafd69_Group%2018536.webp" alt="" />
    </div> 
     <div style={{width:'16%'}}>
        <img src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969cae70f01d34820d129_Group%2018531.webp" />
    </div> 

</div>

<Card/>

<div>
    <h1 className='font_third' style={{margin : '105px' , fontWeight:'bolder'}}>Tools to take your business to next level</h1>
</div>

<CardsLayout/>

<div style={{margin : '105px'   }}>
    <h1 className='font_third' style={{ fontWeight:'Bolder'  }}>
        SalesCaptain is designed for your business
        </h1>
    <div>
    <span className='fw-2' style={{color : 'rgba(51,51,51,.6)' , fontSize:'20px'  }}> Select your industry to see how it works </span>
    </div>
</div>

<CardSection/>

<div>
    <h1 className='font_third' style={{margin : '105px' , fontWeight:'bolder'}}>
    Make your business stand out with us
        </h1>
</div>


<div className='d-flex grid_column'>
   
    <div style= {{width:'50% ' , textAlign:'left'}} className='d-flex flex-column
    justify-content-center full_width w_100 ' >
            <div className='text_center'  >
                <h1 className='fw-bold'>Get discovered by <br />
                    more customers</h1>
            </div>
            <div className='mt-4 w_100 text_center' >
                <p className='fs-4 ' style={{color:'#555'}}>Higher reviews & better listings make <br /> you more discoverable to people <br /> organically</p>
                <a href="" className='fw-bolder ' style={{ fontSize:'25px',textDecoration: 'none' , color:'#285fca'}}> Get Started</a>
            </div>
    </div>
    <div className='w_100' style={{width:'50%'}}>
        <img  className='w_100' style={{height:'500px'}} 
        src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62cc453f2139195799ff1678_Mask%20Group%20109.webp"
         alt="" />
    </div>

</div>

<div className='d-flex grid_column w_100' style={{marginTop:'150px'}}>
    
<div style={{width:'50%'}} className='w_100'>
        <img  style={{height:'500px' , width:'100%'} } 
        src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62def85e197fa06b03e4005b_Group%2018718.webp"
         alt="" />
    </div>


    <div style= {{width:'50% ' , textAlign:'right'}} className=' text_center d-flex flex-column w_100
    justify-content-center ' >
            <div  >
                <h1 className='fw-bold'> Faster conversion <br/>
with our Captain AI
 </h1>
            </div>
            <div className='mt-4' >
                <p className='fs-4 ' style={{color:'#555'}}>Automate web chat, messaging, reviews
& feedbacks with our AI assistant                                                               </p>
                <a href="" className='fw-bolder ' style={{ fontSize:'25px',textDecoration: 'none' , color:'#285fca'}}> Get Started</a>
            </div>
    </div>

</div>

<div className='d-flex grid_column' style =  {{marginTop :'150px'}}>
   
    <div style= {{width:'50% ' , textAlign:'left'}} className='d-flex flex-column w_100 text_center justify-content-center ' >
            <div  >
                <h1 className='fw-bold'>Get discovered by <br />
                    more customers</h1>
            </div>
            <div className='mt-4' >
                <p className='fs-4 ' style={{color:'#555'}}>Higher reviews & better listings make <br /> you more discoverable to people <br /> organically</p>
                <a href="" className='fw-bolder ' style={{ fontSize:'25px',textDecoration: 'none' , color:'#285fca'}}> Get Started</a>
            </div>
    </div>
    <div style={{width:'50%'}} className='w_100'>
        <img className='w_100'  style={{height:'500px'}} 
        src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62dee8fb4ff877b8c4b92833_new111.webp"
         alt="" />
    </div>


</div>

<div className='d-flex grid_column' style={{marginTop:'150px'}}>
    
<div style={{width:'50%'}} className='w_100'>
        <img  style={{height:'500px' , width:'100%'} } 
        src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62dee8fba79d98b49f7812a5_new222.webp"
         alt="" />
    </div>


    <div style= {{width:'50% ' , textAlign:'right'}} className=' text_center w_100 d-flex flex-column
    justify-content-center ' >
            <div  >
                <h1 className='fw-bold'> Faster conversion <br/>
with our Captain AI
 </h1>
            </div>
            <div className='mt-4' >
                <p className='fs-4 ' style={{color:'#555'}}>Automate web chat, messaging, reviews
& feedbacks with our AI assistant                                                               </p>
                <a href="" className='fw-bolder ' style={{ fontSize:'25px',textDecoration: 'none' , color:'#285fca'}}> Get Started</a>
            </div>
    </div>

</div>

<div style={{margin : '105px'   }}>
    <h1 className='font_third' style={{ fontWeight:'Bolder'  }}>
    Expert Insights and Resources
        </h1>
    <div>
    <p   style={{color : 'grey' , fontSize:'29px', fontWeight:'normal'  }}>
    Get the latest business intelligence relevant to your industry, designed to help you grow.
          </p>
    </div>
</div>

<Cards/>
<div className='fs-1 m-5'>
<a href="" className='fw-bolder ' style={{ fontSize:'25px',textDecoration: 'none' , color:'#285fca'}}>
     View All Resources
     </a>
</div>
    </div>
  
    </>
  )
}

export default Mainsection
