import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';

interface DoctorSelectionProps {
  selectedCategory: string | null;
  onSelectCategory: (category: string) => void; // добавление пропса onSelectCategory
}
const DoctorSelection: React.FC<DoctorSelectionProps> = ({ selectedCategory }) => {
  const [categoryAnchorEl, setCategoryAnchorEl] = React.useState<null | HTMLElement>(null);
  const [cityAnchorEl, setCityAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedCity, setSelectedCity] = React.useState<string | null>(null);
  const navigate = useNavigate();

  const handleCategoryClick = (event: React.MouseEvent<HTMLElement>) => {
    setCategoryAnchorEl(event.currentTarget);
    setCityAnchorEl(null); // Закрываем меню городов при открытии меню категорий
  };

  const handleCityClick = (event: React.MouseEvent<HTMLElement>) => {
    setCityAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setCategoryAnchorEl(null);
    setCityAnchorEl(null);
  };

  const handleCitySelection = (city: string) => {
    setSelectedCity(city);
    navigate(`/${city}/doctors/${selectedCategory}`);
    handleClose();
  };

  const setSelectedCategory = (category: string) => {
    setSelectedCategory(category);
    setCityAnchorEl(document.getElementById('city-menu-anchor')); // Устанавливаем якорь для меню городов
    handleClose();
  };

  return (
    <div>
      <Button
        aria-controls="category-menu"
        aria-haspopup="true"
        onClick={handleCategoryClick}
      >
        ВРАЧИ
      </Button>

      <Menu
        id="category-menu"
        anchorEl={categoryAnchorEl}
        open={Boolean(categoryAnchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => setSelectedCategory('Терапевты')}>Терапевты</MenuItem>
        <MenuItem onClick={() => setSelectedCategory('Педиатры')}>Педиатры</MenuItem>
        <MenuItem onClick={() => setSelectedCategory('Стоматологи')}>Стоматологи</MenuItem>
        {/* Добавь здесь остальные категории */}
      </Menu>

      <Menu
        id="city-menu"
        anchorEl={cityAnchorEl}
        open={Boolean(cityAnchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleCitySelection('Берлин')}>Берлин</MenuItem>
        <MenuItem onClick={() => handleCitySelection('Мюнхен')}>Мюнхен</MenuItem>
        <MenuItem onClick={() => handleCitySelection('Франкфурт')}>Франкфурт</MenuItem>
        {/* Добавь здесь остальные города */}
      </Menu>

      {/* Элемент-якорь для меню городов */}
      <div id="city-menu-anchor" style={{ display: 'none' }} />
    </div>
  );
}

export default DoctorSelection;
