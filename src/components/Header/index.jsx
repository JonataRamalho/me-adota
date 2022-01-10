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
            <Image src={user} /> Teste
          </ButtonHeader>
          <ButtonHeader to="/" color={true}>
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
