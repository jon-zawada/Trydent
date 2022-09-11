import React from 'react';

const Register = () => {
  const [state, setState] = React.useState({
    email: '',
    password: '',
    confirm: ''
  });

  const submit = (event) => {
    event.preventDefault();
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
        <h1 className='login-sub-title'>Register for an account</h1>
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
          <div className='input-group'>
            <label>Confirm Password</label>
            <input
              type='password'
              name='confirm'
              value={state.confirm}
              onChange={(e) => onChangeHandler(e)}
            />
          </div>
          <button type='submit' className='login-button' onClick={submit}>Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
