import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Auth from './Auth'

const Pages = () => {
  return (
    <Router>
      <Route exact path="/" component={Auth} />
    </Router>
  )
}

export default Pages;
