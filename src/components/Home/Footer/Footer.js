import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="row py-5 footerImg">
      <div className="col-md-4">
        <h4 className="text-center">Captured Moments</h4>
        <p className="ml-4">
          In sit amet venenatis eros. Curabitur sed convallis mauris. Nam eget
          volutpat purus, ut egestas nulla. Nunc scelerisque eros vitae lacus
          dictum dictum. Donec luctus ligula lectus, eu auctor sem sollicitudin
          sit amet.
        </p>
      </div>
      
      <div className="col-md-4 m-auto">
        <img
          className=" payCard img-fluid"
          src="https://web.programming-hero.com/static/media/ssl-commerce.1d268dce.png"
          alt=""
        />
      </div>
      <div className="col-md-4 text-center">
        <h5>Contract</h5>

        <address>
          <FontAwesomeIcon icon={faEnvelope} /> office : webmaster@example.com
          <br />
          <FontAwesomeIcon icon={faPhone} /> Phone : 01817510325(10am to 10pm)
          <br />
          Box 564, Disneyland
          <br />
          USA
        </address>

        <strong>Follow Us</strong> <br />
        <div>
          <FontAwesomeIcon className="icon" icon={faTwitter} />{" "}
          <FontAwesomeIcon className="icon" icon={faFacebookF} />{" "}
          <FontAwesomeIcon className="icon" icon={faInstagram} />{" "}
          <FontAwesomeIcon className="icon" icon={faGooglePlusG} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
