import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
;
import Registration from './pages/Registration';
import Login from './pages/Login';
import Onboard from './pages/Onboard';
import PostLogin from './pages/PostLogin';
import Tracking from './pages/Tracking';
import { useAuth } from './context/authContext/index'; 
import { Navigate } from 'react-router-dom';
const App = () => {
  const { userLoggedIn } = useAuth();
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Onboard />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/login' element={<Login />} />
        <Route
          path='/postlogin'
          element={userLoggedIn ? <PostLogin /> : <Navigate to='/login' />}
        />
        <Route
          path='/tracking'
          element={userLoggedIn ? <Tracking /> : <Navigate to='/login' />}
        />
      </Routes>
    </Router>
  );
}

export default App