import React, { useState } from "react";
import "../App.css";
import { Button, Card, CardGroup } from "react-bootstrap";
import { Link, useParams, useLocation } from "react-router-dom";

function Idpage({ auth }) {
  let test = useLocation();
  console.log(test.state);

  const save = () => {
    localStorage.setItem("image", imge);
    localStorage.setItem("category", category);
    localStorage.setItem("description", description);
  };

  const [imge, setimge] = useState("");
  const [category, setcategory] = useState("");
  const [description, setdescription] = useState("");

  if (!auth) {
    return (
      <div>
        <h2>logged بلاش نهكرك</h2>
      </div>
    );
  }
  return (
    <div>
      <CardGroup>
        <Card>
          <Card.Img
            variant="top"
            value={imge}
            onChange={(e) => setimge(e.target.value)}
            src={test.state.test.image}
          />
          <Card.Body>
            <Card.Title
              value={category}
              onChange={(e) => setcategory(e.target.value)}
            >
              {test.state.test.category}
            </Card.Title>
            <Card.Text
              value={description}
              onChange={(e) => setdescription(e.target.value)}
            >
              {test.state.test.description}
            </Card.Text>
          </Card.Body>
          <Button onClick={save}>save</Button>
        </Card>
      </CardGroup>
    </div>
  );
}
export default Idpage;
