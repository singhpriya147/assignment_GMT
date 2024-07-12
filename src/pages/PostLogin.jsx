
import '../styles/PostLogin.css'
import Confetti from '../assets/icons/Illustration Success.svg?react';
import { Link } from 'react-router-dom';
const PostLogin = () => {
  return (
    <div className='postlogin-wrapper'>
      <div className='postlogin-card'>
        <Confetti />
        <h2>Login Successful</h2>
        <Link to='/tracking'>
          <button>Go to Tracking Screen</button>
        </Link>
        <p>Logout</p>
      </div>
    </div>
  );
}

export default PostLogin