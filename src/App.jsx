import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
;
import Registration from './pages/Registration';
import Login from './pages/Login';

const App = () => {
  return (
    <Router>
      <Routes>
      
        <Route path='/registration' element={<Registration/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </Router>

  )
}

export default App