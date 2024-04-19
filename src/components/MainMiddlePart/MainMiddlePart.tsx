// MainMiddlePart.tsx
import React, { useRef, useState } from "react";
import { BcgContainer, BackgroundImageContainer, BackgroundImage, MainTitle, RightWraper, BackgroundImage100, ButtonRead, MyImageComponent, TitleContainerWrapper, PageTitle, RightTitle, RightLink, ButtonContainer } from "./styles";
import DoctorsMenu from "./DoctorsMenu";
import ServicesMenu from "./ServicesMenu";
import ChildrenMenu from "./ChildrenMenu"; // Импортируем компонент для меню с городами
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
  const [isChildrenCityMenuOpen, setChildrenCityMenuOpen] = useState(false); // Состояние для открытия меню городов для детей
  const navigate = useNavigate();
  const doctorMenuAnchorRef = useRef<HTMLButtonElement | null>(null); // Элемент-якорь для меню врачей
  const serviceMenuAnchorRef = useRef<HTMLButtonElement | null>(null); // Элемент-якорь для меню услуг
  const childrenMenuAnchorRef = useRef<HTMLButtonElement | null>(null); // Элемент-якорь для меню городов для детей

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

  const toggleChildrenCityMenu = () => {
    setChildrenCityMenuOpen(!isChildrenCityMenuOpen); // Функция для открытия/закрытия меню городов для детей
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

  const handleChildrenCitySelection = (city: string) => {
    navigate(`/${city}/children`); // Редирект для детского раздела
    console.log(`Перенаправление на детский раздел/${city}`);
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
                ref={doctorMenuAnchorRef}
                onClick={toggleDoctorMenu}
              >
                ВРАЧИ
              </RightLink>
              <DoctorsMenu
                anchorRef={doctorMenuAnchorRef}
                isMenuOpen={isDoctorMenuOpen}
                setMenuOpen={setDoctorMenuOpen}
                handleSelection={handleDoctorSelection}
                cityMenuAnchorRef={doctorMenuAnchorRef}
                isCityMenuOpen={isDoctorCityMenuOpen}
                setCityMenuOpen={setDoctorCityMenuOpen}
                handleCitySelection={handleDoctorCitySelection}
              />
              <RightLink
                role="button"
                aria-haspopup="true"
                aria-controls="service-menu"
                ref={serviceMenuAnchorRef}
                onClick={toggleServiceMenu}
              >
                УСЛУГИ
              </RightLink>
              <ServicesMenu
                anchorRef={serviceMenuAnchorRef}
                isMenuOpen={isServiceMenuOpen}
                setMenuOpen={setServiceMenuOpen}
                handleSelection={handleServiceSelection}
                cityMenuAnchorRef={serviceMenuAnchorRef}
                isCityMenuOpen={isServiceCityMenuOpen}
                setCityMenuOpen={setServiceCityMenuOpen}
                handleCitySelection={handleServiceCitySelection}
              />
              <RightLink
                role="button"
                aria-haspopup="true"
                aria-controls="children-menu" // Указываем id для меню детей
                ref={childrenMenuAnchorRef} // Используем реф для меню городов для детей
                onClick={toggleChildrenCityMenu} // Открывать меню городов для детей при клике на "ДЕТИ"
              >
                ДЕТИ
              </RightLink>
              <ChildrenMenu
                anchorRef={childrenMenuAnchorRef} // Передаем реф для меню городов для детей
                isMenuOpen={isChildrenCityMenuOpen} // Состояние для открытия меню городов для детей
                setMenuOpen={setChildrenCityMenuOpen} // Функция для управления состоянием открытия меню городов для детей
                handleCitySelection={handleChildrenCitySelection} // Обработчик выбора города для детей
              />
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
