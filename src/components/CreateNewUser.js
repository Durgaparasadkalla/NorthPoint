import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

export default function CreateNewUser() {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', role: '', email: '', userId: '', userName: '', password: '' });
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log("formData", formData);
    try {
      const response = await fetch('http://localhost:8080/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error('register failed');
      }
      const data = await response.json();
      console.log(data);
      alert("Success")
      navigate('/')

    }
    catch (err) {
      console.log("err", err);
      console.error("err", err);
   

    }
  }


  return (
    <div className='bg-container' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div className='card' style={{ width: '600px', height: '500px', padding: '20px' }}>
        <div className='logo-container' style={{ textAlign: 'center', marginBottom: '20px' }}>
          <img src={require('../assets/images/northface_logo2.png')} alt='logo' style={{ width: '200px', margin: '0.5% 30%' }} />
        </div>
        <form className='form-container' onSubmit={handleRegister}>
          <div className='row'>
            <div className='col-lg-6 mb-3'>
              <label>Firstname:</label>
              <input type='text' className='form-control' name='firstName' value={formData.firstName} onChange={handleChange} />
            </div>
            <div className='col-lg-6 mb-3'>
              <label>Lastname:</label>
              <input type='text' className='form-control' name='lastName' value={formData.lastNamerole} onChange={handleChange} />
            </div>
            {/* <div className='col-lg-6 mb-3'>
              <label>Organization:</label>
              <select className='form-control' name='organization' value={formData.organization} onChange={handleChange}>
                <option value=''>Select Organization</option>
                <option value='org1'>Organization 1</option>
                <option value='org2'>Organization 2</option>
                <option value='org3'>Organization 3</option>
              </select>
            </div> */}
            <div className='col-lg-6 mb-3'>
              <label>Role:</label>
              <select className='form-control' name='role' value={formData.role} onChange={handleChange}>
                <option value=''>Select Role..</option>
                <option value='role1'>Role 1</option>
                <option value='role2'>Role 2</option>
                <option value='role3'>Role 3</option>
              </select>
            </div>
            <div className='col-lg-6 mb-3'>
              <label>Email:</label>
              <input type='email' className='form-control' name='email' value={formData.email} onChange={handleChange} />
            </div>
            <div className='col-lg-6 mb-3'>
              <label>Employee ID No:</label>
              <input type='text' className='form-control' name='userId' value={formData.userId} onChange={handleChange} />
            </div>
            <div className='col-lg-6 mb-3'>
              <label>User Name </label>
              <input type='text' className='form-control' name='userName' value={formData.userName} onChange={handleChange} />
            </div>
            <div className='col-lg-6 mb-3'>
              <label>Password </label>
              <input type='password' className='form-control' name='password' value={formData.password} onChange={handleChange} />
            </div>
            {/* <div className='col-lg-6 mb-3'>
              <label>Mobile No:</label>
              <input type='text' className='form-control' name='mobileNo' value={formData.mobileNo} onChange={handleChange}/>
            </div> */}
            {/* <div className='col-lg-6 mb-3'>
              <label>Access:</label>
              <input type='text' className='form-control' name='access' value={formData.access} onChange={handleChange}/>
            </div> */}
            <div style={{ marginLeft: '30%' }} >
              <button className='btn btn-primary' type='submit' style={{ margin: '3%' }}>Register</button>
              <Link to='/'>
                <button className='btn btn-primary' >Back</button>
              </Link>
            </div>


          </div>
        </form>
      </div>
    </div>
  );
}
