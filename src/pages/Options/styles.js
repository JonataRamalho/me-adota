import styled from "styled-components";
import { Link } from "react-router-dom";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: center;

  height: 72%;
`;

export const ContainerOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  grid-gap: 7rem;
`;

export const ContainerContent = styled.div``;

export const ContainerDetail = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  width: 72px;
  height: 72px;
  border-radius: 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 16px;
`;

export const Button = styled(Link)`
  width: 112px;
  display: flex;
  flex-direction: column;

  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in;

  font-size: 14px;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};

  &:hover {
    color: ${(props) => props.theme.colors.background};
  }
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
`;
