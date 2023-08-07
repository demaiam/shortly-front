import shorts from "../../assets/shorts.svg";
import { LogoContainer, Title } from "./Styles";

export default function Logo(){
  return (
    <LogoContainer>
      <img src={shorts} />
      <Title>shortly</Title>
    </LogoContainer>
  )
}