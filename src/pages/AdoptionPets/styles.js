import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { FormControlLabel } from "@mui/material";

export const Main = styled.main`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  /* background-color: red; */
`;

export const ContainerButtonBack = styled.div`
  width: 100%;
  margin-top: 16px;
  margin-bottom: 16px;

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

export const ButtonModal = styled.button`
  width: 208px;
  height: 40px;

  margin-top: 16px;
  margin-right: ${(props) => (props.modal ? "" : "24px")};

  border-radius: 64px;
  outline: none;
  cursor: pointer;
  border: none;

  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};

  font-family: ${(props) => props.theme.fonts.montserrat};
  font-size: 14px;
  font-weight: bold;

  transition: 0.2s ease-in;

  &:hover {
    background-color: ${(props) => props.theme.colors.background};
  }
`;

export const ContainerAdoptionPets = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* background-color: aliceblue; */
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

  /* width: 100%; */
  /* background-color: red; */
  display: grid;
  /* align-self: center; */
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

export const ContainerSearch = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
  width: 448px;
  height: 632px;
  border-radius: 24px;

  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContainerSearchPet = styled.div`
  width: 344px;
  margin-top: 16px;

  ${(props) => {
    if (props.button) {
      return css`
        margin-top: 8px;
        display: flex;
        justify-content: end;
      `;
    }
  }}
`;

export const TitleSearch = styled.p`
  width: 100%;
  padding-bottom: 6px;

  font-family: ${(props) => props.theme.fonts.montserrat};
  font-size: 16px;

  border-bottom: 1px solid ${(props) => props.theme.colors.primary};
`;

export const ContainerCheckbox = styled.div`
  margin-top: 12px;
`;

export const ControlLabel = styled(FormControlLabel)`
  font-family: ${(props) => props.theme.fonts.montserrat} !important;
`;

export const ButtonSearch = styled.button`
  width: 160px;
  height: 36px;

  border-radius: 32px;
  border: none;

  cursor: pointer;
  transition: 0.2s ease-in;

  font-size: 14px;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: bold;
  color: ${(props) => props.theme.colors.secondary};

  background-color: ${(props) => props.theme.colors.primary};

  &:hover {
    background-color: ${(props) => props.theme.colors.background};
  }
`;
