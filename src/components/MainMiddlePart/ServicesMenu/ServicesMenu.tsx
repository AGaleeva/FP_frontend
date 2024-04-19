// ServicesMenu.tsx
import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { RightLink } from "../styles";

interface ServicesMenuProps {
  anchorRef: React.RefObject<HTMLButtonElement | null>;
  isMenuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleSelection: (service: string) => void;
  // Добавляем проп 'cityMenuAnchorRef'
  cityMenuAnchorRef: React.RefObject<HTMLButtonElement | null>;
  isCityMenuOpen: boolean;
  setCityMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleCitySelection: (city: string) => void;
}

const ServicesMenu: React.FC<ServicesMenuProps> = ({
  anchorRef,
  isMenuOpen,
  setMenuOpen,
  handleSelection,
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
        id="service-menu"
        anchorEl={anchorRef.current}
        open={isMenuOpen}
        onClose={() => setMenuOpen(false)}
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
        <MenuItem onClick={() => handleSelection("legal_services")}>Юристы</MenuItem>
        <MenuItem onClick={() => handleSelection("translators")}>Переводчики</MenuItem>
        <MenuItem onClick={() => handleSelection("hair_beauty")}>Парикмахерские</MenuItem>
      </Menu>
    </>
  );
}

export default ServicesMenu;
