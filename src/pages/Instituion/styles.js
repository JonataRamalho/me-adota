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

export const ContainerInstituion = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
`;

export const Name = styled.h1`
  font-size: 24px;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: bold;
  color: ${(props) => props.theme.colors.detail};

  margin-bottom: 48px;
`;

export const ContainerInformation = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  row-gap: 32px;
  justify-items: center;
`;

export const ContainerAboutInstituion = styled.div`
  width: 304px;
  margin-left: 56px;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: 500;
  color: ${(props) => props.theme.colors.detail};

  margin-bottom: 8px;
`;

export const ContainerDetails = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ContainerDetail = styled.div`
  margin-right: 32px;
`;

export const Information = styled.p`
  font-size: 14px;
  font-family: ${(props) => props.theme.fonts.montserrat};
  color: ${(props) => props.theme.colors.text};
  text-align: justify;

  line-height: 18px;

  margin-bottom: 8px;
`;

export const Social = styled.a`
  cursor: pointer;
  text-decoration: none;
`;
