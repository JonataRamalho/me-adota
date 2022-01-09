import { Link } from "react-router-dom";
import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  width: 190px;
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

export const ContainerRegisteredPets = styled.div`
  width: 100%;
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
  align-self: center;
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

export const ContainerButtonNext = styled.div`
  width: 92%;

  margin-top: 16px;

  display: flex;
  justify-content: flex-end;
`;

export const ButtonNext = styled.button`
  width: 128px;
  height: 36px;

  border: none;
  cursor: pointer;
  transition: 0.2s ease-in;

  font-size: 14px;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: bold;
  color: ${(props) => props.theme.colors.secondary};

  border-radius: 6px;

  background-color: ${(props) => props.theme.colors.primary};

  &:hover {
    background-color: ${(props) => props.theme.colors.background};
  }
`;
