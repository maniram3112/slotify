import { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import pages from './pages';

const { LandingPage, Home, Slots, ManageSlots, Profile } = pages;

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const sessionToken = params.get('token');

    if (sessionToken) {
      setIsLoggedIn(true);
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('sessionToken', sessionToken);
      navigate('/home');
    }
  }, [location, navigate]);

  const handleLogin = () => {
    const sessionToken = generateToken();
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('sessionToken', sessionToken);
    navigate('/home');
  };

  const generateToken = () => {
    return Math.random().toString(36).substr(2);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage authType="signin" onLogin={handleLogin} />} />
        <Route path="/signin" element={
          isLoggedIn
            ? <Navigate to="/home" />
            : <LandingPage key="signin" authType="signin" onLogin={handleLogin} />
        } />
        <Route path="/signup" element={
          isLoggedIn
            ? <Navigate to="/home" />
            : <LandingPage key="signup" authType="signup" onLogin={handleLogin} />
        } />
        <Route path="/home" element={
          isLoggedIn ? <Home /> : <Navigate to="/signin" />
        } />
        <Route path="/slots" element={
          <Slots/>
        }
        />
        <Route path ="/manage-slots" element={
          <ManageSlots/>
        }
        />
        <Route path='/profile' element={
          <Profile/>
        }/>
      </Routes>
    </div>
  );
}

export default App;
