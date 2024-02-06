import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './SignUpForm/Signup';
import Login from './LoginForm/Login';
import StudentArticle from './AJOEL1/StudentArticle';
import HomePage from './HomePage/Homepage';  // Import the HomePage component


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Homepage" element={<HomePage />} /> {/* Add this line for the Home page */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/StudentArticle" element={<StudentArticle />} />
      </Routes>
    </Router>
  );
}

export default App;
