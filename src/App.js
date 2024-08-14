import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import pages from './pages';

const {LandingPage} = pages;

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/signin' element={<LandingPage authType="signin"/>} />
          <Route path='/signup' element={<LandingPage authType="signup"/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
