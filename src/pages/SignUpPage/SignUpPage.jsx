import { useState } from "react";
import  { PageContainer, Form, Input, Button } from "./Styles";
import Logo from "../../components/Logo/Logo";
import Footer from "../../components/Footer/Footer";
import axios from "axios";

export default function SignUpPage() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setUser(prev => ({ ...prev, [e.target.name]:e.target.value }))
  };

  function signUp(e) {
    e.preventDefault();

    const data = { name: user.name, email: user.email, password: user.password, confirmPassword: user.confirmPassword };
    
    const req = axios.post(`${import.meta.env.VITE_API_URL}/signup`, data);

    req.then(
      navigate("/sign-in")
    );
    
    req.catch(res =>
      alert(`Failed to sign up! ${res.response.data}`)
    );
    
  }

  return (
    <PageContainer>
      <Logo />
      <Form onSubmit={signUp}>
        <Input
          placeholder="name"
          type="text"
          name="name"
          onChange={handleChange}
        />
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
        <Input
          placeholder="confirm password"
          type="password"
          name="confirmPassword"
          onChange={handleChange}
        />
        <Button type="submit">sign up</Button>
      </Form>
      <Footer />
    </PageContainer>
  )
}