import React from "react";
import Card from "react-bootstrap/Card";
import { Carousel, CarouselItem } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function Portfolio() {
  const projectInfo = [
    {
      id: 0,
      image: "./Animation.gif",
      title: "BeerMe",
      desc: "An app that suggests beers to the user, and provides random translations to order it in different languages.",
      deploy: "https://tjcourey.github.io/beerMe-international/",
      github: "https://github.com/TJCourey/beerMe-international",
    },
    {
      id: 1,
      image: "./FavoriteRecipes.png",
      title: "Favorite Recipes",
      desc: "A blog style app that allows users to post and comment on favorite recipes.",
      deploy: "https://murmuring-river-43433.herokuapp.com/",
      github: "https://github.com/JaredWilliam97/Favorite-Recipes",
    },
    {
      id: 2,
      image: "./Weather Dashboard.png",
      title: "Weather Dashboard",
      desc: "An app to find the weather forecast in cities around the world.",
      deploy: "https://pierre81385.github.io/weatherDashboard-HW6/",
      github: "https://github.com/Pierre81385/weatherDashboard-HW6",
    },
    {
      id: 3,
      image: "./employeeTracker.png",
      title: "Employee Tracker",
      desc: "A CLI employee management system.",
      deploy:
        "https://drive.google.com/drive/folders/10dWx594w9Lh1O3kSohOeJPt3f3X_Ur9P?usp=sharing",
      github: "https://github.com/Pierre81385/employeeTracker",
    },
    {
      id: 4,
      image: "./fitnessTracker.png",
      title: "Fitness Tracker",
      desc: "A application to help with fitness goals and exercise tracking",
      deploy: "https://lit-everglades-43357.herokuapp.com/",
      github: "https://github.com/Pierre81385/fitnesTracker",
    },
    {
      id: 5,
      image: "./budgetTracker.png",
      title: "Budget Tracker",
      desc: "A budgeting tool that has both online and offline functionality",
      deploy: "https://cryptic-refuge-05653.herokuapp.com/ ",
      github: "https://github.com/Pierre81385/progressiveBudget",
    },
  ];

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

  const renderCard = (card) => {
    return (
      <CarouselItem>
        <Card className="card" style={style.card} key={card.id}>
          <Card.Img
            variant="top"
            src={card.image}
            class="img-responsive center-block"
          />
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>

            <Card.Text>{card.desc}</Card.Text>
            <Card.Footer class="text-center">
              <Button
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
              </Button>
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

  return (
    <div style={style.div}>
      <Carousel
        id="carouselExampleControls"
        class="carousel slide "
        data-ride="carousel"
        interval={null}
      >
        {projectInfo.map(renderCard)}
      </Carousel>
    </div>
  );
}

export default Portfolio;
