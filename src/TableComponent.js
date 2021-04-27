import React from "react";
import { Table } from "react-bootstrap";
import ModalApp from "./FormModalComponent";

function TableComponent(props) {
  return (
    <>
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
        <tbody>{props.data}</tbody>
      </Table>
      <ModalApp fetchData={props.fetchdata} />
    </>
  );
}

export default TableComponent;