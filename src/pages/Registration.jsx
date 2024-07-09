import '../styles/Registration.css'
import  GoogleIcon from '../assets/icons/icons8-google.svg?react';
const Registration = () => {
  return (
    <div className='registration-wrapper'>
      <div className='regis-header'>
        <h2>Create your New acccount</h2>
        <p>Create an account to start looking for the food you like</p>
        <form action=''>
          <label htmlFor='email'>Email Address</label>
          <input id='email' type='email' placeholder='johndoe@gmail.com' />
          <label htmlFor='username'>User Name</label>
          <input type='text' id='username' />
          <label htmlFor='password'>Password</label>
          <input type='password' name='' id='password' />
          <div className='Term-condition'>
            <input type='checkbox' name='' id='check' />
            <p>
              I Agree with <a>Term of services</a>and <a>Privacy policy</a>
            </p>
          </div>
          <button>Register</button>
        </form>
        <div className='registration-footer'>
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
}

export default Registration