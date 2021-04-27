import React, { useState, useEffect } from "react";
import TableComponent from "./TableComponent";
import { Button, Form } from "react-bootstrap";
import NewComp from "./NewComp";
import DeleteModalComponent from "./DeleteModalComponent";


function FetchDataComponent() {
  const [data, setData] = useState([]);
  const [checkData, setCheckData] = useState([]);

  async function fetchData() {
    const result = await NewComp.getData();
    console.log("Hey its me", result);
    console.log("not me", result.data);
    setData(result.data);
  }
  useEffect(() => {
    fetchData();
  }, []);

  async function handleDeleteClick(id) {
    const response = await NewComp.deleteData(id);
    fetchData();
  }

  async function handleMultipleDeleteClick() {
    const response = await NewComp.deleteMultipleData(checkData);
    fetchData();
  }
  function handleCheckboxChange(e, arr) {
    let temp = checkData;
    temp.push(arr);
    setCheckData(temp);
    console.log("Hey it's data", checkData);
    console.log("Hey its me the simple object=", arr);
    console.log("its change checkbox =", e);
  }

  const details = data.map((arr) => (
    <tr key={arr.courseId}>
      <td>
        <Form.Check
          aria-label="option 1"
          onChange={(e) => {
            handleCheckboxChange(e, arr);
          }}
        />
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
        <DeleteModalComponent
          deletedata={handleDeleteClick}
          courseId={arr.courseId}
          val={true}
        />
      </td>
    </tr>
  ));
  return (
    <>
      <TableComponent data={details} fetchdata={fetchData} />
      <DeleteModalComponent
        deletedata={handleMultipleDeleteClick}
        val={false}
      />
    </>
  );
}

export default FetchDataComponent;
