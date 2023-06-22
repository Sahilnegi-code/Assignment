import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import SignIn from './Pages/SignInPage/SignIn';
import LandingPage from './Pages/LandingPage/LandingPage';
import { Routes, Route } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Routes >
      <Route path="/" element={ <LandingPage/> } /> 
      <Route path = 'SignIn' element = { <SignIn/>} / >
    </Routes>
    </div>
  );
}

export default App;
