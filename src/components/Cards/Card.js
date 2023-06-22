import React from 'react'
import './Card.css'
const Card = () => {
  return (
    <>

    <div  className='d-flex justify-content-around grid_column ' style={{border: '2px solid red', marginTop:'160px'}}  >

    <div   style={{border: '1px solid #ededed' , width:'30%'}} className='p-4  full_width'>

{/* intro */}
<div className='d-flex grid_column' style={{border:'2px solid green'}}>
    <div className='text_center w_100'  style={{border:'2px solid red' , width:'40%'}}> 
        <img  style={{width:'80px'}} 
        src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62e0341ce2debac5188bfaa5_Mask%20Group%20174.webp"
         alt="" />
    </div>
    <div>
        <h2>Simon Page</h2>
        <p style={{color :'grey'}}> Owner, Mamagato Restaurant </p>
    </div>
 
</div>

{/* para */}
<div>
    <p className='m-5 fs-5'>“In 2022 so far we are hitting our best months 
        in customers & revenue even in an economic downturn"</p>
</div>
<div>
    <h1 className='heading_1'>40%</h1>
    <p className='m-3 fs-4'>Average net profit increase</p>
</div>
<div>
    <h3>Product Used : </h3>
    <div>
        <button className='btn btn-primary m-2' style={{color:'#d8f7ff'}}>Messaging</button>
        <button className='btn btn-primary m-2' style={{color:'#d8f7ff'}}>WebChat</button>
        <button className='btn btn-primary m-2' style={{color:'#d8f7ff'}}>Review</button>
        <button className='btn btn-primary m-2 ' style={{color:'#d8f7ff'}}>Lisiting</button>
        <button className='btn btn-primary m-2' style={{color:'#d8f7ff'}}>Referrals</button>
    </div>
</div>
<div>

</div>

<div>

</div>

</div>



<div  style={{border: '1px solid #ededed' , width:'30%'}} className='p-4 full_width'>

{/* intro */}
<div className='d-flex grid_column ' >
<div> 
<img style={{width:'80px'}} src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62e0341c025451d2b6d54b11_xZ4wg2Xj-2.webp" alt="" />
</div>
<div>
<h2>Daniel Wilson</h2>
<p> Marketing head, The Air Conditioning Company</p>
</div>

</div>

{/* para */}
<div>
<p className='m-3 fs-4'>“Our rating improved from 3.3 to 4.6 & reviews are up 200%, we are getting more leads from Google”

</p>
</div>
<div>
<h1 className='heading_1'>200%</h1>
<p className='m-3 fs-4' > New review
growth</p>
</div>
<div>
<h3>Product Used : </h3>
<div>
<button className='btn btn-primary m-2' style={{color:'#d8f7ff'}}>Customer Manager</button>
<button className='btn btn-primary m-2' style={{color:'#d8f7ff'}}>WebChat</button>
<button className='btn btn-primary m-2' style={{color:'#d8f7ff'}}>Review</button>
<button className='btn btn-primary m-2' style={{color:'#d8f7ff'}}>Lisiting</button>
<button className='btn btn-primary m-2' style={{color:'#d8f7ff'}}>Referrals</button>
</div>
</div>
<div>

</div>

<div>

</div>

</div>

<div style={{border: '1px solid #ededed' , width:'30%'}} className='p-4 full_width'>

{/* intro */}
<div className='d-flex  grid_column'> 
<div> 
<img style={{width:'80px'}}
 src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62ae22ec3263c7de8393966d_photo-1493666438817-866a91353ca9.webp" alt="" />
</div>
<div>
<h2>Daniel Wilson</h2>
<p> Marketing head, The Air Conditioning Company</p>
</div>

</div>

{/* para */}
<div>
<p className='m-3 fs-4'>“Our rating improved from 3.3 to 4.6 & reviews are up 200%, we are getting more leads from Google”

</p>
</div>
<div>
<h1 className='heading_1'>200%</h1>
<p className='m-3 fs-4' > New review
growth</p>
</div>
<div>
<h3>Product Used : </h3>
<div>
<button className='btn btn-primary m-2' style={{color:'#d8f7ff'}}>Customer Manager</button>
<button className='btn btn-primary m-2' style={{color:'#d8f7ff'}}>WebChat</button>
<button className='btn btn-primary m-2' style={{color:'#d8f7ff'}}>Review</button>
<button className='btn btn-primary m-2' style={{color:'#d8f7ff'}}>Lisiting</button>
<button className='btn btn-primary m-2' style={{color:'#d8f7ff'}}>Referrals</button>
</div>
</div>
<div>

</div>

<div>

</div>

</div>




    </div>


    </>
  )
}

export default Card
