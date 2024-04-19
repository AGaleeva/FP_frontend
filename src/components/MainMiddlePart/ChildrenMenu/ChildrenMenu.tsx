// ChildrenMenu.tsx
import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

interface ChildrenMenuProps {
  anchorRef: React.RefObject<HTMLButtonElement | null>;
  isMenuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleCitySelection: (city: string) => void;
}

const ChildrenMenu: React.FC<ChildrenMenuProps> = ({
  anchorRef,
  isMenuOpen,
  setMenuOpen,
  handleCitySelection,
}) => {
  return (
    <Menu
      id="children-city-menu"
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
      <MenuItem onClick={() => handleCitySelection("berlin")}>Берлин</MenuItem>
      <MenuItem onClick={() => handleCitySelection("munich")}>Мюнхен</MenuItem>
      <MenuItem onClick={() => handleCitySelection("frankfurt")}>Франкфурт</MenuItem>
      <MenuItem onClick={() => handleCitySelection("dusseldorf")}>Дюссельдорф</MenuItem>
      <MenuItem onClick={() => handleCitySelection("hamburg")}>Гамбург</MenuItem>
    </Menu>
  );
}

export default ChildrenMenu;
