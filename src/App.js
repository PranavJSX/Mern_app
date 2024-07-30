import logo from './logo.svg';
import './App.css';
import {  BrowserRouter as Router,Routes,Route,redirect} from "react-router-dom";
import { Home } from './user/Home';
import { NewPlaces } from './places/pages/NewPlaces';
import { User } from './user/components/User';
import { MainNavigation } from './shared/components/Navigation/MainNavigation';
import { UserPlaces } from './places/pages/UserPlaces';
import { UpdatePlace } from './places/pages/UpdatePlace';
function App() {
  return <Router>
    <MainNavigation/>
    <main>
    <Routes>
    
<Route exact path='/' Component={User}>
</Route>
<Route exact path='/:userid/places' Component={UserPlaces} ></Route>
<Route exact path='/places/new' Component={NewPlaces}></Route>
<Route exact path='/places/:placeId' Component={UpdatePlace}></Route>
    </Routes>
    </main>
    <redirect exact from="/" to={User} />
  </Router>
}
  
export default App;
