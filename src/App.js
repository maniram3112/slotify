import { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import pages from './pages';

const {LandingPage, Home} = pages;

function App() {

  const[isLoggedIn, setIsLoggedIn] = useState(() =>{
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const sessionToken = params.get('token');

    if(sessionToken){
      setIsLoggedIn(true);
      localStorage.setItem('isLoggedIn', 'true');
    }
  }, [location])

  const handleLogin = () =>{
    const sessionToken = generateToken();
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
    navigate(`/home?token=${sessionToken}`)
  }

  const generateToken = () =>{
    return Math.random().toString(36).substr(2);
  }

  return (
    // <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/signin' element={
            isLoggedIn
              ?
                <Navigate to='/home' />
              :
                <LandingPage authType="signin" onLogin={handleLogin}/>
          } />
          <Route path='/signup' element={
            isLoggedIn
              ?
                <Navigate to='/home'/>
              :
                <LandingPage authType='signup' onLogin = {handleLogin}/>
          } />

          <Route
            path='/home'
            element={
              isLoggedIn ? <Home/>:<Navigate to = '/signin'/>
            }
          />
        </Routes>
      </div>
    // </Router>
  );
}

export default App;
