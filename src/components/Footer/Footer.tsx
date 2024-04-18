
import LogoComponent from "components/LogoComponent"
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  FooterContainer,
  LogoAndContacts,
  TermsAndConditions,
  SocialIcons,
  SocialIconLink
} from "./styles";

function Footer() {
  return (
    <FooterContainer>
      <LogoAndContacts>
        <LogoComponent src="/src/assets/GermanyMain2.png" alt="GermanMainLogo" />
        <p>Contact Info от Мишы</p>
      </LogoAndContacts>
      <TermsAndConditions>
        <a href="#">Terms of Use</a>
        <a href="#">Privacy Policy</a>
      </TermsAndConditions>
      <SocialIcons>
      <SocialIconLink href="https://www.facebook.com/">
        <FontAwesomeIcon icon={faFacebookF} />
      </SocialIconLink>
      
      {/* Иконка YouTube */}
      <SocialIconLink href="https://www.youtube.com/">
        <FontAwesomeIcon icon={faYoutube} />
      </SocialIconLink>

      {/* Иконка Instagram */}
      <SocialIconLink href="https://www.instagram.com/">
        <FontAwesomeIcon icon={faInstagram} />
      </SocialIconLink>
      </SocialIcons>
    </FooterContainer>
  );
}

export default Footer;

