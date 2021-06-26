import './App.css';
import Home from './Pages/Home';
import Products from './Pages/Products';
import NavBar from './Components/NavBar';
import { Route, Switch } from 'react-router-dom';
import Books from './Pages/Books';
import AudioBooks from './Pages/AudioBooks';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/products" component={Products}/>
      {/* recommanded */}
      {/* <Route path="/products/books" component={Books}/> */}

      {/* not recommanded */}
      {/* <Route path="/products/books">
        <Books />
      </Route> */}

      {/* recommanded */}
      <Route path="/products/books" render={  (props) => <Books {...props} />  }  />
      <Route path="/products/audio-books/" component={AudioBooks}/>
      </Switch>
    </div>
  );
}

export default App;
