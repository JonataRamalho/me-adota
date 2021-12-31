import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const GeneralButton = styled(Link)`
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in;

  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: bold;
  color: ${(props) => props.theme.colors.secondary};

  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) => {
    switch (props.typebutton) {
      case "register":
        return css`
          width: 128px;
          height: 36px;

          border-radius: 40px;

          font-size: 14px;

          background-color: ${(props) => props.theme.colors.detail};

          &:hover {
            background-color: ${(props) => props.theme.colors.tertiary};
          }
        `;

      case "adopt":
        return css`
          width: 208px;
          height: 46px;

          border-radius: 40px;

          margin-top: 8px;

          font-size: 18px;

          background-color: ${(props) => props.theme.colors.primary};

          &:hover {
            background-color: ${(props) => props.theme.colors.background};
          }
        `;

      default:
        return css`
          width: 128px;
          height: 36px;

          border-radius: 40px;

          font-size: 14px;

          background-color: ${(props) => props.theme.colors.primary};

          &:hover {
            background-color: ${(props) => props.theme.colors.background};
          }
        `;
    }
  }}
`;
