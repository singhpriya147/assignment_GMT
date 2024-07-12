import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
;
import Registration from './pages/Registration';
import Login from './pages/Login';
import Onboard from './pages/Onboard';
import PostLogin from './pages/PostLogin';
import Tracking from './pages/Tracking';
const App = () => {
  return (
    <Router>
      <Routes>
       
        <Route path='/' element={<Onboard />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/login' element={<Login />} />
        <Route path='/postlogin' element={<PostLogin />} />
        <Route path='/tracking' element={<Tracking />} />
      </Routes>
    </Router>
  );
}

export default App