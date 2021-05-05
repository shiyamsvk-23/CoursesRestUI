import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Col, Button } from "react-bootstrap";
import NewComp from "./NewComp";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

function DynamicFromApp(props) {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Number of tickets is required"),
  });

  const dateValue = () => {
    let date = new Date();
    let mm = date.getMonth() + 1;
    let dd = date.getDate();
    if (dd < 10) {
      dd = "0" + dd;
    }

    if (mm < 10) {
      mm = "0" + mm;
    }
    return `${dd}/${mm}/${date.getFullYear()}`;
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });
  const [inputList, setInputList] = useState(() => {
    
    let newDate = dateValue();
   
    return [
      {
        course_Namecourse_Name:"",
        teacher_Name:"",
        class1:"LKG",
        created_date: newDate,
        modified_date: newDate,
        createdby: `System`,
        modifiedby: `System`,
      },
    ];
  });

  const handleInputChange = (e, index) => {
    let { name, value } = e.target;

    const newName = name.substring(0, name.length - 1);
    console.log(
      "Hey it's e. targe = ",
      e.target.value,
      "======",
      name.length,
      "&&&&&&&&&&&&&&&&&",
      newName
    );

    if (newName.localeCompare("dateOfBirth") === 0) {
      const date = value.split("-");
      const newDate = `${date[2]}-${date[1]}-${date[0]}`;
      value = newDate;
    }
    const list = [...inputList];
    list[index][newName] = value;
    setInputList(list);

    console.log("Hey its whole list =", inputList);

    //setInputList(temp);
  };

  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleAddClick = (i) => {
    
    let newDate = dateValue();

    setInputList([
      ...inputList,
      {
        course_Namecourse_Name:"",
        teacher_Name:"",
        class1:"LKG",
        created_date: newDate,
        modified_date: newDate,
        createdby: `System`,
        modifiedby: `System`,
      },
    ]);
  };
  const onSubmitFunction = () => {
    

    async function save() {
      const temp = await NewComp.saveMultipleData(inputList);
      props.fetchdata();
    }
    save();
  };

  // console.log(watch("firstName")); // watch input value by passing the name of it
  return (
    <Form validated>
      {inputList.map((x, i) => {
        return (
          <Fragment key={i}>
            {/* onSubmit={handleSubmit(onSubmit)} */}
            <Form.Group controlId="formGridCourseName">
              <Form.Label>Course Name</Form.Label>
              <Form.Control
                 placeholder="Enter Your Course Name"
                 required
                 {...register("course_Name"+i)}
                onChange={(e) => handleInputChange(e, i)}
              />
              <Form.Control.Feedback type="invalid">
                {console.log("Hey its error", errors.course_Name?.[i].message)}
                {errors.course_Name?.[i].message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formGridTeacherName">
              <Form.Label>Teacher Name</Form.Label>
              <Form.Control
                placeholder="Enter Your Teacher Name"
                required
                {...register("teacher_Name" + i, { required: true })}
                onChange={(e) => handleInputChange(e, i)}
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
                  {...register("class1" + i, { required: true })}
                  onChange={(e) => handleInputChange(e, i)}
                >
                  <option value="LKG">LKG</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  Please select a option
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>

            <>
              {inputList.length !== 1 && (
                <Button variant="danger" onClick={() => handleRemoveClick(i)}>
                  Remove
                </Button>
              )}{" "}
              {inputList.length - 1 === i && (
                <Button variant="success" onClick={() => handleAddClick(i)}>Add</Button>
              )}
            </>
          </Fragment>
        );
      })}{" "}
      <Button variant="primary" type="submit" onClick={onSubmitFunction}>
        Submit All
      </Button>
    </Form>
  );
}

export default DynamicFromApp;
