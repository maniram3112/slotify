import { useState } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import pages from './pages';

const {LandingPage, Home} = pages;

function App() {

  const[isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () =>{
    setIsLoggedIn(true);
  }

  return (
    <Router>
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
    </Router>
  );
}

export default App;
