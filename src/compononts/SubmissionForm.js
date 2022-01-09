import React from "react";
import {
  Button,
  Row,
  InputGroup,
  Col,
  Form,
  FormControl,
} from "react-bootstrap";

const SubmissionForm = () => {
  return (
    <div>
      <Form>
        <Row>
          <Col>
            <Form.Control placeholder="اسمك يا كبير" />
          </Col>
          <Col>
            <Form.Control placeholder="الرسالة" />
          </Col>
        </Row>
        <Button variant="primary">ابعت</Button>{" "}
      </Form>
    </div>
  );
};

export default SubmissionForm;
