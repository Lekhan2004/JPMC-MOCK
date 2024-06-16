import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [userData, setUserData] = useState({
    userId: '',
    password: '',
    userType: 'user'
  });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const changeInputHandler = (event) => {
    const { name, value } = event.target;
    setUserData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setErrorMessage('');

    try {
      const response = await axios.post('https://jpmc-mock-production.up.railway.app/login', {
        userId: userData.userId,
        password: userData.password,
        userType: userData.userType
      });

      const data = response.data;
      console.log('Login successful', data);

      // Save the token to local storage or state management
      // localStorage.setItem('token', data.token);
      // Redirect to the desired page
      navigate('/');  // or any other route
    } catch (error) {
      setErrorMessage(error.response ? error.response.data.message : error.message);
    }
  };

  return (
    <section className="register">
      <div className="container">
        <h2>Sign In</h2>
        <form className="form register__form" onSubmit={submitHandler}>
          {errorMessage && <p className="form__error-message">{errorMessage}</p>}
          <input 
            type="userId" 
            placeholder='userId' 
            name='userId' 
            value={userData.userId} 
            onChange={changeInputHandler} 
            autoFocus 
          />
          <input 
            type="password" 
            placeholder='Password' 
            name='password' 
            value={userData.password} 
            onChange={changeInputHandler} 
          />
          <div className="user-type">
            <label>
              <input 
                type="radio" 
                name="userType" 
                value="user" 
                checked={userData.userType === 'user'} 
                onChange={changeInputHandler} 
              />
              User
            </label>
            <label>
              <input 
                type="radio" 
                name="userType" 
                value="admin" 
                checked={userData.userType === 'admin'} 
                onChange={changeInputHandler} 
              />
              Admin
            </label>
          </div>
          <button type="submit" className="btn primary">Login</button>
        </form>
        
        <small>Don't have an account? <Link to="/register">Sign Up</Link></small>
      </div>
    </section>
  );
}

export default Login;
