import React, { useState } from "react";
import { Button, Card, Collapse } from "react-bootstrap";
import SubmissionForm from "./SubmissionForm";
import "../App.css";

const About = ({ auth }) => {
  const [open, setOpen] = useState(false);
  if (!auth) {
    return (
      <div>
        <h2>logged بلاش نهكرك</h2>
      </div>
    );
  }
  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="hacop"
        aria-expanded={open}
      >
        Hassan Jouda
      </Button>
      <div style={{ minHeight: "150px" }}>
        <Collapse in={open} dimension="width">
          <div id="hacop">
            <Card body style={{ width: "400px" }}>
              هكر اخلاقي حافظ للفران ولسنة لذا هو اخلاقي{" "}
            </Card>
          </div>
        </Collapse>

        <Collapse in={open} dimension="width">
          <div id="hacop">
            <Card body style={{ width: "400px" }}>
              وحش في زمن قلة به الوحوش{" "}
            </Card>
          </div>
        </Collapse>
      </div>

      <div>
        <Collapse in={open} dimension="width">
          <div id="hacop">
            <Card body style={{ width: "400px" }}>
              طالب كود
            </Card>
          </div>
        </Collapse>

        <Collapse in={open} dimension="width">
          <div id="hacop">
            <Card body style={{ width: "400px" }}>
              facebook:Hassan Mahamed Jouda instagram:Hassan Mahamed Jouda
            </Card>
          </div>
        </Collapse>

        <div>
          <h1> مش عارف شو اكتب بس المهم المعنى</h1>
        </div>
        <h5>ابعت رساالة</h5>
        <SubmissionForm />
      </div>
    </>
  );
};
export default About;
