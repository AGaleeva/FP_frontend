// MainMiddlePart.tsx
import React, { useRef, useState } from "react";
import { BcgContainer, BackgroundImageContainer, BackgroundImage, MainTitle, RightWraper, BackgroundImage100, ButtonRead, MyImageComponent, TitleContainerWrapper, PageTitle, RightTitle, RightLink, ButtonContainer } from "./styles";
import DoctorsMenu from "./DoctorsMenu";
import ServicesMenu from "./ServicesMenu";
import ChildrenMenu from "./ChildrenMenu";
import ShopsMenu from "./ShopsMenu";
import CafesMenu from "./CafesMenu"; // Импорт компонента для меню кафе
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
  const [isChildrenCityMenuOpen, setChildrenCityMenuOpen] = useState(false);
  const [isShopsCityMenuOpen, setShopsCityMenuOpen] = useState(false);
  const [isCafesCityMenuOpen, setCafesCityMenuOpen] = useState(false); // Состояние для открытия меню городов для кафе
  const navigate = useNavigate();
  const doctorMenuAnchorRef = useRef<HTMLButtonElement | null>(null);
  const serviceMenuAnchorRef = useRef<HTMLButtonElement | null>(null);
  const childrenMenuAnchorRef = useRef<HTMLButtonElement | null>(null);
  const shopsMenuAnchorRef = useRef<HTMLButtonElement | null>(null);
  const cafesMenuAnchorRef = useRef<HTMLButtonElement | null>(null); // Реф для меню кафе

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
    setChildrenCityMenuOpen(!isChildrenCityMenuOpen);
  };

  const toggleShopsCityMenu = () => {
    setShopsCityMenuOpen(!isShopsCityMenuOpen);
  };

  const toggleCafesCityMenu = () => {
    setCafesCityMenuOpen(!isCafesCityMenuOpen); // Функция для открытия/закрытия меню городов для кафе
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
    navigate(`/${city}/children`);
    console.log(`Перенаправление на детский раздел/${city}`);
  };

  const handleShopsCitySelection = (city: string) => {
    navigate(`/${city}/shops`);
    console.log(`Перенаправление на магазины/${city}`);
  };

  const handleCafesCitySelection = (city: string) => {
    navigate(`/${city}/cafes-restaurants`);
    console.log(`Перенаправление на кафе/${city}`);
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
                aria-controls="children-menu"
                ref={childrenMenuAnchorRef}
                onClick={toggleChildrenCityMenu}
              >
                ДЕТИ
              </RightLink>
              <ChildrenMenu
                anchorRef={childrenMenuAnchorRef}
                isMenuOpen={isChildrenCityMenuOpen}
                setMenuOpen={setChildrenCityMenuOpen}
                handleCitySelection={handleChildrenCitySelection}
              />
              <RightLink
                role="button"
                aria-haspopup="true"
                aria-controls="shops-menu"
                ref={shopsMenuAnchorRef}
                onClick={toggleShopsCityMenu}
              >
                МАГАЗИНЫ
              </RightLink>
              <ShopsMenu
                anchorRef={shopsMenuAnchorRef}
                isMenuOpen={isShopsCityMenuOpen}
                setMenuOpen={setShopsCityMenuOpen}
                handleCitySelection={handleShopsCitySelection}
              />
              <RightLink
                role="button"
                aria-haspopup="true"
                aria-controls="cafes-menu"
                ref={cafesMenuAnchorRef}
                onClick={toggleCafesCityMenu}
              >
                КАФЕ И РЕСТОРАНЫ
              </RightLink>
              <CafesMenu
                anchorRef={cafesMenuAnchorRef}
                isMenuOpen={isCafesCityMenuOpen}
                setMenuOpen={setCafesCityMenuOpen}
                handleCitySelection={handleCafesCitySelection}
              />
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
