// ServicesMenu.tsx
import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { RightLink } from "../styles";

interface ServicesMenuProps {
  anchorRef: React.RefObject<HTMLButtonElement | null>;
  isServicesMenuOpen: boolean;
  setServicesMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleServiceSelection: (service: string) => void;
  // Добавляем проп 'cityMenuAnchorRef'
  cityMenuAnchorRef: React.RefObject<HTMLButtonElement | null>;
  isCityMenuOpen: boolean;
  setCityMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleCitySelection: (city: string) => void;
}

const ServicesMenu: React.FC<ServicesMenuProps> = ({
  anchorRef,
  isServicesMenuOpen,
  setServicesMenuOpen,
  handleServiceSelection,
  cityMenuAnchorRef, // Включаем 'cityMenuAnchorRef' в компонент
  isCityMenuOpen,
  setCityMenuOpen,
  handleCitySelection,
}) => {
  return (
    <>
      {/* Второе Menu для городов */}
      <Menu
        id="city-menu"
        anchorEl={cityMenuAnchorRef.current}
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

      {/* Первое Menu для услуг */}
      <Menu
        id="services-menu"
        anchorEl={anchorRef.current}
        open={isServicesMenuOpen}
        onClose={() => setServicesMenuOpen(false)}
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
        <MenuItem onClick={() => handleServiceSelection("legal_services")}>Юристы</MenuItem>
        <MenuItem onClick={() => handleServiceSelection("translators")}>Переводчики</MenuItem>
        <MenuItem onClick={() => handleServiceSelection("hair_beauty")}>Парикмахерские</MenuItem>
      </Menu>
    </>
  );
}

export default ServicesMenu;
