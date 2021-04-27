import React from "react";
import { useForm } from "react-hook-form";
import { Form, Col, Button } from "react-bootstrap";
import NewComp from "./NewComp";

function FromApp(props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => {

    let date = new Date();
    let mm = date.getMonth() + 1;
    let dd = date.getDate();
    if (dd < 10) {
      dd = "0" + dd;
    }

    if (mm < 10) {
      mm = "0" + mm;
    }
    let newDate = `${dd}/${mm}/${date.getFullYear()}`;
    data.created_date = newDate;
    data.modified_date = newDate;
    data.createdby = `System`;
    data.modifiedby = `System`;
    console.log(data);
    console.log(date, "Hei  new date", newDate);

    async function save() {
      const temp = await NewComp.saveData(data);
      props.fetchdata();
    }
    save();
  };

   

  console.log(watch("course_Name"));

  return (
    <Form validated onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId="formGridCourseName">
        <Form.Label>Course Name</Form.Label>
        <Form.Control
          placeholder="Enter Your Course Name"
          required
          {...register("course_Name")}
        />
        <Form.Control.Feedback type="invalid">
          Please enter your Course Name
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formGridTeacherName">
        <Form.Label>Teacher Name</Form.Label>
        <Form.Control
          placeholder="Enter Your Teacher Name"
          required
          {...register("teacher_Name", { required: true })}
        />
        <Form.Control.Feedback type="invalid">
          Please enter your Teacher Name
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Row>

        <Form.Group as={Col} controlId="formGridCourseClass">
          <Form.Label>Class</Form.Label>
          <Form.Control
            as="select"
            required
            {...register("class1", { required: true })}
          >
            <option value="LKG">LKG</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Control>
          <Form.Control.Feedback type="invalid">
            Please select a option
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Button variant="warning" id="addBtn" >ADD</Button>{"   "}
      <Button variant="success" type="submit" >
        Submit
      </Button>
    </Form>
  );
}

export default FromApp;