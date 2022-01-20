import React from "react";
import { Button, Card, Row, ListGroupItem } from "react-bootstrap";
const Save = ({ auth, saved }) => {
  if (!auth) {
    return (
      <div>
        <h2>logged بلاش نهكرك</h2>
      </div>
    );
  }
  // const data = localStorage.getItem("saved");
  // console.log(data);
  return (
    <div>
      <Row>
        {saved &&
          saved.map((luxuries) => (
            <Card style={{ width: "18rem" }}>
              <co1>
                <Card.Img
                  variant="top"
                  src={luxuries.image}
                  width={"100px"}
                  height={"180px"}
                />
                <Card.Body>
                  <Card.Title>{luxuries.category}</Card.Title>
                  <Card.Text>{luxuries.title}</Card.Text>
                  <ListGroupItem>{luxuries.price}</ListGroupItem>
                </Card.Body>
              </co1>
            </Card>
          ))}
      </Row>
    </div>
  );
};
export default Save;
{
  /* <div>
        <Card style={{ width: "18rem" }}>
          <co1>
            <Card.Img
              variant="top"
              src={luxuries.image}
              width={"100px"}
              height={"180px"}
            />
            <Card.Body>
              <Card.Title>{luxuries.category}</Card.Title>
              <Card.Text>{luxuries.title}</Card.Text>
              <ListGroupItem>{luxuries.price}</ListGroupItem>
            </Card.Body>
          </co1>
        </Card>
</div>       */
}
