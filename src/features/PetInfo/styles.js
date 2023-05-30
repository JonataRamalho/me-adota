import { Button, Skeleton, Tabs } from "@mui/material";
import styled from "styled-components";

export const ContainerPetInfo = styled.div`
  width: 100%;
  height: 100%;
`;

export const ContainerPage = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Page = styled.p`
  font-size: 18px;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: 700;
  color: ${(props) => props.theme.colors.tertiary};
`;

export const ContainerContent = styled.div`
  width: 100%;
  height: calc(100% - 34px);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${(props) =>
    props.$isImage === false ? "center" : "start"};
`;

export const Image = styled.img`
  background-color: aliceblue;
  min-height: 192px;
  min-width: 272px;
  width: 50%;
  height: 65%;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  margin-bottom: 24px;
`;

export const SkeletonImage = styled(Skeleton)`
  && {
    min-height: 240px;
    min-width: 272px;
    width: 30%;
    height: 65%;
  }
  /* min-height: px;
  min-width: 272px;
  width: 50%;
  height: 65%; */
`;

export const ContainerImage = styled.div`
  width: 50%;
  height: 50%;

  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 240px);
  grid-column-gap: 48px;
  grid-row-gap: 20px;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  width: 240px;
  height: 44px;

  padding-left: 16px;

  border-radius: 4px;
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

export const ButtonCustom = styled(Button)`
  && {
    font-family: ${(props) => props.theme.fonts.montserrat};
    font-weight: 700;
    text-transform: initial;
    font-size: 18px;
    color: ${(props) => props.theme.colors.secondary};

    background-color: ${(props) =>
      props.delete ? props.theme.colors.delete : props.theme.colors.primary};

    width: 258px;
    height: 44px;
    border-radius: 4px;

    box-shadow: none;

    &:hover {
      background-color: ${(props) =>
        props.delete ? props.theme.colors.delete : props.theme.colors.primary};
      box-shadow: none;
      opacity: 0.8;
      transition: 400ms;
    }
  }
`;

export const ContainerButtons = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 240px);
  grid-column-gap: 48px;
  justify-content: center;
  align-items: center;

  margin-top: 20px;
`;

export const TabsCustom = styled(Tabs)`
  .Mui-selected {
    color: ${(props) => props.theme.colors.background} !important;
  }

  button {
    font-family: ${(props) => props.theme.fonts.montserrat} !important;
    text-transform: initial;
    font-weight: 500 !important;
    color: ${(props) => props.theme.colors.title} !important;
    font-size: 16px;
  }

  .MuiTabs-indicator {
    background-color: ${(props) => props.theme.colors.background} !important;
  }
`;

export const Description = styled.textarea`
  width: 532px;
  height: 120px;

  resize: none;

  margin-top: 4px;
  padding-top: 16px;
  padding-left: 16px;

  border-radius: 4px;
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

export const ContainerContentInputs = styled.div`
  height: 70%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
