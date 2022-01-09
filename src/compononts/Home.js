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
  // const [Search, setSearch] = useState("");
  // const [Filteredluxuries, setFilteredluxuries] = useState(setFilteredluxuries);

  // const filterluxuries = (e) => {
  //   setSearch(e.target.value);

  //   const filteredluxuries = luxuries.filter((luxuries) => {
  //     const luxuriesName = luxuries.name

  //       .toLowerCase()
  //       .includes(e.target.value.toLowerCase());
  //     const luxuriesState = luxuries.state_province
  //       .toLowerCase()
  //       .includes(e.target.value.toLowerCase());

  //     return luxuriesName ? luxuriesName : luxuriesState;
  //   });
  //   setFilteredluxuries(filteredluxuries);
  // };
  ///////////////////////////////////
  // const [search, setsearch] = useState("");
  // const [Filterd, setFilterd] = useState(setFilterd);

  // const search1 = (e) => {
  //   const filtered = luxuries.filter((luxuries) => {
  //     return luxuries.title
  //       .toLowerCase()
  //       .includes(e.target.value.toLowerCase());
  //   });
  //   setFilterd(filtered);
  // };

  return (
    <div>
      <Form className="d-flex">
        <FormControl
          // onChange={search1}
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
      <Row>
        {luxuries.map((luxuries) => (
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
                {/* <Link to={`/Idpage/${test.id}`} state={{ luxuries }}> */}
                <Button variant="primary">More</Button>
                {/* </Link> */}
              </Card.Body>
            </co1>
          </Card>
        ))}
      </Row>
    </div>
  );
};
export default Home;
