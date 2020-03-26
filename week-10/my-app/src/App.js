import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import Student from "../src/components/student";
import College from "../src/components/college";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Student name="Rick Rude" number="111111" enrolled={[0, 1]} />
        <Student name="Shawn Michaels" number="222222" enrolled={[0]} />
        <Student name="Bret Hart" number="333333" enrolled={[0, 1, 2]} />
        <College name="George Brown" location="Casa Loma" />
      </Fragment>
    );
  }
}

export default App;
