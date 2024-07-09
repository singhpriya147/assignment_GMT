
import '../styles/PostLogin.css'
import Confetti from '../assets/icons/Illustration Success.svg?react';
const PostLogin = () => {
  return (
    <div className="postlogin-wrapper">
     <div className='postlogin-card'>
       <Confetti/>
       <h2>Login Successful</h2>
       <button>Go to Tracking Screen</button>
       <p>Logout</p>
     </div>
    </div>
  )
}

export default PostLogin