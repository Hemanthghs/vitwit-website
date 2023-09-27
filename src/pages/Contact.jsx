import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ContactImage from "../assets/contact-image.png";
import { Link } from "react-router-dom";
import { LOCATION_LINK, socials } from "../utils/utils";
import { CopyIcon, LocationIcon, TickIcon } from "../assets/Icons";

const Contact = () => {
  const [showMsg, setShowMsg] = useState(false);
  console.log(showMsg);
  function copyToClipBoard() {
    navigator.clipboard.writeText(LOCATION_LINK);
    setShowMsg(true);
    setTimeout(() => setShowMsg(false), [1000]);
  }

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
            <div className="contact__page__details__location ">
              <div
                target="_blank"
                to={LOCATION_LINK}
                className="contact__page__details__location__link tooltip"
              >
                <Link className="flex">
                  <LocationIcon />
                  <span className="mx-1">Google&nbsp;Maps</span>
                </Link>
                <span class="tooltiptext" onClick={() => copyToClipBoard()}>
                  {!showMsg ? <CopyIcon /> : null}
                </span>
                <span>{showMsg ? <TickIcon /> : null}</span>
              </div>
            </div>
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
