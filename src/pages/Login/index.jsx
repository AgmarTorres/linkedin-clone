import React from 'react';
import './style.css';

function Login() {
  const register = () => {};
  const login = () => {};

  return (
    <div className='login'>
      <img
        src='https://www.tmf-group.com/-/media/images/logos/case-study-logos/linkedin.png'
        alt=''
      />
      <form>
        <input placeholder='Full name(required if registering' type='text' />
        <input placeholder='Profile pic URL(optional)' type='text' />
        <input placeholder='Email' type='email' />
        <input placeholder='Password' type='password' />
        <button type='submit' onClick={login}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?{' '}
        <span className='login__register' onClick={register}>
          Register now
        </span>
      </p>
    </div>
  );
}

export default Login;
