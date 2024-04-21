import { useLocation, useNavigate } from "react-router-dom"
import { colors } from "styles/colors"
import { Box, Checkbox, TextField, Typography, Button } from "@mui/material"
import { Subscriptions, Form } from "./styles"
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
            <Typography variant="body1" fontWeight={500} textAlign="center" mb={2}>
              Выберите интересующие города:
            </Typography>

            <Box display="flex" alignItems="center">
              <Checkbox
                name="berlin"
                checked={userData.berlin}
                onChange={handleInputChange}
              />
              <label htmlFor="berlin">Берлин</label>
            </Box>

            <Box display="flex" alignItems="center">
              <Checkbox
                name="muenchen"
                checked={userData.muenchen}
                onChange={handleInputChange}
              />
              <label htmlFor="muenchen">Мюнхен</label>
            </Box>

            <Box display="flex" alignItems="center">
              <Checkbox
                name="dusseldorf"
                checked={userData.dusseldorf}
                onChange={handleInputChange}
              />
              <label htmlFor="dusseldorf">Дюссельдорф</label>
            </Box>

            <Box display="flex" alignItems="center">
              <Checkbox
                name="hamburg"
                checked={userData.hamburg}
                onChange={handleInputChange}
              />
              <label htmlFor="hamburg">Гамбург</label>
            </Box>

            <Box display="flex" alignItems="center">
              <Checkbox
                name="frankfurt"
                checked={userData.frankfurt}
                onChange={handleInputChange}
              />
              <label htmlFor="frankfurt">Франкфурт</label>
            </Box>

            <Typography variant="body1" fontWeight={500} textAlign="center" mb={2}>
              Выберите интересующие вас категории:
            </Typography>


            <Box display="flex" alignItems="center">
              <Checkbox
                name="children_info"
                checked={userData.children_info}
                onChange={handleInputChange}
              />
              <label htmlFor="children_info">Дети</label>
            </Box>

            <Box display="flex" alignItems="center">
              <Checkbox
                name="doctors_info"
                checked={userData.doctors_info}
                onChange={handleInputChange}
              />
              <label htmlFor="doctors_info">Врачи</label>
            </Box>

            <Box display="flex" alignItems="center">
              <Checkbox
                name="hair_beauty_info"
                checked={userData.hair_beauty_info}
                onChange={handleInputChange}
              />
              <label htmlFor="hair_beauty_info">Парикмахерские и красота</label>
            </Box>

            <Box display="flex" alignItems="center">
              <Checkbox
                name="legal_services_info"
                checked={userData.legal_services_info}
                onChange={handleInputChange}
              />
              <label htmlFor="legal_services_info">Юридические услуги</label>
            </Box>

            <Box display="flex" alignItems="center">
              <Checkbox
                name="restaurants_info"
                checked={userData.restaurants_info}
                onChange={handleInputChange}
              />
              <label htmlFor="restaurants_info">Рестораны и кафе</label>
            </Box>

            <Box display="flex" alignItems="center">
              <Checkbox
                name="shops_info"
                checked={userData.shops_info}
                onChange={handleInputChange}
              />
              <label htmlFor="shops_info">Магазины</label>
            </Box>

            <Box display="flex" alignItems="center">
              <Checkbox
                name="translators_info"
                checked={userData.translators_info}
                onChange={handleInputChange}
              />
              <label htmlFor="translators_info">Переводчики</label>
            </Box>

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
          </Box>
        </Form>
      </Subscriptions>
      <Footer />
    </>
  );
}

export default UserAccount;