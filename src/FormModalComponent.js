import React from "react";
import { Modal, Button } from "react-bootstrap";
import FromApp from "./FormComponent";
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";

function ModalApp(props) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)} val={false}>
        Add New Course
      </Button>{" "}
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        fetchdata={props.fetchdata}
      />
    </>
  );
}

export default ModalApp;

