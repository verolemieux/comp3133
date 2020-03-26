import React, { Component } from "react";
import axios from "axios";

class DeleteStudent extends Component {
  handleSubmit = event => {
    event.preventDefault();
    axios
      .delete(`http://jsonplaceholder.typicode.com/users/${this.props.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
    this.props.refreshStudentList();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* <label>
            Person Id:
            <input type="text" name="name" onChange={this.handleChange} />
          </label> */}
          <button type="submit">Delete</button>
        </form>
      </div>
    );
  }
}

export default DeleteStudent;
