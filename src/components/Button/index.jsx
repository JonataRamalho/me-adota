import React from "react";

import { GeneralButton } from "./styles";

const Button = (props) => {
  return (
    <GeneralButton to={props.to} typeButton={props.typeButton}>
      {props.content}
    </GeneralButton>
  );
};

export default Button;
