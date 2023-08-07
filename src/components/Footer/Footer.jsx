import home from "../../assets/home.svg";
import trophy from "../../assets/trophy.svg";
import { FooterContainer } from "./Styles";
import { useNavigate } from "react-router-dom";

export default function Footer(){
  const navigate = useNavigate();

  return (
    <FooterContainer>
      <img src={home} onClick={() => navigate("/")}/>
      <img src={trophy} onClick={() => navigate("/ranking")}/>
    </FooterContainer>
  )
}