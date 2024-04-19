// В компоненте DoctorsMenu.tsx
import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { RightLink } from "../styles";

interface DoctorsMenuProps {
  anchorRef: React.RefObject<HTMLButtonElement | null>;
  isCategoryMenuOpen: boolean;
  setCategoryMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleCategorySelection: (category: string) => void;
  // Добавляем новые пропсы для второго Menu
  cityMenuAnchorRef: React.RefObject<HTMLButtonElement | null>;
  isCityMenuOpen: boolean;
  setCityMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleCitySelection: (city: string) => void; // Используем правильный обработчик
}

const DoctorsMenu: React.FC<DoctorsMenuProps> = ({
  anchorRef,
  isCategoryMenuOpen,
  setCategoryMenuOpen,
  handleCategorySelection,
  cityMenuAnchorRef,
  isCityMenuOpen,
  setCityMenuOpen,
  handleCitySelection, // Используем правильный обработчик
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

      {/* Первое Menu для категорий */}
      <Menu
        id="category-menu"
        anchorEl={anchorRef.current}
        open={isCategoryMenuOpen}
        onClose={() => setCategoryMenuOpen(false)}
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
        <MenuItem onClick={() => handleCategorySelection("physicians")}>Терапевты</MenuItem>
        <MenuItem onClick={() => handleCategorySelection("pediatrists")}>Педиатры</MenuItem>
        <MenuItem onClick={() => handleCategorySelection("stomatologists")}>Стоматологи</MenuItem>
        <MenuItem onClick={() => handleCategorySelection("cardiologists")}>Кардиологи</MenuItem>
        <MenuItem onClick={() => handleCategorySelection("orthopedists")}>Ортопеды</MenuItem>
        <MenuItem onClick={() => handleCategorySelection("dermatologists")}>Дерматологи</MenuItem>
      </Menu>
    </>
  );
}

export default DoctorsMenu;
