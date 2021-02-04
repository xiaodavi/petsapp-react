import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Auth from './Auth'
import Home from './Home';

const Pages = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
    </Router>
  )
}

export default Pages;
