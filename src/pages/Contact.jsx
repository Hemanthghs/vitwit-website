import React from "react";
import Navbar from "../components/Navbar";
import ContactImage from "../assets/contact-image.png";
import { Link } from "react-router-dom";
import { socials } from "../utils/utils";

const Contact = () => {
  return (
    <div className="contact">
      <Navbar />
      <div className="contact__page">
        <div className="contact__page__head">
          <h1>Contact Us</h1>
          <img src={ContactImage} alt="" />
        </div>
        <div className="contact__page__details">
          <div className="contact__page__details__info">
            <h3>Address</h3>
            <p>
              Address: Second Floor, Ravi Chambers, Kavuri Hills, Hyderabad,
              Telangana, India 500033.
            </p>
          </div>
          <div className="contact__page__details__info">
            <h3>Email</h3>
            <p className="mb-1 mobile:mb-4">
              <Link to="mailto:contact@vitwit.com" target="_blank">
                contact@vitwit.com
              </Link>
            </p>
            <p>
              <Link to="mailto:careers@vitwit.com" target="_blank">
                careers@vitwit.com
              </Link>
            </p>
          </div>
          <div className="contact__page__details__info">
            <h3>Community</h3>
            <div>
              <div className="flex gap-[15px]">
                {socials.map((item, index) => (
                  <SocialIcon key={index} logo={item.logo} link={item.link} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

const SocialIcon = ({ logo, link = "https://www.google.com" }) => {
  return (
    <div className="contact__socials flex-center">
      <Link to={link} target="_blank">
        <img className="contact__socials__icon" src={logo} alt="" />
      </Link>
    </div>
  );
};
