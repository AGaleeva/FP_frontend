
import styled from "styled-components"
import { colors } from "styles/colors"

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #30363d;
  padding: 0 15px;
  padding: 20px;
  width: 100%;
  max-width: 1370px;
  margin: 0 auto;
`

export const LogoAndContacts = styled.div`
font-size: 14px;
  color: ${colors.white};
  text-decoration: none;
  display: flex;
  align-items: center;
`

export const TermsAndConditions = styled.div`
font-size: 14px;
  color: ${colors.white};
  text-decoration: none;
  display: flex;
  align-items: center;
`

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
`

export const SocialIconLink = styled.a`
font-size: 14px;
  color: ${colors.white};
  text-decoration: none;
  margin-right: 10px;
  color: #999;
  text-decoration: none;

  &:last-child {
    margin-right: 0;
  }
`
