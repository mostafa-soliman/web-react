import React from 'react'
import Navbar from './Navbar';
import './App.css';
import { BrowserRouter as Router ,Switch ,Route} from 'react-router-dom';
import Home from './Home';
import SignUp from './SignUp';
import Services from './Services';
import Products from './Products';


  function App(){
    return (
      <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/services' component={Services}/>
          <Route path='/products' component={Products}/>
          <Route path='/sign-up' component={SignUp}/>
        </Switch>
      </Router>
      </>
    );
  }
  export default App;