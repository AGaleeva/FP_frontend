import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { colors } from 'styles/colors';

interface ButtonContainerProps {
  $isGeneralPage?: boolean | undefined;
}
interface BackgroundImageProps {
  $isGeneralPage?: boolean;
}

export const BcgContainer = styled.section`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 15px;
`;

export const BackgroundImageContainer = styled.div`
  position: relative;
  border-radius: 10px;
  border: 2px solid ${colors.baseGrey80};
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  margin-bottom: 20px;
`;
export const BackgroundImage = styled.div`
  width: 75%;
  max-height: 400px;
`;

export const BcgRightToImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 200px;
  left: 990px;
  width: 263px;
  height: 570px;
  background-color: ${colors.white};
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top: 2px solid ${colors.baseGrey80};
  border-right: 2px solid ${colors.baseGrey80};
  border-bottom: 2px solid ${colors.baseGrey80};
  overflow: hidden;
  z-index: 10;
`;

export const RightToImgHeaderContainer = styled.div`
  border-bottom: 2px solid ${colors.baseGray30};
`;

export const RightTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid ${colors.baseGray30};
`;

export const RightLink = styled.a`
  flex: 1;
  font-size: 13px;
  font-weight: bold;
  color: ${colors.baseGrey80};
  border-bottom: 2px solid ${colors.baseGray30};
  display: block;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  &:hover {
    background-color: ${colors.baseGray30};
  }
  &:nth-child(2){
    color: ${colors.greenGastro};
  }
  &:nth-child(3){
    color: ${colors.titleCars};
  }
  &:nth-child(4){
    color: ${colors.lilacMovie};
  }
  &:nth-child(5){
    color: ${colors.lightCarrot};
  }
  &:nth-child(5){
    color: ${colors.greenTechno};
  }
`;


export const ButtonContainer = styled.div<ButtonContainerProps>`
  position: absolute;  
  width: fit-content;
  top: ${({ $isGeneralPage }) => $isGeneralPage ? '280px' : '250px'}; 
  left: ${({ $isGeneralPage }) => $isGeneralPage ? '80px' : '580px'}; 
  height: 50px; 
  z-index: 10;
`;

export const MainTitle = styled.h1`
  position: absolute;
  top: 80px;
  left: 80px;
  width: 600px;
  color: ${colors.white};
  font-family: 'Montserrat';
  font-weight: bold;
  font-size: 40px;
`;

export const PageTitle = styled.h2`
  position: absolute;
  /* top: 385px; */
  bottom: 100px;
  left: 150px;
  width: 450px;
  color: ${colors.white};
  font-family: 'Montserrat';
  font-weight: bold;
  font-size: 40px;
`;

export const UpperGrayBackground = styled.div`
  background-color: ${colors.baseGrey80};
  width: 100%;
`;

export const UpperNewsContainer = styled.div`  
  background-color: ${colors.baseGrey75};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const NewsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
  border-right: 2px solid ${colors.baseGray50};
  width: 25%;
  &:last-child{
    border-right: none;
  }   
`;

export const NewsTitleContainer = styled.h4`
  color: ${colors.white};
  font-family: 'Montserrat';
  font-weight: bold;
  font-size: 14px;
  line-height: 1.5rem;
  padding-right: 15px;
`;
export const RightWraper = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-direction: column;    
`;

export const RightWraper1 = styled.div`
  padding: 20px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  font-size: 30px;
  font-weight: 700;
  background-color: ${colors.baseGray50};
`;

export const NewsMainContainer = styled.div`
  width: 100%;
  min-height: 150px;
`;

export const ImageWrap = styled.div`
  max-width: 60px;
  flex: 0 0 auto;
`;
export const DropdownMenuContainer = styled.div`
  position: absolute;
  padding: 0px 20px;
  top: -37px;
  left: 180px;
  width: 180px;
  height: 234px;
  border-radius: 10px;
  z-index: 20;
  border: 2px solid ${colors.baseGray50};
  background-color: ${colors.white};
  &::after{
    content: '';
    position: absolute;
    top: 50px;
    left: -12px;
    height: 20px;
    width: 20px;
    border-bottom: 2px solid ${colors.baseGray50};
    border-left: 2px solid ${colors.baseGray50};
    background-color:  ${colors.white};
    transform: rotate(45deg);    
  }
`;

export const DropdownMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  align-items: center;
`;

export const DropdownMenuLink = styled(NavLink)`  
  font-size: 13px;
  padding: 15px;
  display: block;
  text-align: center;
  color: ${colors.baseGrey80};
  text-decoration: none;
  cursor: pointer;    
  &:hover {
    color: ${colors.white}; 
  }
  &:focus {
    color: ${colors.white}; 
  }
  &:active {
    color: ${colors.white}; 
  }
`;

export const DropdownMenuItem = styled.li`
  width: 100%;
  position: relative; 

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%; 
    border-bottom: 1px solid ${colors.baseGray30};
  }
 
  &:last-child:after {
    border-bottom: none;
  }

  /* padding: 15px 20px;
  border-bottom: 1px solid ${colors.baseGray30};
  &:last-child {
    border-bottom: none;
  }  */
  &:hover {
    background-color: ${colors.baseGray30}; 
  }
  &:focus {
    background-color: ${colors.baseGray30}; 
  }
  &:active {
    background-color: ${colors.baseGray30}; 
  }
   &:hover ${DropdownMenuLink}, &:focus ${DropdownMenuLink}, &:active ${DropdownMenuLink} {
    color: ${colors.white}; 
  }
`;