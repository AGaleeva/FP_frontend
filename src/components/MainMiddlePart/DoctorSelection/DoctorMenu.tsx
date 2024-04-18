import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';

export default function DoctorMenu() {
  const [categoryAnchorEl, setCategoryAnchorEl] = React.useState<null | HTMLElement>(null);
  const [cityAnchorEl, setCityAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);
  const [selectedCity, setSelectedCity] = React.useState<string | null>(null);
  const navigate = useNavigate();

  const handleCategoryClick = (event: React.MouseEvent<HTMLElement>) => {
    setCategoryAnchorEl(event.currentTarget);
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
    navigate(`/doctors/${city}/${selectedCategory}`); // Переходим на страницу с выбором категории для выбранного города
    handleClose();
  };

  const handleCategorySelection = (category: string) => {
    setSelectedCategory(category);
    navigate(`/doctors/${selectedCity}/${category.toLowerCase()}`); // Формируем URL на основе выбранного города и категории
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
        <MenuItem onClick={() => { 
          handleCategorySelection('Терапевты');
        }}>Терапевты</MenuItem>
        <MenuItem onClick={() => { 
          handleCategorySelection('Педиатры');
        }}>Педиатры</MenuItem>
        <MenuItem onClick={() => { 
          handleCategorySelection('Стоматологи');
        }}>Стоматологи</MenuItem>
        <MenuItem onClick={() => { 
          handleCategorySelection('Кардиологи');
        }}>Кардиологи</MenuItem>
        <MenuItem onClick={() => { 
          handleCategorySelection('Ортопеды');
        }}>Ортопеды</MenuItem>
        <MenuItem onClick={() => { 
          handleCategorySelection('Дерматологи');
        }}>Дерматологи</MenuItem>
      </Menu>

      <Button
        aria-controls="city-menu"
        aria-haspopup="true"
        onClick={handleCityClick}
      >
        Города
      </Button>

      <Menu
        id="city-menu"
        anchorEl={cityAnchorEl}
        open={Boolean(cityAnchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleCitySelection('Берлин')}>Берлин</MenuItem>
        <MenuItem onClick={() => handleCitySelection('Мюнхен')}>Мюнхен</MenuItem>
        <MenuItem onClick={() => handleCitySelection('Франкфурт')}>Франкфурт</MenuItem>
        <MenuItem onClick={() => handleCitySelection('Дюссельдорф')}>Дюссельдорф</MenuItem>
        <MenuItem onClick={() => handleCitySelection('Гамбург')}>Гамбург</MenuItem>
      </Menu>
    </div>
  );
}
