import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

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

export const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerInputs = styled.div`
  width: ${(props) => (props.type ? "" : "60%")};
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

export const Select = styled.select`
  width: 290px;
  height: 48px;

  margin-top: 16px;
  padding-left: 16px;

  border-radius: 8px;
  outline: none;
  border: none;
  background-color: ${(props) => props.theme.colors.input};

  font-family: ${(props) => props.theme.fonts.montserrat};
  font-size: 14px;
  font-weight: 500;

  ${(props) => {
    switch (props.color) {
      case "default":
        return css`
          color: ${(props) => props.theme.colors.tertiary};
        `;

      default:
        return css`
          color: ${(props) => props.theme.colors.text};
        `;
    }
  }}
`;

export const Option = styled.option`
  background-color: ${(props) => props.theme.colors.input};

  color: ${(props) => props.theme.colors.tertiary};
  font-weight: 500;

  border-radius: 16px;
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

export const ContainerPersonality = styled.div`
  width: 592px;

  margin-top: 16px;
  padding-top: 16px;
  padding-left: 16px;
  padding-bottom: 16px;

  border-radius: 8px;

  background-color: ${(props) => props.theme.colors.input};

  outline: none;
  border: none;
  color: ${(props) => props.theme.colors.tertiary};

  font-family: ${(props) => props.theme.fonts.montserrat};
  font-size: 14px;
  font-weight: 500;
`;

export const Text = styled.p`
  margin-bottom: 16px;
`;

export const ContainerCheckbox = styled.div`
  margin-left: 16px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: auto;
  grid-gap: 16px;

  justify-content: center;
`;

export const Label = styled.label`
  width: 112px;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  margin-right: 8px;

  background-color: ${(props) => props.theme.colors.input};
`;

export const Description = styled.textarea`
  width: 592px;
  height: 120px;

  resize: none;

  margin-top: 16px;
  padding-top: 16px;
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
