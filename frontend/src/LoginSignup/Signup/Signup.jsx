import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOtp, userSigninDetails } from '../../redux/action';
import { Alert, AlertTitle } from '@mui/material';
import '../Signup/Signup.css'

const Signup = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [otp, setOtp] = useState('');
  const [showErrorAlert, setShowErrorAlert] = useState(true);
  const navigate = useNavigate();
  const error = useSelector((state) => state.error);
  // const userDetails = useSelector((state) => state.userDetails);
  // console.log("userdetails->",userDetails)

  const handleSubmit = async (e) => { 
    e.preventDefault();
    if (!otp) {
      setShowErrorAlert(true);
      return;
    } else {
      setShowErrorAlert(false);
    }
    dispatch(userSigninDetails({
      name,
      email,
      phone,
      password,
      otp,
    }));
    
    {error && <h1 className="error-message">{error}</h1>}
    // navigate('/flights'); 
  };

  const sendOTP = async (e) => {
    e.preventDefault();
    //   if (!name || !email || !phone || !password) {
    //   alert('All fields are required.');
    //   return;
    // }
    dispatch(getOtp({
       email,
      password
        }));
        setShowOtpInput(true);
        
            {error && <h1 className="error-message">{error}</h1>}
    // navigate('/userprofile'); 
  };

  return (
    <div className="signup-container">
      <div className="signup-header">
        <h2>Sign Up</h2>
      </div>
      <div className="signup-form">
        <form onSubmit={showOtpInput ? sendOTP : handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />

          <label htmlFor="phone">Mobile</label>
          <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter your mobile number" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />

          {showOtpInput && (
            <div className="form-group">
              <label htmlFor="otp">OTP</label>
              <input
                type="text"
                id="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter the OTP"
              />
              
        {error && <h1 className="error-message">{error}</h1>}
              {/* {showErrorAlert && <Alert severity="error"><AlertTitle>Error</AlertTitle>Please enter OTP.</Alert>} */}
            </div>
          )}
          {!showOtpInput && (
            <button type="button" onClick={sendOTP} className="submit-btn">
              Verify
            </button>
          )}

          {showOtpInput && (
            <button type="submit" onClick={handleSubmit} className="signup-submit" disabled={loading}>
              {loading ? 'Signing Up...' : 'Sign Up'}
            </button>
          )}
        </form>
        <div className="login-link">
          <p>Already have an account? <Link to="/login">Login here</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
