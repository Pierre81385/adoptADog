import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { Carousel, CarouselItem } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Redirect, useParams } from "react-router-dom";

import { QUERY_DOGS } from "../utils/queries";
import { useMutation, useQuery } from "@apollo/client";
import { LIKE_DOG } from "../utils/mutation";

function View() {
  const { loading, data } = useQuery(QUERY_DOGS);
  const dog = data?.dogs || {};

  const style = {
    card: {
      width: "250px",
      flex: 1,
      margin: "0 auto",
      height: "400px",
    },
    div: {
      // backgroundImage:
      //   "url(./eberhard-grossgasteiger-xC7Ho08RYF4-unsplash.jpg)",
      // backgroundSize: "cover",
      height: "100vh",
      paddingTop: "30px",
    },
    Button: {
      marginLeft: "5px",
      marginRight: "5px",
    },
  };

  const renderCard = (oneDog) => {
    return (
      <CarouselItem>
        <Card className="card" style={style.card} key={oneDog.id}>
          <Card.Img
            variant="top"
            src={oneDog.image}
            class="img-responsive center-block"
          />
          <Card.Body>
            <Card.Title>{oneDog.name}</Card.Title>

            <Card.Text>{oneDog.size}</Card.Text>
            <div>
              {oneDog.adopted === true ? (
                <>
                  <Card.Text>ADOPTED</Card.Text>
                </>
              ) : (
                <>
                  <Card.Text>AVAILIBLE</Card.Text>
                </>
              )}
            </div>
            <Card.Footer class="text-center">
              <Button
                style={style.Button}
                href=""
                name="like"
                variant="outline-dark"
                class="btn btn-primary btn-lg active float-left"
                role="button"
                aria-pressed="true"
                block
                onClick={handleLikeClick}
              >
                LIKE
              </Button>
              <Button
                style={style.Button}
                variant="outline-dark"
                href=""
                name="adopt"
                class="btn btn-primary btn-lg active float-right"
                role="button"
                aria-pressed="true"
                block
                onClick={handleAdoptClick}
              >
                ADOPT
              </Button>
            </Card.Footer>
          </Card.Body>
        </Card>
      </CarouselItem>
    );
  };

  function handleLikeClick(e) {
    e.preventDefault();
    console.log("The like button was clicked.");
  }

  function handleAdoptClick(e) {
    e.preventDefault();
    console.log("The adopt button was clicked.");
  }

  const dogArray = [];

  for (var i = 0; i < dog.length; i++) {
    const aDog = Array.isArray(dog) && dog.length ? dog[i] : {};

    dogArray.push(aDog);
  }

  console.log(dogArray);

  return (
    <div style={style.div}>
      <Carousel
        id="carouselExampleControls"
        className="carousel carousel-dark slide "
        data-ride="carousel"
        interval={null}
      >
        {dogArray.map(renderCard)}
      </Carousel>
    </div>
  );
}

export default View;
