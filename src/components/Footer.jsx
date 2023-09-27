import React from "react";
import VitwitLogoLight from "../assets/vitwit-logo-light.png";
import LinkedInLogo from "../assets/social-icons/linkedin.png";
import GithubLogo from "../assets/social-icons/github.png";
import TwitterLogo from "../assets/social-icons/twitter.png";
import YoutubeLogo from "../assets/social-icons/youtube.png";
import GmailLogo from "../assets/social-icons/gmail.png";
import { Link } from "react-router-dom";
import { socials } from "../utils/utils";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <img className="footer__logo" src={VitwitLogoLight} alt="" />
      </div>
      <div className="mt-6 my-4">
        <div className="flex justify-between gap-3">
          <SocialIcon image={GithubLogo} link={socials[0].link} />
          <SocialIcon image={TwitterLogo} link={socials[1].link} />
          <SocialIcon image={LinkedInLogo} link={socials[2].link} />
          <SocialIcon image={YoutubeLogo} link={socials[3].link} />
          <SocialIcon image={GmailLogo} link={socials[4].link} />
        </div>
        <div className="footer__copyright">
          @ 2023 Vitwit. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;

const SocialIcon = ({ image, link }) => {
  return (
    <div className="footer__socials flex-center">
      <Link to={link} target="_blank">
        <img
          className="footer__socials__icon socials__icon"
          src={image}
          alt=""
        />
      </Link>
    </div>
  );
};
