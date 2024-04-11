import { useLocation } from "react-router-dom"
import { colors } from "styles/colors"
import LoginPage from "./login/Login"
import RegisterPage from "./register/Register"
import { Box } from "@mui/material"
import { Auth, Form } from "./styles"
import { useState } from "react"
import { instance } from "../../utils/axios"
import Header from "components/Header"
import Footer from "components/Footer"
import { GermanMainLogo } from "assets"

const AuthRootComponent: React.FC = (): JSX.Element => {
  const [username, setEmailLog] = useState("")
  const [password, setPasswordLog] = useState("")

  const location = useLocation()

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()

    if (location.pathname === "/login") {
      console.log("location.pathname =>", location.pathname)
      const userDataLog = {
        username,
        password,
      }
      const user = await instance.post("/auth/login", userDataLog, {
        headers: { accept: "*/*", "Content-Type": "application/json" },
      })
      console.log("user", user.data)
    } else if (location.pathname === "/user_login/register") {
      console.log("location.pathname =>", location.pathname)
      const userDataReg = {
        username,
        password,
      }
      const newUser = await instance.post("/user_login/register", userDataReg, {
        headers: { accept: "*/*", "Content-Type": "application/json" },
      })
      console.log("user", newUser.data)
    }
  }
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
      <Auth>
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
            {location.pathname === "/login" ? (
              <LoginPage
                setEmailLog={setEmailLog}
                setPasswordLog={setPasswordLog}
              />
            ) : location.pathname === "/user_login/register" ? (
              <RegisterPage
                setEmailLog={setEmailLog}
                setPasswordLog={setPasswordLog}
              />
            ) : null}
          </Box>
        </Form>
      </Auth>
      <Footer />
    </>
  )
}

export default AuthRootComponent
