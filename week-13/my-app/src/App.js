import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Student from "./components/Student";
import CustomHistory from "./history";
import Redirect from "./components/Redirect";

class App extends Component {
  render() { 
    return ( 
      <BrowserRouter history={CustomHistory}>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/student/'Jim Smith'">Student: Jim Smith</Link></li>
            <li><Link to="/student/'Jane Smith'/50001">Student: Jane Smith Student No: 50001</Link></li>
            <li><Link to="/redirect">Redirect</Link></li>
          </ul>
        </div>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/student/:studentname/:studentno?" component={Student} />
          <Route path="/redirect" component={Redirect} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
     );
  }
}
 
export default App;
