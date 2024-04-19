// DoctorsMenu.tsx
import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { RightLink } from "../styles";

interface DoctorsMenuProps {
  anchorRef: React.RefObject<HTMLButtonElement | null>;
  isMenuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleSelection: (doctor: string) => void;
  // Добавляем пропсы для меню городов
  cityMenuAnchorRef: React.RefObject<HTMLButtonElement | null>;
  isCityMenuOpen: boolean;
  setCityMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleCitySelection: (city: string) => void;
}

const DoctorsMenu: React.FC<DoctorsMenuProps> = ({
  anchorRef,
  isMenuOpen,
  setMenuOpen,
  handleSelection,
  cityMenuAnchorRef,
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

      {/* Первое Menu для врачей */}
      <Menu
        id="doctor-menu"
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
        <MenuItem onClick={() => handleSelection("physicians")}>Терапевты</MenuItem>
        <MenuItem onClick={() => handleSelection("pediatrists")}>Педиатры</MenuItem>
        <MenuItem onClick={() => handleSelection("stomatologists")}>Стоматологи</MenuItem>
        <MenuItem onClick={() => handleSelection("cardiologists")}>Кардиологи</MenuItem>
        <MenuItem onClick={() => handleSelection("orthopedists")}>Ортопеды</MenuItem>
        <MenuItem onClick={() => handleSelection("dermatologists")}>Дерматологи</MenuItem>
      </Menu>
    </>
  );
}

export default DoctorsMenu;
