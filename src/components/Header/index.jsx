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

const Header = (props) => {
  function showInitialHeader() {
    return (
      <ButtonsContainer>
        <Button to="/register" content="Cadastre-se" typeButton={"register"} />
        <Button to="/login" content={"Entrar"} typeButton></Button>
      </ButtonsContainer>
    );
  }

  function showOptionsHeader() {
    return (
      <ButtonsContainer>
        <ButtonHeader to="/perfil" color={false}>
          <Image src={user} /> Teste
        </ButtonHeader>
        <ButtonHeader to="/" color={true}>
          <Image src={logOut} />
          Sair
        </ButtonHeader>
      </ButtonsContainer>
    );
  }

  function renderHeader() {
    if (props.type === 0) {
      return showInitialHeader();
    } else if (props.type === 1) {
      return showOptionsHeader();
    }
  }

  return (
    <NavBar>
      <LogoContainer to="/">
        <Logo src={logo} alt="Logo Me Adota" />
      </LogoContainer>
      {renderHeader()}
    </NavBar>
  );
};

export default Header;
