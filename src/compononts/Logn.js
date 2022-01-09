import "../App.css";
import { Card, Form, Col, Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const Logn = ({ setAuth }) => {
  const logbtn = () => {
    localStorage.setItem("auth", "true");
    setAuth("true");
    localStorage.setItem("Name", name);
    localStorage.setItem("Password", pwd);
    localStorage.setItem("Email", Email);
  };

  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");
  const [Email, setEmail] = useState("");

  return (
    <div>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email*</Form.Label>
            <Form.Control
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="hacker@gmail.com"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password*</Form.Label>
            <Form.Control
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              type="password"
              placeholder="hacker"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>اسمك*</Form.Label>
            <Form.Control
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="email"
              placeholder="Name"
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>عنوانك عشان نخطفك</Form.Label>
          <Form.Control placeholder="شارع البحر" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>رقمك</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>المحافظة</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>رفح</option>
              <option> خانيونس</option>
              <option> النصيرات</option>
              <option> غزة</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="اتاكد يا كبير" />
        </Form.Group>
        <Link to="/">
          <Button onClick={logbtn} variant="primary" type="submit">
            سجل متخافش
          </Button>
        </Link>
      </Form>
    </div>
  );
};
export default Logn;
