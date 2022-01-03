import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 48px;
`;

export const ContainerButtonBack = styled.div`
  width: 100%;
  max-width: 736px;

  margin-bottom: 24px;
`;

export const Image = styled.img`
  width: 32px;
  height: 32px;
`;

export const ButtonBack = styled.a`
  cursor: pointer;

  color: ${(props) => props.theme.colors.tertiary};

  font-family: ${(props) => props.theme.fonts.montserrat};
  font-size: 18px;
  font-weight: bold;

  transition: 0.2s ease-in;

  display: flex;

  align-items: center;
`;

export const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerInputs = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-around;
`;

export const Input = styled.input`
  width: 272px;
  height: 48px;

  margin-top: 16px;
  padding-left: 16px;

  border-radius: 8px;
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

export const Button = styled.button`
  width: 290px;
  height: 48px;

  border-radius: 8px;
  border: none;
  cursor: pointer;
  background-color: ${(props) =>
    props.check ? props.theme.colors.detail : props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};

  margin-top: 16px;

  font-family: ${(props) => props.theme.fonts.montserrat};
  font-size: 16px;
  font-weight: bold;

  transition: 0.2s ease-in;

  &:hover {
    background-color: ${(props) =>
      props.check
        ? props.theme.colors.tertiary
        : props.theme.colors.background};
  }
`;
