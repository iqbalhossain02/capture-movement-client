import { Carousel } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";

const HeaderSlider = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          style={{ height: "350px" }}
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1572867867026-2165e773671d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>The Artsy Lens</h3>
          <p>The Dark Room Portrait Studio</p>
          <Link to="/service">
            <button className="btn btn-primary">Get All Services</button>
          </Link>{" "}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: "350px" }}
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1554941426-e9604e34bc94?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Bark-tastic Photography</h3>
          <p>Flutter Me Shutters Photography</p>
          <Link to="/service">
            <button className="btn btn-primary">Get All Services</button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: "350px" }}
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1493952113579-dfa2cfd5398b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Natural Photography</h3>
          <p>Choose Your Own Adventure Photography</p>
          <Link to="/service">
            <button className="btn btn-primary">Get All Services</button>
          </Link>{" "}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HeaderSlider;
