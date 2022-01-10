import styled from "styled-components";
import { Link } from "react-router-dom";

export const Main = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerButtonBack = styled.div`
  width: 100%;
  margin-top: 24px;
`;

export const Image = styled.img`
  width: 32px;
  height: 32px;
`;

export const ButtonBack = styled(Link)`
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

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;

  justify-content: center;

  align-items: center;
`;

export const ContainerPet = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
`;

export const ContainerImagePet = styled.div`
  max-width: 400px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImagePet = styled.img`
  width: 400px;
  height: 280px;

  border-radius: 8px;

  margin-bottom: 24px;
`;

export const Button = styled.button`
  width: 144px;
  height: 40px;

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

export const ContainerDescriptionPet = styled.div``;

export const Name = styled.h1`
  width: 100%;

  font-size: 24px;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};

  padding-bottom: 16px;

  border-bottom: 2px solid ${(props) => props.theme.colors.tertiary};
`;

export const Detail = styled.p`
  margin-top: 16px;
  font-size: 14px;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: 500;

  color: ${(props) => props.theme.colors.tertiary};

  padding-bottom: 16px;

  border-bottom: 2px solid ${(props) => props.theme.colors.tertiary};
`;

export const ContainerAboutPet = styled.div`
  margin-top: 16px;

  margin-bottom: 16px;
`;

export const Title = styled.h2`
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: 500;
  color: ${(props) => props.theme.colors.detail};

  margin-bottom: 8px;
`;

export const AboutPet = styled.p`
  width: 384px;

  font-size: 14px;
  font-family: ${(props) => props.theme.fonts.montserrat};
  color: ${(props) => props.theme.colors.text};

  text-align: justify;

  line-height: 18px;
`;
