import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './SignUpForm/Signup';
import Login from './LoginForm/Login';


function App() {
  return (
    <Router>
    <Routes>
      {/* <Route path="/" element={<Landing />} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  </Router>
  );
}

export default App;
