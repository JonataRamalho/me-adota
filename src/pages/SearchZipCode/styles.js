import styled from "styled-components";
import { Link } from "react-router-dom";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 96px;
`;

export const ContainerTile = styled.div`
  text-align: center;
  line-height: 26px;

  width: 408px;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 408px;

  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 408px;
  height: 48px;

  margin-top: 16px;
  padding-left: 16px;

  border-radius: 64px;
  outline: none;
  border: none;
  background-color: ${(props) => props.theme.colors.input};
  color: ${(props) => props.theme.colors.text};

  font-family: ${(props) => props.theme.fonts.montserrat};
  font-size: 14px;
  font-weight: 500;

  ::-webkit-input-placeholder {
    color: ${(props) => props.theme.colors.tertiary};
  }
`;

export const Button = styled(Link)`
  width: 204px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 40px;
  text-decoration: none;
  border: none;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};

  margin-top: 16px;

  font-family: ${(props) => props.theme.fonts.montserrat};
  font-size: 16px;
  font-weight: bold;

  transition: 0.2s ease-in;

  &:hover {
    background-color: ${(props) => props.theme.colors.background};
  }
`;
