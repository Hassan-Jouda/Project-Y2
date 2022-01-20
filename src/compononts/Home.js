import {
  Card,
  Form,
  FormControl,
  Button,
  Row,
  ListGroupItem,
} from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import luxuries from "../luxuries";
import React, { useState } from "react";

const Home = ({ test }) => {
  const [searchValue, setSearchValue] = useState("");
  const [filter, setFilter] = useState(luxuries);
  // search by name
  const search = (e) => {
    setSearchValue(e.target.value);
    const filtered = luxuries.filter((item) =>
      item.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilter(filtered);
  };
  return (
    <div>
      <Form className="d-flex">
        <FormControl
          onChange={search}
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
      <Row>
        {filter.map((luxuries) => (
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
                <Link to={`/Idpage/${luxuries.id}`} state={{ luxuries }}>
                  <Button variant="primary">More</Button>
                </Link>
              </Card.Body>
            </co1>
          </Card>
        ))}
      </Row>
    </div>
  );
};
export default Home;
