import React from "react";
import Card from "react-bootstrap/Card";
import { Carousel, CarouselItem } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import { QUERY_DOGS } from "../utils/queries";
import { useQuery } from "@apollo/client";

function View() {
  const { loading, data } = useQuery(QUERY_DOGS);
  const dog = data?.dogs || {};

  console.log(dog);

  const style = {
    card: {
      width: "250px",
      flex: 1,
      margin: "0 auto",
      height: "500px",
    },
    div: {
      backgroundImage:
        "url(./eberhard-grossgasteiger-xC7Ho08RYF4-unsplash.jpg)",
      backgroundSize: "cover",
      height: "100vh",
      paddingTop: "30px",
    },
    Button: {
      marginLeft: "5px",
      marginRight: "5px",
    },
  };

  const renderCard = (dog) => {
    return (
      <CarouselItem>
        <Card className="card" style={style.card} key={dog.id}>
          <Card.Img variant="top" src="" class="img-responsive center-block" />
          <Card.Body>
            <Card.Title>{dog.name}</Card.Title>

            <Card.Text>{dog.size}</Card.Text>
            <Card.Footer class="text-center">
              {/* <Button
                style={style.Button}
                href={card.deploy}
                variant="outline-dark"
                class="btn btn-primary btn-lg active float-left"
                role="button"
                aria-pressed="true"
                block
              >
                Deploy
              </Button>
              <Button
                style={style.Button}
                variant="outline-dark"
                href={card.github}
                class="btn btn-primary btn-lg active float-right"
                role="button"
                aria-pressed="true"
                block
              >
                Github
              </Button> */}
            </Card.Footer>
          </Card.Body>
        </Card>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only" style={{ color: "white" }}>
            Previous
          </span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only" style={{ color: "white" }}>
            Next
          </span>
        </a>
      </CarouselItem>
    );
  };

  const firstDog = Array.isArray(dog) && dog.length ? dog[2] : {};

  return (
    <div style={style.div}>
      <Carousel
        id="carouselExampleControls"
        class="carousel slide "
        data-ride="carousel"
        interval={null}
      ></Carousel>
      {renderCard(firstDog)}
    </div>
  );
}

export default View;
