import { Link, useNavigate, useLocation } from "react-router-dom"
import { useState, useEffect, MouseEvent } from "react"
import { instance } from "../../utils/axios"
import { Cookies } from "react-cookie"
import { Button, Menu, MenuItem } from "@mui/material"
import { AccountCircle } from "@mui/icons-material"
import { useDispatch, useSelector } from "react-redux"

import ImageComponent from "components/ImageComponent"
import LogoComponent from "components/LogoComponent"
import WeatherComponent from "components/WeatherComponent"
import DropdownMenu from "components/DropdownMenu"
import {
  MainContainer,
  HeaderUpperContainer,
  HeaderMiddleContainer,
  HeaderLowerContainer,
  LogoContainer,
  LogoTextContainer,
  TitleContainer,
  HeaderSerchContainer,
  ImageComponentWrap,
  HeaderSearch,
  HeaderSignInContainer,
  HeaderSignInText,
  NavListLeft,
  NavItem,
  NavigationLink,
  NavListRight,
  TitleLinkContainer,
  ImageWrap,
  HeaderDropdownContainer,
} from "./styles"
import { MainTitle, SearchIcon, SignInIcon } from "assets";
import { userActions } from "../../store/user/userSlice";
import { userSelectors } from "../../store/user/selectors";

interface NavLink {
  to: string
  text: string
}

interface HeaderProps {
  logoText?: string
  logoImgDescr?: { src: string; alt: string }
  city: string
  HeaderDropDown?: boolean
  isGeneralPage?: boolean
  buttonProps?: any
  rightNavLinks?: NavLink[]
}

function Header({
  logoText,
  logoImgDescr,
  city,
  HeaderDropDown,
  buttonProps,
  rightNavLinks,
}: HeaderProps) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()
  const cookies = new Cookies()

  const { authenticated, name, authorities } = useSelector(userSelectors)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  //--------------------------------
  useEffect(() => {
    async function fetchUserData() {
      try {
        // Получаем информацию о пользователе после успешной аутентификации
        const userInfoResponse = await instance.get("/auth/get_auth_info")
        // Сохраняем информацию о пользователе в Redux
        dispatch(userActions.setUserInfo(userInfoResponse.data))
      } catch (error) {
        console.error("Error fetching user data:", error)
      }
    }
    fetchUserData()
  }, [])
  //-------------------------------------
  const handleLogout = async () => {
    try {
      const response = await instance.get("/auth/logout")
      console.log("Logout successful:", response.data)
      dispatch(userActions.clearUserInfo())
      if (location.pathname === "/user_login/user_account") {
        navigate("/")
      }
    } catch (error) {
      console.error("Error logging out:", error)
    }
  }

  const handleUserAccount = () => {
    navigate("/user_login/user_account")
  }

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <MainContainer>
      <HeaderUpperContainer>
        <HeaderSerchContainer>
          <ImageComponentWrap>
            <ImageComponent src={SearchIcon} />
          </ImageComponentWrap>
          <HeaderSearch type="search" placeholder="search" name="Search" />
        </HeaderSerchContainer>

        {HeaderDropDown && (
          <HeaderDropdownContainer className="header-dropdown">
            <DropdownMenu
              HeaderDropDown={HeaderDropDown}
              buttonProps={buttonProps}
            />
          </HeaderDropdownContainer>
        )}

        {authenticated ? (
          <div>
            <Button onClick={handleClick} startIcon={<AccountCircle />}>
              Профиль
            </Button>
            <Menu
              id="profile-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {!authorities.some(
                authority => authority.authority === "ROLE_ADMIN",
              ) && (
                <MenuItem onClick={handleUserAccount}>Личный кабинет</MenuItem>
              )}

              <MenuItem onClick={handleLogout}>Выйти из аккаунта</MenuItem>
            </Menu>
          </div>
        ) : (
          <HeaderSignInContainer>
            <HeaderSignInText to="/login">Sign In</HeaderSignInText>
          </HeaderSignInContainer>
        )}
      </HeaderUpperContainer>
      <HeaderMiddleContainer>
        <LogoContainer>
          <LogoComponent {...logoImgDescr} />
          {logoText && <LogoTextContainer>{logoText}</LogoTextContainer>}
        </LogoContainer>
        <TitleContainer>
          <TitleLinkContainer to="/">Германия в ладонях</TitleLinkContainer>
        </TitleContainer>
        <WeatherComponent city={city} />
      </HeaderMiddleContainer>
      <HeaderLowerContainer>
        <NavListLeft>
          <NavItem>
            <NavigationLink as={Link} to="/">
              Новости
            </NavigationLink>
          </NavItem>
          <NavItem>
            <NavigationLink as={Link} to="/general-info">
              Общая информация
            </NavigationLink>
          </NavItem>
        </NavListLeft>
        <NavListRight>
          {rightNavLinks &&
            rightNavLinks.map((link, index) => (
              <NavItem key={index}>
                <NavigationLink as={Link} to={link.to}>
                  {link.text}
                </NavigationLink>
              </NavItem>
            ))}
          {/* <NavListRight>    
          <NavItem>
            <NavigationLink href="#">Врачи</NavigationLink>
          </NavItem>
          <NavItem>
            <NavigationLink href="#">Дети</NavigationLink>
          </NavItem>
          <NavItem>
            <NavigationLink href="#">Магазины</NavigationLink>
          </NavItem>
          <NavItem>
            <NavigationLink href="#">Кафе и рестораны</NavigationLink>
          </NavItem>
          <NavItem>
            <NavigationLink href="#">Услуги</NavigationLink>
          </NavItem>
        </NavListRight> */}
        </NavListRight>
      </HeaderLowerContainer>
    </MainContainer>
  )
}

export default Header;