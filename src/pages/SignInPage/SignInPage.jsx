import { useState, useEffect } from "react";
import {PageContainer, Form, Input, Button } from "./Styles";
import Logo from "../../components/Logo/Logo";
import Footer from "../../components/Footer/Footer";
import axios from "axios";

export default function SignInPage() {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setUser(prev => ({ ...prev, [e.target.name]:e.target.value }))
  };

  useEffect(() => {
    const sessionToken = localStorage.getItem("token");
    if (sessionToken) {
      setToken(sessionToken);
      navigate("/");
    }
  }, []);

  function signIn(e) {
    e.preventDefault();

    const data = { email: user.email, password: user.password };

    const req = axios.post(`${import.meta.env.VITE_API_URL}/signin`, data);

    req.then(res => {
      setToken(res.data.token);
      localStorage.setItem("token", res.data.token);
      navigate("/home");
    });

    req.catch(res =>
      alert(`Failed to sign in! ${res.response.data}`)
    );
  }

  return (
    <PageContainer>
      <Logo />
      <Form onSubmit={signIn}>
        <Input
          placeholder="e-mail"
          type="email"
          name="email"
          onChange={handleChange}
        />
        <Input
          placeholder="password"
          type="password"
          name="password"
          onChange={handleChange}
        />
        <Button type="submit">sign in</Button>
      </Form>
      <Footer />
    </PageContainer>
  )
}