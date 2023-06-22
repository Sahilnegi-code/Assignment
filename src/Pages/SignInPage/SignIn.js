import React from 'react'
import './signin.css';
const SignIn = () => {
  return (
    <>

    <div  className='d-flex sign_container '> 
<div style={{width:'50%' }}  className=' w_100 d-flex justify-content-center align-items-center' >

<div style={{width:'20%'}}  className=''>

<div className='login_center'>
<div>

<div className='login_container' style={{width:'30%'}}>
<div  >
<h1 className='heading'>Login</h1>
</div>



<div >
<form>
  <div class="mb-3" style={{marginTop:'30px'}}>
    <label style={{textAlign:'left'}} for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control line_height_control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3" style={{marginTop:'30px'}}>
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control line_height_control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input line_height_control" id="exampleCheck1"/>
    <label style={{textAlign:'left'}} class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <div style={{textAlign:'left'}}>
  <button type="submit" class="btn btn-primary" >Submit</button>
  </div>
  
</form>
</div>

</div>


</div>

    </div>

</div>

</div>

<div style={{width:'50%'}} className='img_remove'>

    <div className='banner_box'>
        <div>
        </div>
    </div>

    

</div>

    </div>

    </>
  )
}

export default SignIn
