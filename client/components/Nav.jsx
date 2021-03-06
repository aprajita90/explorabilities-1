import React from 'react';
import {Link} from 'react-router';
import authHelpers from '../auth/auth-helpers.js';

export default class Nav extends React.Component {

  render() {
    console.log('inside render');
    return (
      <div className="clearfix nav">
        <Link to="explore"><h2 className="beautify nav-title">Explorapedia</h2></Link>
        <Link to="airlines"><p>Airlines</p></Link>
        <Link to="deals"><p>Deals</p></Link>

        <Link id="hotels" to="hotels"><p>Hotels</p></Link>

        <nav>
          <Link to="myplaces">
            <button>My Places</button>
          </Link>
          <Link to="auth/signin">
            <button onClick={authHelpers.logout}>{checkAuth()}</button>
          </Link>
        </nav>
      </div>
    );
  }
}

function checkAuth() {
  if (!localStorage.token) {
    return 'Log In';
  } else {
    return 'Log Out';
  }
}