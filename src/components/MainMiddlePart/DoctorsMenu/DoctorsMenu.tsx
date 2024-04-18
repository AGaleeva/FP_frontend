import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { RightLink } from "../styles";

interface DoctorsMenuProps {
  anchorRef: React.RefObject<HTMLButtonElement | null>;
  isCategoryMenuOpen: boolean;
  setCategoryMenuOpen: React.Dispatch<React.SetStateAction<boolean>>; // Указываем тип явно
  handleCategorySelection: (category: string) => void;
}

function DoctorsMenu({
  anchorRef,
  isCategoryMenuOpen,
  setCategoryMenuOpen,
  handleCategorySelection,
}: DoctorsMenuProps) {
  return (
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
  );
}

export default DoctorsMenu;
