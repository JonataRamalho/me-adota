import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Main = styled.main`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;

export const ContainerButtonBack = styled.div`
  width: 100%;
  margin-top: 24px;
  margin-bottom: 40px;

  display: flex;

  justify-content: space-between;
`;

export const Image = styled.img`
  width: 32px;
  height: 32px;
`;

export const ButtonBackMenu = styled(Link)`
  width: 280px;
  cursor: pointer;

  color: ${(props) => props.theme.colors.tertiary};

  text-decoration: none;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-size: 18px;
  font-weight: bold;

  margin-left: 24px;

  display: flex;
  align-items: center;
`;

export const ContainerInstitutionsList = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;

  align-items: center;
`;

export const ContainerInstitutions = styled.div`
  width: 100%;

  margin-top: 16px;
  margin-left: 40px;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, auto));
  row-gap: 64px;
`;

export const ContainerInstitution = styled(Link)`
  display: flex;
  flex-direction: column;

  justify-content: center;

  width: 168px;

  text-decoration: none;
`;

export const Name = styled.p`
  width: 162px;

  padding-bottom: 8px;
  color: ${(props) => props.theme.colors.primary};

  font-family: ${(props) => props.theme.fonts.montserrat};
  font-size: 20px;
  font-weight: bold;
  line-height: 20px;

  border-bottom: 1px solid ${(props) => props.theme.colors.line};
`;

export const Detail = styled.p`
  margin-top: 8px;

  color: ${(props) => props.theme.colors.tertiary};

  font-family: ${(props) => props.theme.fonts.montserrat};
  font-size: 12px;
  font-weight: 500;
`;

export const ContainerPage = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 32px;
`;

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in;

  font-size: 14px;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: bold;
  color: ${(props) => props.theme.colors.detail};

  margin-right: 16px;
  margin-left: 16px;

  background-color: transparent;

  &:hover {
    color: ${(props) => props.theme.colors.tertiary};
  }
`;

export const Number = styled.p`
  color: ${(props) => props.theme.colors.detail};

  font-family: ${(props) => props.theme.fonts.montserrat};
  font-size: 14px;
  font-weight: 500;
`;
