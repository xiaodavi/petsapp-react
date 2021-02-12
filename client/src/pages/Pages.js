import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Signup from './Signup'
import Home from './Home';
import Login from './Login';

const Pages = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
    </Router>
  )
}

export default Pages;
