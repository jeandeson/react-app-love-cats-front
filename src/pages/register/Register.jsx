import React, { useEffect } from "react";
import { useState } from "react";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import AuthService from "../../services/authService";
import Title from "../../components/form/title/Title";
import Subtitle from "../../components/form/subtitle/SubTitle";
import Input from "../../components/form/input/Input";
import Button from "../../components/form/button/Button";
import Footer from "../../components/form/footer/Footer";
import { hideEffect } from "../../generics/useHideEffect";
import "./Register.css";

const Form = () => {
  const authService = new AuthService();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  // const [successLogin, setSuccessLogin] = useState(false);

  const handleForm = (e) => {
    e.name === "email" ? setEmail(e.value) : setPassword(e.value);
    switch (e.name) {
      case "email":
        setEmail(e.value);
        break;
      case "name":
        setName(e.value);
        break;
      case "password":
        setPassword(e.value);
        break;
      default:
    }
  };

  const handleRegister = async () => {
    const loginForm = {
      email: email,
      name: name,
      password: password,
    };

    const data = await authService.register(loginForm);
    if (data) {
      // setSuccessLogin(true);
      console.log("Logado com successo");
      window.location.href = "/";
    }
  };

  useEffect(() => {
    hideEffect();
  }, []);

  return (
    <div className="form-container">
      <form className="form-login">
        <Title Title={"Register"} />
        <Subtitle Title={"Register a new account"} />
        <Input
          value={email}
          Icon={() => <MdAlternateEmail />}
          name={"email"}
          onChange={handleForm}
          type={"text"}
          placeholder={"Email"}
        />
        <Input
          Icon={() => <MdAlternateEmail />}
          value={name}
          name={"name"}
          onChange={handleForm}
          type={"text"}
          placeholder={"name"}
        />
        <Input
          Icon={() => <RiLockPasswordLine />}
          name={"password"}
          value={password}
          onChange={handleForm}
          type={"password"}
          placeholder={"Password"}
        />
        <Button onClick={handleRegister} type="button" text="Register" />
      </form>
      <Footer text={"Already have an account? "} href={"/login"} hrefText={"Login"} />
    </div>
  );
};

export default Form;
