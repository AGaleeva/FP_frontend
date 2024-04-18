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
            <SocialIcons href="#">
              <FaFacebook />
            </SocialIcons>
            <SocialIcons href="#">
              <FaYoutube />
            </SocialIcons>
            <SocialIcons href="#">
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
