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
  const [isDoctorMenuOpen, setDoctorMenuOpen] = useState(false);
  const [isServiceMenuOpen, setServiceMenuOpen] = useState(false);
  const [isDoctorCityMenuOpen, setDoctorCityMenuOpen] = useState(false);
  const [isServiceCityMenuOpen, setServiceCityMenuOpen] = useState(false);
  const navigate = useNavigate();
  const doctorMenuAnchorRef = useRef<HTMLButtonElement | null>(null); // Элемент-якорь для меню врачей
  const serviceMenuAnchorRef = useRef<HTMLButtonElement | null>(null); // Элемент-якорь для меню услуг

  const toggleDoctorMenu = () => {
    setDoctorMenuOpen(!isDoctorMenuOpen);
  };

  const toggleServiceMenu = () => {
    setServiceMenuOpen(!isServiceMenuOpen);
  };

  const toggleDoctorCityMenu = () => {
    setDoctorCityMenuOpen(!isDoctorCityMenuOpen);
  };

  const toggleServiceCityMenu = () => {
    setServiceCityMenuOpen(!isServiceCityMenuOpen);
  };

  const handleDoctorSelection = (doctor: string) => {
    setSelectedDoctor(doctor);
    setDoctorCityMenuOpen(true);
    setDoctorMenuOpen(false);
  };

  const handleServiceSelection = (service: string) => {
    setSelectedService(service);
    setServiceCityMenuOpen(true);
    setServiceMenuOpen(false);
  };

  const handleDoctorCitySelection = (city: string) => {
    navigate(`/${city}/doctors/${selectedDoctor}`);
    console.log(`Перенаправление на врачей/${selectedDoctor}/${city}`);
  };

  const handleServiceCitySelection = (city: string) => {
    navigate(`/${city}/services/${selectedService}`);
    console.log(`Перенаправление на услуги/${selectedService}/${city}`);
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
                aria-controls="doctor-menu"
                ref={doctorMenuAnchorRef} // Используем реф для меню врачей
                onClick={toggleDoctorMenu}
              >
                ВРАЧИ
              </RightLink>
              <DoctorsMenu
                anchorRef={doctorMenuAnchorRef}
                isMenuOpen={isDoctorMenuOpen}
                setMenuOpen={setDoctorMenuOpen}
                handleSelection={handleDoctorSelection}
                cityMenuAnchorRef={doctorMenuAnchorRef} // Передаем анкор для меню городов
                isCityMenuOpen={isDoctorCityMenuOpen}
                setCityMenuOpen={setDoctorCityMenuOpen}
                handleCitySelection={handleDoctorCitySelection}
              />
              <RightLink
                role="button"
                aria-haspopup="true"
                aria-controls="service-menu"
                ref={serviceMenuAnchorRef} // Используем реф для меню услуг
                onClick={toggleServiceMenu}
              >
                УСЛУГИ
              </RightLink>
              <ServicesMenu
                anchorRef={serviceMenuAnchorRef}
                isMenuOpen={isServiceMenuOpen}
                setMenuOpen={setServiceMenuOpen}
                handleSelection={handleServiceSelection}
                cityMenuAnchorRef={serviceMenuAnchorRef} // Передаем анкор для меню городов
                isCityMenuOpen={isServiceCityMenuOpen}
                setCityMenuOpen={setServiceCityMenuOpen}
                handleCitySelection={handleServiceCitySelection}
              />
              <RightLink role="button">ДЕТИ</RightLink>
              <RightLink role="button">МАГАЗИНЫ</RightLink>
              <RightLink role="button">КАФЕ И РЕСТОРАНЫ</RightLink>
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
