import { Route, Switch } from 'react-router';
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Products from './Components/Products';
import {useState} from "react"
import User from './Components/User';
import PrivateRoute from "./Components/PrivateRoute"

function App() {
  const [auth, setAuth] = useState(false)
  const handleAuth = (el) => setAuth(true)
  return (
    <div className="App">
      <Navbar />
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/products" component={Products}/>
      <Route path="/login" render={(props) => <Login {...props} authentication={handleAuth}/>}/>
      <PrivateRoute path="/user" component={User} isAuth={auth}/>
      </Switch>
    </div>
  );
}

export default App;
