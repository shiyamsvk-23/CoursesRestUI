import React, { useState, useEffect } from "react";
import NewComp from "./NewComp";
import { Button, Form, Table } from "react-bootstrap";
import HeaderComponent from "./HeaderComponent";

function FunComp() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await NewComp.getData();
      console.log(result);
      console.log(result.data);
      setdata(result.data);
    }
    fetchData();
  }, []);

  async function handleDeleteClick(id) {
    const response = await NewComp.deleteData(id);
    fetchData();
  }

  //  const details =
  return (
    <>
      <HeaderComponent />
      <Table responsive striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Course ID</th>
            <th>Course Name</th>
            <th>Teacher Name</th>
            <th>Class</th>
            <th>Created By</th>
            <th>Modified By</th>
            <th>Created Date</th>
            <th>Modified Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((arr) => (
            <tr key={arr.courseId}>
              <td>
                <Form.Check aria-label="option 1" />
              </td>
              <td>{arr.courseId}</td>
              <td>{arr.course_Name}</td>
              <td>{arr.teacher_Name}</td>
              <td>{arr.class1}</td>
              <td>{arr.createdby}</td>
              <td>{arr.modifiedby}</td>
              <td>{arr.created_date}</td>
              <td>{arr.modified_date}</td>
              <td>
                <Button variant="warning">Modify</Button>{" "}
                <Button variant="danger">Delete</Button>{" "}
        
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button variant="primary">Add New Course</Button>
    </>
  );
}

export default FunComp;