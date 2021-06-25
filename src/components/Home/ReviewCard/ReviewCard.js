import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ReviewCard = ({ review }) => {
  const { name, ratting, image, description } = review;

  let images = image;
  if (image === null) {
    images =
      "https://www.flaticon.com/svg/vstatic/svg/3135/3135715.svg?token=exp=1618487109~hmac=d95bdac1cdc2ec42d08eec0c1e24200e";
  }

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section data-aos="flip-up" className="com-md-4 m-auto">
      <div
        class="card text-center m-3 p-3 shadow-lg"
        style={{ width: "16rem", height: "19rem" }}
      >
        <img
          src={images}
          style={{ width: "70px", margin: "auto", borderRadius: "40px" }}
          class="card-img-top"
          alt="Your email has no pictur"
        ></img>
        <div class="card-body">
          <h5 class="card-title">{ratting}</h5>
          <blockquote class="blockquote mb-0">
            <p>{description}</p>
            <footer class="blockquote-footer">{name}</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default ReviewCard;
