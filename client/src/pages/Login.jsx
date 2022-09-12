import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [state, setState] = React.useState({
    email: '',
    password: ''
  });

  const submit = (event) => {
    event.preventDefault();
    axios.post('login', {
      email: state.email,
      password: state.password
    });
    //Implement error handling
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setState((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className='full-screen-container'>
      <div className='login-container'>
        <h1 className='login-title'>Trydent</h1>
        <form className='form'>
          <div className='input-group'>
            <label>Email</label>
            <input
              type='email'
              name='email'
              value={state.email}
              onChange={(e) => onChangeHandler(e)}
            />
          </div>
          <div className='input-group'>
            <label>Password</label>
            <input
              type='password'
              name='password'
              value={state.password}
              onChange={(e) => onChangeHandler(e)}
            />
          </div>
          <button type='submit' className='login-button' onClick={submit}>Login</button>
        </form>
        <div className='register'>
          <Link to='/register'>Register</Link>
          <Link to='/email'>Forgot Password?</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
