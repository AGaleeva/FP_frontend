import React, { useRef, useState } from "react";
import { BcgContainer, BackgroundImageContainer, BackgroundImage, MainTitle, RightWraper, BackgroundImage100, ButtonRead, MyImageComponent, TitleContainerWrapper, PageTitle, RightTitle, RightLink, ButtonContainer } from "./styles";
import DoctorsMenu from "./DoctorsMenu";
import ServicesMenu from "./ServicesMenu";
import type { MainUpperPartProps } from "./types";
import { useNavigate } from "react-router-dom";
import { Menu, MenuItem } from "@mui/material";

function MainMiddlePart({
  bcgImgDescr,
  mainTitle,
  isMainPage,
  isGeneralPage,
}: MainUpperPartProps) {
  const TitleContainer = isMainPage ? MainTitle : PageTitle;
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [isCategoryMenuOpen, setCategoryMenuOpen] = useState(false);
  const [isServicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [isCityMenuOpen, setCityMenuOpen] = useState(false);
  const navigate = useNavigate();
  const anchorRef = useRef<HTMLButtonElement | null>(null);

  const toggleCategoryMenu = () => {
    setCategoryMenuOpen(!isCategoryMenuOpen);
  };

  const toggleServicesMenu = () => {
    setServicesMenuOpen(!isServicesMenuOpen);
  };

  const toggleCityMenu = () => {
    setCityMenuOpen(!isCityMenuOpen);
  };

  const handleCategorySelection = (category: string) => {
    setSelectedCategory(category);
    setCityMenuOpen(true);
    setCategoryMenuOpen(false);
  };

  const handleServiceSelection = (service: string) => {
    setSelectedService(service);
    setCityMenuOpen(true);
    setServicesMenuOpen(false);
  };

  const handleCitySelection = (city: string) => {
    navigate(`/${city}/doctors/${selectedCategory}`);
    console.log(`Перенаправление на врачей/${selectedCategory}/${city}`);
  };

  return (
    <BcgContainer>
      <BackgroundImageContainer>
        {isGeneralPage && (
          <>
            <BackgroundImage>
              <MyImageComponent {...bcgImgDescr} />
              <TitleContainer>{mainTitle}</TitleContainer>
            </BackgroundImage>
            <RightWraper>
              <RightTitle>НАШИ РАЗДЕЛЫ</RightTitle>
              <RightLink
                role="button"
                aria-haspopup="true"
                aria-controls="category-menu"
                ref={anchorRef}
                onClick={toggleCategoryMenu}
              >
                ВРАЧИ
              </RightLink>
              <DoctorsMenu
                anchorRef={anchorRef}
                isCategoryMenuOpen={isCategoryMenuOpen}
                setCategoryMenuOpen={setCategoryMenuOpen}
                handleCategorySelection={handleCategorySelection}
              />
              <RightLink
                role="button"
                aria-haspopup="true"
                aria-controls="services-menu"
                ref={anchorRef}
                onClick={toggleServicesMenu}
              >
                УСЛУГИ
              </RightLink>
              <ServicesMenu
                anchorRef={anchorRef}
                isServicesMenuOpen={isServicesMenuOpen}
                setServicesMenuOpen={setServicesMenuOpen}
                handleServiceSelection={handleServiceSelection}
              />
              <Menu
                id="city-menu"
                anchorEl={anchorRef.current}
                open={isCityMenuOpen}
                onClose={() => setCityMenuOpen(false)}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                anchorReference="anchorEl"
                PaperProps={{
                  style: {
                    width: "23.8%",
                    maxHeight: "none",
                  },
                }}
              >
                <MenuItem onClick={() => handleCitySelection("berlin")}>Берлин</MenuItem>
                <MenuItem onClick={() => handleCitySelection("munich")}>Мюнхен</MenuItem>
                <MenuItem onClick={() => handleCitySelection("frankfurt")}>Франкфурт</MenuItem>
                <MenuItem onClick={() => handleCitySelection("dusseldorf")}>Дюссельдорф</MenuItem>
                <MenuItem onClick={() => handleCitySelection("hamburg")}>Гамбург</MenuItem>
              </Menu>
              <RightLink role="button">ДЕТИ</RightLink>
              <RightLink role="button">МАГАЗИНЫ</RightLink>
              <RightLink role="button">КАФЕ И РЕСТОРАНЫ</RightLink>
              <RightLink role="button">УСЛУГИ</RightLink>
            </RightWraper>
          </>
        )}
        {!isGeneralPage && (
          <BackgroundImage100>
            <MyImageComponent {...bcgImgDescr} />
            <TitleContainerWrapper>
              <TitleContainer>{mainTitle}</TitleContainer>
              <ButtonContainer>
                <ButtonRead variant="contained" disableElevation size="large">
                  Читать
                </ButtonRead>
              </ButtonContainer>
            </TitleContainerWrapper>
          </BackgroundImage100>
        )}
      </BackgroundImageContainer>
      {/* Элемент-якорь для меню категорий */}
      <div id="category-menu-anchor" style={{ display: "none" }} />
      {/* Элемент-якорь для меню услуг */}
      <div id="services-menu-anchor" style={{ display: "none" }} />
      {/* Элемент-якорь для меню городов */}
      <div id="city-menu-anchor" style={{ display: "none" }} />
    </BcgContainer>
  );
}

export default MainMiddlePart;
