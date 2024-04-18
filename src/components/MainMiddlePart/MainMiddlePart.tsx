import React, { useRef, useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

import {
  BcgContainer,
  RightTitle,
  BackgroundImageContainer,
  BackgroundImage,
  MainTitle,
  RightLink,
  ButtonContainer,
  PageTitle,
  RightWraper,
  BackgroundImage100,
  ButtonRead,
  MyImageComponent,
  TitleContainerWrapper,
} from "./styles";

import type { MainUpperPartProps } from "./types";
import { useNavigate } from "react-router-dom";

function MainMiddlePart({
  bcgImgDescr,
  mainTitle,
  isMainPage,
  isGeneralPage,
}: MainUpperPartProps) {
  const TitleContainer = isMainPage ? MainTitle : PageTitle;
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isCategoryMenuOpen, setCategoryMenuOpen] = useState(false);
  const [isCityMenuOpen, setCityMenuOpen] = useState(false);
  const navigate = useNavigate();
  const anchorRef = useRef<HTMLButtonElement | null>(null);

  const toggleCategoryMenu = () => {
    setCategoryMenuOpen(!isCategoryMenuOpen);
  };

  const toggleCityMenu = () => {
    setCityMenuOpen(!isCityMenuOpen);
  };

  const handleCategorySelection = (category: string) => {
    setSelectedCategory(category);
    setCityMenuOpen(true);
    setCategoryMenuOpen(false); // Закрываем меню категорий
  };

  const handleCitySelection = (city: string) => {
    // Редирект на другую страницу с учетом выбранной категории и города
    navigate(`/${city}/doctors/${selectedCategory}`);
    console.log(`Redirect to doctors/${selectedCategory}/${city}`);
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
              {/* <RightLink role="button" onClick={toggleCategoryMenu}>
                ВРАЧИ
              </RightLink> */}
              <Button
                role="button"
                aria-haspopup="true"
                aria-controls="category-menu"
                ref={anchorRef}
                onClick={toggleCategoryMenu}
              >
                ВРАЧИ
              </Button>
              <Menu
                id="category-menu"
                anchorEl={anchorRef.current}
                open={isCategoryMenuOpen}
                onClose={() => setCategoryMenuOpen(false)}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >                <MenuItem onClick={() => handleCategorySelection("physicians")}>Терапевты</MenuItem>
                <MenuItem onClick={() => handleCategorySelection("pediatrists")}>Педиатры</MenuItem>
                <MenuItem onClick={() => handleCategorySelection("stomatologists")}>Стоматологи</MenuItem>
                <MenuItem onClick={() => handleCategorySelection("cardiologists")}>Кардиологи</MenuItem>
                <MenuItem onClick={() => handleCategorySelection("orthopedists")}>Ортопеды</MenuItem>
                <MenuItem onClick={() => handleCategorySelection("dermatologists")}>Дерматологи</MenuItem>

                {/* Добавьте остальные категории */}
              </Menu>
              <Menu
                id="city-menu"
                anchorEl={document.getElementById("city-menu-anchor")}
                open={isCityMenuOpen}
                onClose={() => setCityMenuOpen(false)}
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
      {/* Элемент-якорь для меню городов */}
      <div id="city-menu-anchor" style={{ display: "none" }} />
    </BcgContainer>
  );
}

export default MainMiddlePart;
