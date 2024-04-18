import styled from "styled-components"
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa"

export const FooterMain = styled.footer`
  width: 100%;
  background-color: #30363d;
  padding: 20px 0;
  color: #ffffff;
  max-width: 1370px;
  margin: 0 auto;
  padding: 20px;
`

export const FooterMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 15px;
`

export const FooterRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const FooterContainerOne = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const ContactInfo = styled.p`
  text-align: center;
`

export const FooterContainerTwo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const TermsLinks = styled.a`
  color: #ffffff;
  transition: color 0.3s ease;

  &:hover {
    color: #bbbbbb;
  }
`

export const FooterContainerThree = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Separator = styled.hr`
  width: 100%;
  border: 1px solid #ffffff;
  margin: 20px 0;
`

export const SocialIcons = styled.a`
  color: #ffffff;
  margin: 0 10px;
  transition: color 0.3s ease;
  font-size: 34px;

  &:hover {
    color: #bbbbbb;
  }
`

export const FacebookIcon = styled(FaFacebook)``

export const YoutubeIcon = styled(FaYoutube)``

export const InstagramIcon = styled(FaInstagram)``
