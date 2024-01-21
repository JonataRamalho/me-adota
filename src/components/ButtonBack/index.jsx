import { ButtonBackMenu, ContainerButtonBack, Image } from "./styles";
import arrowLeft from "../../assets/arrow-left.svg";
import arrowLeftWhite from "../../assets/arrow-left-white.svg";

const ButtonBack = ({ text, url, isDashboard }) => {
  return (
    <ContainerButtonBack>
      <ButtonBackMenu to={url} $isDashboard={isDashboard}>
        <Image src={isDashboard ? arrowLeftWhite : arrowLeft} /> {text}
      </ButtonBackMenu>
    </ContainerButtonBack>
  );
};

export default ButtonBack;
