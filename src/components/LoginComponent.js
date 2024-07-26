import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

import { Button } from 'react-bootstrap';
import Divider from '@mui/material/Divider';

// import logo from '../assets/images/northface_logo2.png'



export default function LoginComponent() {
  const navigate = useNavigate()

  // const logIn = () => {
  //   navigate('/ourWork')
  // }
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');

 const handleLogin=async (e)=>{
  console.log("userDetails",userName,password);
  e.preventDefault();
  try{
  const response = await fetch('http://localhost:8080/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userName, password }),
  });
  if (!response.ok) {
    throw new Error('Login failed');
  }
  const data = await response.json();
  console.log(data);
  alert("Success")
  navigate('/allProjects');

}
catch(err){
  console.log(err.message);
  alert("Failure")
}
 }
  return (
    <div className='bg-container'style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div className='card' style={{width:'550px',height:'auto',}}>
        <div className='logo-container'>
          <img src={require('../assets/images/northface_logo2.png')} alt='logo' className='logo'  style={{marginRight:'-10%'}}/>
        {/* <img src={require('../assets/images/northface logo2.png')} alt="logo" className='logo' /> */}
        </div>
        <div className="divider-container" style={{display:'flex'}}>
          <div className="left-lines">
            <Divider style={{ backgroundColor: 'grey',margin:'8%', height: '2px' ,width:'200px'}} />
            <Divider style={{ backgroundColor: 'grey' ,margin:'8%',height: '2px' ,width:'200px'}} />
            <Divider style={{ backgroundColor: 'grey',margin:'8%',height: '2px' ,width:'200px' }} />
            <Divider style={{ backgroundColor: 'grey',margin:'8%',height: '2px' ,width:'200px' }} />
          
         </div>
         <div>
         <img src={require('../assets/images/iconamoon_profile-duotone.png')} alt='logo' style={{paddingLeft:'30%'}}/>
         </div>
         <div >
            <Divider style={{ backgroundColor: 'grey',marginBottom:'8%' ,height: '2px' ,width:'200px',marginLeft:'20%',marginTop:'8%'}} />
            <Divider style={{ backgroundColor: 'grey',marginBottom:'8%' ,height: '2px' ,width:'200px',marginLeft:'20%',marginTop:'5%'}} />
            <Divider style={{ backgroundColor: 'grey',marginBottom:'8%' ,height: '2px' ,width:'200px',marginLeft:'20%',marginTop:'5%'}} />
            <Divider style={{ backgroundColor: 'grey',marginBottom:'8%' ,height: '2px' ,width:'200px',marginLeft:'20%',marginTop:'5%'}} />
            {/* <Divider style={{ backgroundColor: 'grey' ,margin:'8%',height: '3px' ,width:'150px'}} />
            <Divider style={{ backgroundColor: 'grey',margin:'8%',height: '3px' ,width:'150px' }} /> */}
            
          
         </div>
        </div>
 <form onSubmit={handleLogin}>
         <div style={{ marginLeft:'10%'}} >
           <label>User Name</label>
           <input style={{borderColor:'black',width:'85%', display:'flex',justifyContent:'center'}} type='text' className='form-control'  value={userName}  onChange={(e) => setUsername(e.target.value)} />
         </div>
         <div style={{marginLeft:'10%'}}>
           <label> Password</label>
           <input style={{borderColor:'black',width:'85%',display:'flex',justifyContent:'center'}} type='password' className='form-control' value={password}
          onChange={(e) => setPassword(e.target.value)}/>
           </div>
           <div style={{display:'flex',marginLeft:'10%'}}>
            <input type='checkbox' id="check" />
            <label htmlFor="check">Remember Me</label>
          </div>
          <div style={{marginLeft:'20%',padding:'10px'}}>
      <Button variant="primary" type='submit' style={{width:'300px'}} >SignIn</Button>
    </div>
          <div>
        
         <a href='forgotpassword' style={{marginLeft:'70%',fontSize:'18px',font:'inter',fontWeight:'500' }}>ForgotPassword</a>
                </div>
                <div style={{padding:'3%'}}>
                  <h5 style={{marginLeft:'10%'}}>Don't have an Account?  <Link to='/createUser'>
                <Button variant='link' style={{fontSize:'18px'}}>Register Now</Button>
              </Link></h5>

                </div>
           </form>
      
      </div>

   
    </div>

  )
}
