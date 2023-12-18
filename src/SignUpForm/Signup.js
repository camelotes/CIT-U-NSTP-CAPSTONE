import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

Modal.setAppElement('#root'); // Set the root element for accessibility

function Signup() {
  const [user, setUser] = useState({
    studentID: '',
    firstName: '',
    lastName: '',
    course: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        setIsSuccessModalOpen(true);
      } else {
        const errorMessage = await response.text();
        setError(`Error: ${errorMessage}`);
      }
    } catch (error) {
      console.error('Error during signup:', error);
      setError('An error occurred during signup. Please try again later.');
    }
  };

  const closeModal = () => {
    setIsSuccessModalOpen(false);
  };

     
      return (
        <div className="container1">
           <Modal
        isOpen={isSuccessModalOpen}
        onRequestClose={closeModal}
        contentLabel="Signup Success Modal"
        style={{
          overlay: {
            zIndex: 1000, // adjust the z-index as needed
          },
          content: {
            zIndex: 1001, // ensure content is above overlay
          },
        }}
      >
        <h2>Signup Successful!</h2>
        <p>Your account has been created successfully.</p>
        <Link to="/login">
    <button onClick={closeModal}>Close</button>
  </Link>
      </Modal>
          <div className="forms-container">
            <div className="signup">
            <form action="#" className="sign-up-form" onSubmit={handleSubmit}>
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-id-card"></i>
              <input
            type="text"
            name="studentID"
            value={user.studentID}
            onChange={handleChange}
            required
            placeholder="Student ID no."
          />
            </div>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
            type="text"
            name="firstName"
            value={user.firstName}
            onChange={(e) => setUser((prevUser) => ({ ...prevUser, firstName: e.target.value }))}
            required
            placeholder="First Name"
          />
            </div>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
            type="text"
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
            required
            placeholder="Last Name"
          />
            </div>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
            type="text"
            name="course"
            value={user.course}
            onChange={handleChange}
            required
            placeholder="Course"
          />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
            placeholder="Email"
          />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
            placeholder="Password"
          />
            </div>
            <input type="submit" className="btn" value="Sign up" />
        
          </form>
          
        </div>
      </div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
     
         
        </div>
      );
  
}

export default Signup




    
  
