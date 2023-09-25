import React from "react";
import Navbar from "../components/Navbar";
import ContactImage from "../assets/contact-image.png";
import LinkedInLogo from "../assets/social-icons/linkedin.png";
import GithubLogo from "../assets/social-icons/github.png";
import TwitterLogo from "../assets/social-icons/twitter.png";
import YoutubeLogo from "../assets/social-icons/youtube.png";
import GmailLogo from "../assets/social-icons/gmail.png";
import { Link } from "react-router-dom";

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
            <p className="mb-1 mobile:mb-4">contact@vitwit.com</p>
            <p>careers@vitwit.com</p>
          </div>
          <div className="contact__page__details__info">
            <h3>Community</h3>
            <div>
              <div className="flex gap-[15px]">
                <SocialIcon image={LinkedInLogo} />
                <SocialIcon image={GithubLogo} />
                <SocialIcon image={TwitterLogo} />
                <SocialIcon image={YoutubeLogo} />
                <SocialIcon image={GmailLogo} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

const SocialIcon = ({ image, link="https://www.google.com" }) => {
  return (
    <div className="footer__socials contact__socials flex-center">
      <Link to={link} target="_blank">
        <img className="footer__socials__icon contact__socials__icon" src={image} alt="" />
      </Link>
    </div>
  );
};
