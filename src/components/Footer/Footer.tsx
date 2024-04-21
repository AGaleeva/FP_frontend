import { useNavigate } from "react-router-dom"
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
import germanyMain2 from "../../assets/GermanyMain2.png"
import {} from "../../assets/"
import TermsOfUsage from "./TermsOfUsage"

interface TermsLinksProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>   
  children: React.ReactNode 
}  

function Footer( TermsOfUsage: any ) {
  const navigate = useNavigate()
  const handleTermsLinkClick: React.MouseEventHandler<
    HTMLButtonElement
  > = event => {
    navigate("/termsOfUsage")
  }

  const handleClick = (event?: any) => {
    handleTermsLinkClick(event)
  }

  return (
    <FooterMain>
      <FooterMainContainer>
        <FooterRow>
          <FooterContainerOne>
            <img src={germanyMain2} alt="GermanMainLogo" />
          </FooterContainerOne>

          <FooterContainerTwo>
            <TermsLinks onClick={handleClick} target="_blank">
              {TermsOfUsage}
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
