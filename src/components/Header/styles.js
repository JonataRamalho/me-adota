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
  padding-right: 16px;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Button = styled.button`
  width: 128px;
  height: 36px;

  background-color: ${(props) =>
    props.color ? props.theme.colors.detail : props.theme.colors.primary};
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 40px;
  transition: 0.2s ease-in;

  font-size: 14px;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: bold;
  color: ${(props) => props.theme.colors.secondary};

  &:hover {
    background-color: ${(props) =>
      props.hover
        ? props.theme.colors.tertiary
        : props.theme.colors.background};
  }
`;
