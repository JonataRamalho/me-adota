import { Link } from "react-router-dom";
import styled from "styled-components";

export const Main = styled.main`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;

export const ContainerButtonBack = styled.div`
  width: 100%;
  margin-bottom: 24px;
`;

export const Image = styled.img`
  width: 32px;
  height: 32px;
`;

export const ButtonBackMenu = styled(Link)`
  width: fit-content;
  cursor: pointer;

  color: ${(props) => props.theme.colors.tertiary};

  text-decoration: none;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-size: 18px;
  font-weight: bold;

  transition: 0.2s ease-in;

  margin-top: 16px;
  margin-left: 24px;

  display: flex;
  align-items: center;
`;

export const ButtonBack = styled.a`
  width: fit-content;
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

export const ContainerRegisteredPets = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ContainerSelectedPet = styled.div`
  width: 330px;

  display: flex;
  flex-direction: row;
  margin-left: 24px;
`;

export const ButtonPet = styled.a`
  width: 110px;
  padding-bottom: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  border-bottom: 3px solid
    ${(props) =>
      props.selected
        ? props.theme.colors.primary
        : props.theme.colors.tertiary};

  color: ${(props) =>
    props.selected ? props.theme.colors.primary : props.theme.colors.tertiary};

  text-decoration: none;
  text-align: center;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-size: 16px;

  font-weight: 500;
`;

export const ContainerPets = styled.div`
  margin-top: 16px;
  margin-left: 32px;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  row-gap: 16px;
`;

export const ContainerPet = styled(Link)`
  display: flex;
  flex-direction: column;

  width: 168px;

  text-decoration: none;
`;

export const ImagePet = styled.img`
  width: 168px;
  height: 112px;

  border-radius: 6px;
`;

export const ContainerDetails = styled.div`
  margin-top: 8px;
`;

export const Name = styled.p`
  width: 162px;
  padding-bottom: 8px;
  color: ${(props) => props.theme.colors.primary};

  font-family: ${(props) => props.theme.fonts.montserrat};
  font-size: 14px;
  font-weight: 500;

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

  margin-bottom: 18px;
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
