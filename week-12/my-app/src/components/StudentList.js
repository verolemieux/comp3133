import React, { Component } from "react";
import axios from "axios";
import DeleteStudent from "./DeleteStudent";
import AddStudent from "./AddStudent";

class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    this.refreshStudentList();
  }

  refreshStudentList = () => {
    axios
      .get("http://jsonplaceholder.typicode.com/users")
      .then(res => {
        const users = res.data;
        this.setState({
          users
        });
      });
  }

  render() {
    return (
      <div>
        <AddStudent refreshStudentList={this.refreshStudentList}/>
        <ul>
        {this.state.users.map(user => {
          return <li>{user.name} <DeleteStudent id={user.id} refreshStudentList={this.refreshStudentList}/></li>;
        })}
      </ul></div>
    );
  }
}

export default StudentList;
