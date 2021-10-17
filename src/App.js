
import './App.css';
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import People from './Components/People';
import Login from './Components/Login';
import About from './Components/About';
import MainPage from './Components/MainPage';
import Footer from './Components/Footer';

function App() {
  return (
  <>
    <Router>
      <Navbar/>
      <Route path="/" exact>
        <MainPage/>
        <About/>
      </Route>
      <Route path="/people" component={People}/>
      <Route path="/login" component={Login}/>
      <Footer/>
    </Router>
    
  </>
  );
}

export default App;
