

import '../styles/Login.css';
import GoogleIcon from '../assets/icons/icons8-google.svg?react';
const Login= () => {
  return (
    <div className='login-wrapper'>
      <div className='login-header'>
        <h2>Login to your acccount</h2>
        <p>Please sign in to your account</p>
        <form action=''>
          <label htmlFor='email'>Email Address</label>
          <input id='email' type='email' placeholder='johndoe@gmail.com' />
          <label htmlFor='username'>User Name</label>
          <input type='text' id='username' />
          <label htmlFor='password'>Password</label>
          
          <button>Register</button>
        </form>
        <div className='login-footer'>
          <div className='hr-lines'>
            <span>Or sign in with</span>
          </div>
          <div className='footer-base'>
            <GoogleIcon width='25' height='25' />
            <p>
              Have an Account ? <a>Sign In</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;