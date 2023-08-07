import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import Footer from "../../components/Footer/Footer";
import { PageContainer, InputContainer, CreateButton, Input, ButtonsContainer, Button } from "./Styles";
import axios from "axios";

export default function HomePage() {
  const [url, setUrl] = useState({
    longUrl: "",
    shortUrl: ""
  });

  const [input, setInput] = useState({
    cursor: "not-allowed",
    disabled: true,
    placeholder: "sign in to short your links",
    value: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUrl(prev => ({ ...prev, [e.target.name]:e.target.value }))
  };

  useEffect(() => {
    const sessionToken = localStorage.getItem("token");
    if (sessionToken) {
      setInput({ cursor:"default", disabled:false, placeholder:"insert long url" });
    }
  }, []);

  function createShortUrl(e) {
    e.preventDefault();

    const data = { url: url.longUrl };
    
    const req = axios.get(`${import.meta.env.VITE_API_URL}/urls/shorten`, data);

    req.then(res => {
      setUrl({ shortUrl:res.data.shortUrl });
      setInput({ value:res.data.shortUrl });
    });

    req.catch(res =>
      alert(`Failed to create short url! ${res.response.data}`)
    );
  }

  return (
    <PageContainer>
      <Logo />
      <InputContainer>
        <Input
          placeholder={input.placeholder}
          disabled={input.disabled}
          cursor={input.cursor}
          type="text"
          name="longUrl"
          value={input.value}
          onChange={handleChange}
        />
        <CreateButton onClick={createShortUrl}>short link</CreateButton>
      </InputContainer>
      <ButtonsContainer>
        <Button onClick={() => navigate("/sign-up")}>sign up</Button>
        <Button onClick={() => navigate("/sign-in")}>sign in</Button>
      </ButtonsContainer>
      <Footer />
    </PageContainer>
  );
}