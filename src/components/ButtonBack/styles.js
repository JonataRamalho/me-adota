import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerButtonBack = styled.div`
  width: 100%;
  margin-bottom: 16px;
`;

export const ButtonBackMenu = styled(Link)`
  width: 240px;
  cursor: pointer;

  color: ${(props) =>
    props.$isDashboard
      ? props.theme.colors.backButtonDashboard
      : props.theme.colors.tertiary};

  text-decoration: none;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-size: 18px;
  font-weight: bold;

  transition: 0.2s ease-in;

  margin-top: 24px;
  margin-left: 24px;

  display: flex;
  align-items: center;
`;

export const ButtonBack = styled.a`
  width: 100px;
  cursor: pointer;

  color: ${(props) => props.theme.colors.tertiary};

  text-decoration: none;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-size: 18px;
  font-weight: bold;

  transition: 0.2s ease-in;

  margin-top: 24px;
  margin-left: 24px;

  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  width: 32px;
  height: 32px;
`;
