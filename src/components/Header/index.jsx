import {
  NavBar,
  LogoContainer,
  Logo,
  ButtonsContainer,
  // Button,
} from "./styles";

import { Button } from "../index";

import logo from "../../assets/meadota.png";

const Header = () => {
  return (
    <NavBar>
      <LogoContainer to="/">
        <Logo src={logo} alt="Logo Me Adota" />
      </LogoContainer>
      <ButtonsContainer>
        <Button to="/register" content="Cadastre-se" typeButton={"register"} />
        <Button to="/login" content={"Entrar"} typeButton></Button>
      </ButtonsContainer>
    </NavBar>
  );
};

export default Header;
