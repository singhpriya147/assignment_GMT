import '../styles/Registration.css'
import  GoogleIcon from '../assets/icons/icons8-google.svg?react';

import { useAuth } from '../context/authContext';
import { doCreateUserWithEmailAndPassword } from '../firebase/auth';
import {doSignInWithGoogle} from '../firebase/auth'
import { useState } from 'react';
import { Link} from 'react-router-dom';
import { useNavigate ,Navigate } from 'react-router-dom';
// import {toast} from 'react-toastify'


const Registration = () => {

const[email,setEmail]=useState('');
const[password,setPassword]=useState('');
const[username,setUsername]=useState('');
// const[isRegistering,setIsRegistering]=useState(false);
// const[errorMessage,setErrorMessage]=useState('')

const{userLoggedIn}=useAuth()
const navigate = useNavigate();
const onSubmit=async(e)=>{
e.preventDefault();


try {
  await doCreateUserWithEmailAndPassword(email, password);
  navigate('/login');
} catch (error) {
 
  console.log(error.message);
} finally {
  
  setUsername('');
  setEmail('');
  setPassword('');
}


}


const registerWithGoogle=async()=>{
try {
  await doSignInWithGoogle (email, password);
  navigate('/postlogin');
} catch (error) {
   console.log(error.message);
}
}


  return (
    <>
      {userLoggedIn && <Navigate to={'/postlogin'} replace={true} />}

      <div className='registration-wrapper'>
        <div className='regis-header'>
          <h2>Create your New acccount</h2>
          <p>Create an account to start looking for the food you like</p>
          <form onSubmit={onSubmit}>
            <label htmlFor='email'>Email Address</label>
            <input
              id='email'
              type='email'
              placeholder='johndoe@gmail.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor='username'>User Name</label>
            <input
              type='text'
              id='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name=''
              id='password'
              // disabled={isRegistering}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className='Term-condition'>
              <input type='checkbox' name='' id='check' />
              <p>
                I Agree with <a>Term of services</a>and <a>Privacy policy</a>
              </p>
            </div>

            {/* {errorMessage && (
              <span className='text-red-600 font-bold'>{errorMessage}</span>
            )} */}

            <button type='subit' >
              Register
            </button>
          </form>
          <div className='registration-footer'>
            <div className='hr-lines'>
              <span>Or sign in with</span>
            </div>
            <div className='footer-base'>
              <GoogleIcon width='25' height='25'   onClick={registerWithGoogle}/>
              <p>
                Have an Account ? <Link to={'/login'}>Sign In</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registration