
import '../styles/PostLogin.css'
import Confetti from '../assets/icons/Illustration Success.svg?react';
import { Link } from 'react-router-dom';
import { doSignOut } from '../firebase/auth';
import { useNavigate } from 'react-router-dom';
const PostLogin = () => {

  const navigate=useNavigate();
const LogOut=async()=>{
  try {
    await doSignOut();
    navigate('/login')
  } catch (error) {
     console.log(error.message);
  }
}


  return (
    <div className='postlogin-wrapper'>
      <div className='postlogin-card'>
        <Confetti />
        <h2>Login Successful</h2>
        <Link to='/tracking'>
          <button>Go to Tracking Screen</button>
        </Link>
        
          <p onClick={LogOut}>Logout</p>
        
      </div>
    </div>
  );
}

export default PostLogin