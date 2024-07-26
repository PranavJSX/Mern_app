import logo from './logo.svg';
import './App.css';
import {  BrowserRouter as Router,Routes,Route,redirect} from "react-router-dom";
import { Home } from './user/Home';
import { NewPlaces } from './places/pages/NewPlaces';

function App() {
  return <Router>
    <Routes>

<Route path='/' Component={Home}>
</Route>
<Route path='/places/new' Component={NewPlaces}></Route>
    </Routes>
  </Router>
}

export default App;
