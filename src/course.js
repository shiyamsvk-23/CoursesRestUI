import React, { Component } from "react";
import FetchDataComponent from "./FetchDataComponent";
import HeaderComponent from "./HeaderComponent";

class Course extends Component {
  render() {
    return (
      <>
        <HeaderComponent />
        <FetchDataComponent />
      </>
    );
  }
}

export default Course;