import { useLocation, useNavigate } from "react-router-dom"
import { colors } from "styles/colors"
import { Box, Checkbox, TextField, Typography, Button } from "@mui/material"
import { Subscriptions, Form, Column, CheckboxWrapper, CheckboxLabel, ButtonWrapper,  } from "./styles"
import { useState, useEffect, ChangeEvent, FormEvent } from "react"
import { instance } from "../../utils/axios"
import Header from "components/Header"
import Footer from "components/Footer"
import { GermanMainLogo } from "assets"
import { UserDataProps } from "components/updateUserSubscriptions/types"
import { useDispatch } from "react-redux";
import { userActions } from "../../store/user/userSlice";


function UserAccount() {
  const [userData, setUserData] = useState<UserDataProps>({
    id: null,
    firstname: "",
    lastname: "",
    children_info: false,
    doctors_info: false,
    hair_beauty_info: false,
    legal_services_info: false,
    restaurants_info: false,
    shops_info: false,
    translators_info: false,
    news_info: false,
    berlin: false,
    muenchen: false,
    dusseldorf: false,
    hamburg: false,
    frankfurt: false,
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await instance.get<UserDataProps>("/user_login/user_account");
        // Проверяем, если значение равно null, устанавливаем пустую строку
        const { firstname, lastname, ...rest } = response.data;
        setUserData({
          firstname: firstname || "",
          lastname: lastname || "",
          ...rest,
        });

      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
    fetchUserData();
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setUserData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await instance.put("/user_login", userData);
      console.log("User data updated successfully:", userData);
      navigate("/")
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };


  const handleLogout = async () => {
    try {
      const response = await instance.get("/auth/logout");
      console.log("Logout successful:", response.data);

      // Обновление состояния пользователя
      setUserData((prevUserData) => ({
        ...prevUserData,
        id: null,
        firstname: "",
        lastname: "",
        children_info: false,
        doctors_info: false,
        hair_beauty_info: false,
        legal_services_info: false,
        restaurants_info: false,
        shops_info: false,
        translators_info: false,
        berlin: false,
        muenchen: false,
        dusseldorf: false,
        hamburg: false,
        frankfurt: false,
      }));

      dispatch(userActions.clearUserInfo())
      // Перенаправление на главную страницу
      navigate("/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
<>
      <Header
        logoImgDescr={{ src: GermanMainLogo, alt: "GermanMainLogo" }}
        city="Берлин"
        HeaderDropDown={false}
        buttonProps={{
          name: "Выбери свой",
          type: "button",
        }}
      />
      <Subscriptions>
        <Form onSubmit={handleSubmit}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            maxWidth={560}
            margin="auto"
            padding={5}
            borderRadius={5}
            boxShadow={`5px 5px 10px ${colors.baseGray50}`}
          >
            <Typography
              variant="h4"
              padding={1}
              mb={0}
              fontFamily="Montserrat"
              fontWeight={500}
              textAlign="center"
            >
              Личный кабинет
            </Typography>
            <Typography
              variant="body1"
              padding={1}
              mb={2}
              fontFamily="Montserrat"
              fontWeight={400}
              textAlign="center"
            >
              Подпишитесь на рассылку
            </Typography>
            <TextField
              fullWidth={true}
              margin="normal"
              label="Имя"
              variant="outlined"
              placeholder="Введите ваше имя"
              name="firstname"
              value={userData.firstname}
              onChange={handleInputChange}
            />
            <TextField
              fullWidth={true}
              margin="normal"
              label="Фамилия"
              variant="outlined"
              placeholder="Введите вашу фамилию"
              name="lastname"
              value={userData.lastname}
              onChange={handleInputChange}
            />
            <Box display="flex" justifyContent="center">
              <Column>
                <Typography variant="body1" fontWeight={500} textAlign="center" mb={2}>
                  Выберите интересующие города:
                </Typography>
                <CheckboxWrapper>
                  <Checkbox
                    name="berlin"
                    checked={userData.berlin}
                    onChange={handleInputChange}
                  />
                  <CheckboxLabel htmlFor="berlin">Берлин</CheckboxLabel>
                </CheckboxWrapper>
                <CheckboxWrapper>
                  <Checkbox
                    name="muenchen"
                    checked={userData.muenchen}
                    onChange={handleInputChange}
                  />
                  <CheckboxLabel htmlFor="muenchen">Мюнхен</CheckboxLabel>
                </CheckboxWrapper>
                <CheckboxWrapper>
                  <Checkbox
                    name="dusseldorf"
                    checked={userData.dusseldorf}
                    onChange={handleInputChange}
                  />
                  <CheckboxLabel htmlFor="dusseldorf">Дюссельдорф</CheckboxLabel>
                </CheckboxWrapper>
                <CheckboxWrapper>
                  <Checkbox
                    name="hamburg"
                    checked={userData.hamburg}
                    onChange={handleInputChange}
                  />
                  <CheckboxLabel htmlFor="hamburg">Гамбург</CheckboxLabel>
                </CheckboxWrapper>
                <CheckboxWrapper>
                  <Checkbox
                    name="frankfurt"
                    checked={userData.frankfurt}
                    onChange={handleInputChange}
                  />
                  <CheckboxLabel htmlFor="frankfurt">Франкфурт</CheckboxLabel>
                </CheckboxWrapper>
              </Column>
              <Column>
                <Typography variant="body1" fontWeight={500} textAlign="center" mb={2}>
                  Выберите интересующие вас категории:
                </Typography>
                <CheckboxWrapper>
                  <Checkbox
                    name="children_info"
                    checked={userData.children_info}
                    onChange={handleInputChange}
                  />
                  <CheckboxLabel htmlFor="children_info">Дети</CheckboxLabel>
                </CheckboxWrapper>
                <CheckboxWrapper>
                  <Checkbox
                    name="doctors_info"
                    checked={userData.doctors_info}
                    onChange={handleInputChange}
                  />
                  <CheckboxLabel htmlFor="doctors_info">Врачи</CheckboxLabel>
                </CheckboxWrapper>
                <CheckboxWrapper>
                  <Checkbox
                    name="hair_beauty_info"
                    checked={userData.hair_beauty_info}
                    onChange={handleInputChange}
                  />
                  <CheckboxLabel htmlFor="hair_beauty_info">Парикмахерские и красота</CheckboxLabel>
                </CheckboxWrapper>
                <CheckboxWrapper>
                  <Checkbox
                    name="legal_services_info"
                    checked={userData.legal_services_info}
                    onChange={handleInputChange}
                  />
                  <CheckboxLabel htmlFor="legal_services_info">Юридические услуги</CheckboxLabel>
                </CheckboxWrapper>
                <CheckboxWrapper>
                  <Checkbox
                    name="restaurants_info"
                    checked={userData.restaurants_info}
                    onChange={handleInputChange}
                  />
                  <CheckboxLabel htmlFor="restaurants_info">Рестораны и кафе</CheckboxLabel>
                </CheckboxWrapper>
                <CheckboxWrapper>
                  <Checkbox
                    name="shops_info"
                    checked={userData.shops_info}
                    onChange={handleInputChange}
                  />
                  <CheckboxLabel htmlFor="shops_info">Магазины</CheckboxLabel>
                </CheckboxWrapper>
                <CheckboxWrapper>
                  <Checkbox
                    name="translators_info"
                    checked={userData.translators_info}
                    onChange={handleInputChange}
                  />
                  <CheckboxLabel htmlFor="translators_info">Переводчики</CheckboxLabel>
                </CheckboxWrapper>
              </Column>
            </Box>
            <ButtonWrapper>
              <Button
                type="submit"
                size="large"
                variant="contained"
                sx={{
                  fontFamily: "Montserrat",
                  marginTop: 2,
                  marginBottom: 2,
                  width: "80%",
                  padding: 2,
                  
                }}
              >
                Сохранить
              </Button>
              <Button
                onClick={handleLogout}
                size="large"
                variant="contained"
                color="error"
                sx={{
                  fontFamily: "Montserrat",
                  marginTop: 2,
                  marginBottom: 2,
                  width: "80%",
                  padding: 2,
                }}
              >
                Выйти из аккаунта
              </Button>
            </ButtonWrapper>
          </Box>
        </Form>
      </Subscriptions>
      <Footer />
    </>
      );
}

export default UserAccount;