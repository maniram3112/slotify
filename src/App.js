import './App.css';
import pages from './pages';

const {SignIn, SignUp} = pages;

function App() {
  return (
    <div className="App">
      <SignIn/>
      <SignUp/>
    </div>
  );
}

export default App;
