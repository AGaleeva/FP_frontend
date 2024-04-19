// MainMiddlePart.tsx
import React, { useRef, useState } from "react";
import { BcgContainer, BackgroundImageContainer, BackgroundImage, MainTitle, RightWraper, BackgroundImage100, ButtonRead, MyImageComponent, TitleContainerWrapper, PageTitle, RightTitle, RightLink, ButtonContainer } from "./styles";
import DoctorsMenu from "./DoctorsMenu";
import ServicesMenu from "./ServicesMenu";
import type { MainUpperPartProps } from "./types";
import { useNavigate } from "react-router-dom";

function MainMiddlePart({
  bcgImgDescr,
  mainTitle,
  isMainPage,
  isGeneralPage,
}: MainUpperPartProps) {
  const TitleContainer = isMainPage ? MainTitle : PageTitle;
  const [selectedDoctor, setSelectedDoctor] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [isCategoryMenuOpen, setCategoryMenuOpen] = useState(false);
  const [isServicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [isCityMenuOpen, setCityMenuOpen] = useState(false);
  const navigate = useNavigate();
  const doctorsMenuAnchorRef = useRef<HTMLButtonElement | null>(null); // Реф для меню врачей
  const servicesMenuAnchorRef = useRef<HTMLButtonElement | null>(null); // Реф для меню услуг

  const toggleCategoryMenu = () => {
    setCategoryMenuOpen(!isCategoryMenuOpen);
  };

  const toggleServicesMenu = () => {
    setServicesMenuOpen(!isServicesMenuOpen);
  };

  const toggleCityMenu = () => {
    setCityMenuOpen(!isCityMenuOpen);
  };

  const handleDoctorSelection = (category: string) => {
    setSelectedDoctor(category);
    setCityMenuOpen(true);
    setCategoryMenuOpen(false);
  };

  const handleServiceSelection = (service: string) => {
    setSelectedService(service);
    setCityMenuOpen(true);
    setServicesMenuOpen(false);
  };

  const handleCitySelection = (city: string) => {
    navigate(`/${city}/doctors/${selectedDoctor}`);
    console.log(`Перенаправление на врачей/${selectedDoctor}/${city}`);
  };

  const handleCitySelectionService = (city: string) => {
    navigate(`/${city}/services/${selectedService}`);
    console.log(`Перенаправление на услиги/${selectedService}/${city}`);
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
                ref={doctorsMenuAnchorRef} // Используем реф для меню врачей
                onClick={toggleCategoryMenu}
              >
                ВРАЧИ
              </RightLink>
              <DoctorsMenu
                anchorRef={doctorsMenuAnchorRef}
                isCategoryMenuOpen={isCategoryMenuOpen}
                setCategoryMenuOpen={setCategoryMenuOpen}
                handleCategorySelection={handleDoctorSelection}
                cityMenuAnchorRef={doctorsMenuAnchorRef} // Передаем анкор для Menu городов
                isCityMenuOpen={isCityMenuOpen}
                setCityMenuOpen={setCityMenuOpen}
                handleCitySelection={handleCitySelection}
              />
              <RightLink
                role="button"
                aria-haspopup="true"
                aria-controls="services-menu"
                ref={servicesMenuAnchorRef} // Используем реф для меню услуг
                onClick={toggleServicesMenu}
              >
                УСЛУГИ
              </RightLink>
              <ServicesMenu
                anchorRef={servicesMenuAnchorRef}
                isServicesMenuOpen={isServicesMenuOpen}
                setServicesMenuOpen={setServicesMenuOpen}
                handleServiceSelection={handleServiceSelection}
                cityMenuAnchorRef={servicesMenuAnchorRef} // Передаем анкор для Menu городов
                isCityMenuOpen={isCityMenuOpen}
                setCityMenuOpen={setCityMenuOpen}
                handleCitySelection={handleCitySelectionService}
              />
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
    </BcgContainer>
  );
}

export default MainMiddlePart;
