import React from "react";
import VitwitLogoLight from "../assets/vitwit-logo-light.png";
import LinkedInLogo from "../assets/social-icons/linkedin.png";
import GithubLogo from "../assets/social-icons/github.png";
import TwitterLogo from "../assets/social-icons/twitter.png";
import YoutubeLogo from "../assets/social-icons/youtube.png";
import GmailLogo from "../assets/social-icons/gmail.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <img src={VitwitLogoLight} alt="" />
      </div>
      <div>
        <div className="flex justify-between">
          <SocialIcon image={LinkedInLogo} />
          <SocialIcon image={GithubLogo} />
          <SocialIcon image={TwitterLogo} />
          <SocialIcon image={YoutubeLogo} />
          <SocialIcon image={GmailLogo} />
        </div>
        <div className="footer__terms">Terms and Services | Privacy&nbsp;policy</div>
        <div className="footer__copyright">
          @ 2023 Vitwit. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;

const SocialIcon = ({ image, link="https://www.google.com" }) => {
  return (
    <div className="footer__socials flex-center">
      <Link to={link} target="_blank">
        <img className="footer__socials__icon socials__icon" src={image} alt="" />
      </Link>
    </div>
  );
};
