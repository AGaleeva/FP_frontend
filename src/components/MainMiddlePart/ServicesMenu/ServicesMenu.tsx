import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { RightLink } from "../styles";

interface ServicesMenuProps {
  anchorRef: React.RefObject<HTMLButtonElement | null>;
  isServicesMenuOpen: boolean;
  setServicesMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleServiceSelection: (service: string) => void;
}

function ServicesMenu({
  anchorRef,
  isServicesMenuOpen,
  setServicesMenuOpen,
  handleServiceSelection,
}: ServicesMenuProps) {
  return (
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
  );
}

export default ServicesMenu;
