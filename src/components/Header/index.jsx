import {
  Image,
  NavBar,
  LogoContainer,
  Logo,
  ButtonsContainer,
  ButtonHeader,
} from "./styles";

import { Button } from "../index";

import logo from "../../assets/meadota.png";
import user from "../../assets/user-blue.svg";
import logOut from "../../assets/log-out.svg";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { GeneralProviderContext } from "../../features";

const Header = (props) => {
  const [nameInstituion, setNameInstituion] = useState("");

  const { institutionData } = useContext(GeneralProviderContext);

  useEffect(() => {
    try {
      const { name } = JSON.parse(institutionData);

      setNameInstituion(name);
    } catch (error) {}
  }, [institutionData]);

  function showInitialHeader() {
    return (
      <NavBar>
        <LogoContainer to="/">
          <Logo src={logo} alt="Logo Me Adota" />
        </LogoContainer>
        <ButtonsContainer>
          <Button
            to="/cadastrar"
            content="Cadastre-se"
            typeButton={"register"}
          />
          <Button to="/login" content={"Entrar"} typeButton></Button>
        </ButtonsContainer>
      </NavBar>
    );
  }

  function showOptionsHeader() {
    return (
      <NavBar>
        <LogoContainer to="/menu">
          <Logo src={logo} alt="Logo Me Adota" />
        </LogoContainer>
        <ButtonsContainer>
          <ButtonHeader to="/perfil" color={false}>
            <Image src={user} /> {nameInstituion}
          </ButtonHeader>
          <ButtonHeader
            to="/"
            onClick={() => localStorage.clear()}
            color={true}
          >
            <Image src={logOut} />
            Sair
          </ButtonHeader>
        </ButtonsContainer>
      </NavBar>
    );
  }

  function showSearchHeader() {
    return (
      <NavBar>
        <LogoContainer to="/">
          <Logo src={logo} alt="Logo Me Adota" />
        </LogoContainer>
      </NavBar>
    );
  }

  function renderHeader() {
    if (props.type === 0) {
      return showInitialHeader();
    } else if (props.type === 1) {
      return showOptionsHeader();
    } else if (props.type === 2) {
      return showSearchHeader();
    }
  }

  return renderHeader();
};

export default Header;
