import React, { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
const UserDetails = ({ nextStep, prevStep, handleChange, inputValues }) => {
  const [validated, setValidated] = useState(false);

  const saveAndContinue = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);
    nextStep();
  };

  const back = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <Form noValidate validated={validated}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Fullname</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Fullname"
            name="fullName"
            defaultValue={inputValues.fullName}
            onchange={handleChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            This field is required!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="email"
            name="email"
            placeholder="Email"
            defaultValue={inputValues.email}
            onchange={handleChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            This field is required!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            required
            defaultValue={inputValues.password}
            onchange={handleChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            This field is required!
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Button type="submit" onClick={saveAndContinue}>
        Next
      </Button>
    </Form>
  );
};

export default UserDetails;
