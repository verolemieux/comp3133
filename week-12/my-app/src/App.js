import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import StudentList from "./components/StudentList";
import AddStudent from "./components/AddStudent";
import DeleteStudent from "./components/DeleteStudent";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <StudentList />
      </Fragment>
    );
  }
}

export default App;
