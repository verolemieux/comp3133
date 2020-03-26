import React from "react";
import Courses from "../components/courses";

const Student = props => {
  return (
    <div>
      <p>
        Student <b>{props.name}</b> with student number <b>{props.number}</b>
      </p>
      <p> Student is enrolled in </p>
      {props.enrolled.map(course => (
        <p>
          <b>Course {course}</b>
        </p>
      ))}
    </div>
  );
};

export default Student;
