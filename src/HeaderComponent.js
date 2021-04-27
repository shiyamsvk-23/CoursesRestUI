import React, { Component } from "react";
import { Button, Navbar, Nav, Form, FormControl } from "react-bootstrap";
import car from './courses.jpg';
//import logo from "./logo.svg";

export class HeaderComponent extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="white">
          <Navbar.Brand href="#home">
            <img
              src={car}
              width="70"
              height="70"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />

          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Courses</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
      </>
    );
  }
}

export default HeaderComponent;