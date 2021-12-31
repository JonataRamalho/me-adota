import React from "react";

import { GeneralButton } from "./styles";

const Button = (props) => {
  return (
    <GeneralButton to={props.to} typebutton={props.typeButton.toString()}>
      {props.content}
    </GeneralButton>
  );
};

export default Button;
