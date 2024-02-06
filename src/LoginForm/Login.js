import './Login.css'
import React, { useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Login() {
  const [studentID, setStudentID] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const handleLogin = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    try {
      const response = await axios.get('http://localhost:8080/getByUserid', {
        params: { studentID, password },
      });

      // Assuming your API returns the user data on success
      const user = response.data;

      // TODO: Handle successful login, e.g., store user data in state or context
      console.log('Login successful', user);
    } catch (error) {
      setError('Invalid credentials. Please try again.');
      console.error('Login error', error);
    }
  };




  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin">
          <form action="#" className="sign-in-form" onSubmit={handleLogin}>
            <h2 className="title">Log in</h2>
            
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                value={studentID}
                placeholder="Student ID no."
                onChange={(e) => setStudentID(e.target.value)}
              />
            </div>
            
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <input type="submit" value="Login" className="btn" />
          </form>
          
          
        </div>
      </div>
      {error && <div style={{ color: 'red' }}>{error}</div>}


  <div className="panels-container">
    <div className="panel left-panel">
      <div className="content">
      <img src="nstpcapstone1/img/Picture1.png" className="image" alt="" />
      <p>
        The NSTP is a program aimed at enhancing civic consciousness and defense preparedness in the youth by developing the ethics of service and patriotism while undergoing training in any of its program components. Under the NSTP law, state universities are required to offer ROTC and at least one other NSTP component.
     </p>
    <button className="btn transparent" id="sign-up-btn">
      <Link to="/signup" className='link'>Sign Up</Link>
    </button>
   </div>
  </div>
    </div>
    </div>


  );

  // return(
  //   <div className='login template d-flex justify-content-center align-items-center 100-w 100-vh bg-primary'>
  //     <div className='40-w p-5 rounded'>
  //   <form onSubmit={handleLogin}>  
  //            <h3>Log In</h3>
             
  //            <div className="mb-2">
  //             <label htmlFor='Student ID no'>Student ID no</label>
  //              <input
  //                type="text"
  //                value={studentID}
  //                placeholder="Student ID no."
  //                onChange={(e) => setStudentID(e.target.value)}
  //                className='form-control'
  //              />
  //            </div>

  //            <div className="mb-2">
  //             <label htmlFor='password'>Password</label>
  //              <input
  //                type="password"
  //                value={password}
  //                placeholder="Enter Password"
  //                onChange={(e) => setPassword(e.target.value)}
  //                className='form-control'
  //              />
  //            </div>

  //            <div>
  //             <input type='checkbox' className='custom-control custom-checkbox' id='check'/>
  //             <label htmlFor='check' className='custom-input-label'>
  //               Remember me
  //             </label>
  //            </div>

  //           <div className='d-grid'>
  //             <button type="submit" value="Login" className='btn btn-primary'>Log In</button>

  //           </div>
  //            <p className='text-right'> 
  //             <Link to="/signup" className='ms-2'>Sign Up</Link>
  //            </p>

  //     </form>
  //     </div>
  //   </div>
  // )
 
}

export default Login


