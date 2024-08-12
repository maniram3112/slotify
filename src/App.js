import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import pages from './pages';

const {LandingPage, SignIn, SignUp} = pages;

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path='/' element={<Navigate to='/landing'/>}
          />
          <Route
            path='/landing' element={<LandingPage/>}
          />
          <Route
            path='/signin' element={<SignIn/>}
          />
          <Route
            path='/signup' element={<SignUp/>}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
