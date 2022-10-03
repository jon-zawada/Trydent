import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../hooks/useAuth';

const Login = () => {
  const [state, setState] = React.useState({
    email: '',
    password: ''
  });
  const { login } = useAuth();

  const submit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/login', {
      email: state.email,
      password: state.password
    })
      .then((res) => {
        login({
          email: res.data.email,
          id: res.data._id
        });
      })
      .catch((err) => {
        //render toast msg err accessible in err.response.data
      });
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
        <div className='form-footer'>
          <Link to='/register'>Register</Link>
          <Link to='/email'>Forgot Password?</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
