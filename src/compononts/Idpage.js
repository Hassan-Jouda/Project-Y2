import React, { useState } from "react";
import "../App.css";
import { Button, Card, CardGroup, Carousel, Figure } from "react-bootstrap";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";

function Idpage({ auth, saved, setSaved }) {
  const historybacke = useNavigate();

  const goback = () => {
    historybacke(-1);
  };
  let luxury = useLocation();
  console.log(luxury);
  const { title, rating, price, image, description } = luxury.state.luxuries;
  console.log({
    title,
    rating,
    price,
    image,
    description,
  });
  const save = () => {
    // add luxury state to the current localStorage state
    let currentState = JSON.parse(localStorage.getItem("saved"));
    setSaved([
      ...saved,
      {
        title,
        rating,
        price,
        image,
        description,
      },
    ]);
    if (currentState) {
      currentState.push({
        title,
        rating,
        price,
        image,
        description,
      });
      localStorage.setItem("saved", JSON.stringify(currentState));
      alert("تم الحفظ");
    } else {
      localStorage.setItem(
        "saved",
        JSON.stringify([
          {
            title,
            rating,
            price,
            image,
            description,
          },
        ])
      );
    }
  };

  if (!auth) {
    return (
      <div>
        <h2>logged بلاش نهكرك</h2>
      </div>
    );
  }
  return (
    <div>
      <Button onClick={goback}>رجعني</Button>

      <Carousel>
        <Carousel.Item>
          <img src={image} />
          <Carousel.Caption>
            <h3 className="title">{title}</h3>
            <p className="title">{description}</p>
            <h3 className="title">{price}</h3>
            {save ? (
              <Button onClick={save}>save</Button>
            ) : (
              <h3> حفظنها قبل هيك خلص</h3>
            )}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default Idpage;
//  <CardGroup>
//       <Card>
//         <Card.Img variant="top" src={image} height="200" />
//         <Card.Body>
//           <Card.Title>{title}</Card.Title>
//           <Card.Text>{description}</Card.Text>
//           <Card.Text>{price}</Card.Text>
//         </Card.Body>
//         <Button onClick={save}>save</Button>
//       </Card>      </CardGroup>
//////////////////////////////////////////////////////
// <Carousel>
//   <Carousel.Item>
//     <img src={image} />
//     <Carousel.Caption>
//       <h3>{title}</h3>
//       <p>{description}</p>
//       <h3>{price}</h3>
//       <Button onClick={save}>save</Button>
//     </Carousel.Caption>
//   </Carousel.Item>
// </Carousel>
//////////////////////////////////
// <Figure>
//   <Figure.Image width={171} height={180} src={image} />
//   <Figure.Caption>{title} </Figure.Caption>
//   <Figure.Caption>{description}</Figure.Caption>
//   <Figure.Caption>{price}</Figure.Caption>
// </Figure>
////////////////////////////////////////////////////
// <Card className="bg-dark text-white">
//   <Card.Img src={image} height="300" />
//   <Card.ImgOverlay>
//     <Card.Title>{title}</Card.Title>
//     <Card.Text>{description}</Card.Text>
//     <Card.Text>{price}</Card.Text>
//     <Button onClick={save}>save</Button>
//   </Card.ImgOverlay>
// </Card>
