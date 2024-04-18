import {
  FooterMain,
  FooterMainContainer,
  FooterRow,
  FooterContainerOne,
  FooterContainerTwo,
  FooterContainerThree,
  ContactInfo,
  TermsLinks,
  SocialIcons,
  Separator,
} from "./styles"
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa"

function Footer() {
  return (
    <FooterMain>
      <FooterMainContainer>
        <FooterRow>
          <FooterContainerOne>
            <img src="/src/assets/GermanyMain2.png" alt="GermanMainLogo" />
          </FooterContainerOne>

          <FooterContainerTwo>
            <TermsLinks href="/src/assets/TermsOfUse.html" target="_blank">
              Условия использования
            </TermsLinks>
          </FooterContainerTwo>

          <FooterContainerThree>
            <SocialIcons href="https://www.facebook.com" target="_blank">
              <FaFacebook />
            </SocialIcons>
            <SocialIcons href="https://www.youtube.com" target="_blank">
              <FaYoutube />
            </SocialIcons>
            <SocialIcons href="https://www.instagram.com" target="_blank">
              <FaInstagram />
            </SocialIcons>
          </FooterContainerThree>
        </FooterRow>

        <Separator />

        <ContactInfo>
          Германия, Берлин, Бранденбургские ворота, Центральный вход © Team 24
        </ContactInfo>
      </FooterMainContainer>
    </FooterMain>
  )
}

export default Footer
