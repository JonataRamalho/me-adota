import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const LogoContainer = styled(Link)`
  padding-top: 16px;
  padding-left: 16px;
`;

export const Logo = styled.img`
  width: 192px;
  height: 96px;
`;

export const ButtonsContainer = styled.div`
  width: 30%;
  max-width: 350px;

  padding-right: 16px;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const ButtonHeader = styled(Link)`
  background-color: transparent;
  text-decoration: none;
  outline: none;
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;

  font-size: 14px;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: bold;
  color: ${(props) =>
    props.color ? props.theme.colors.tertiary : props.theme.colors.primary};
`;

export const Image = styled.img`
  margin-right: 8px;

  width: 24px;
  height: 24px;
`;
