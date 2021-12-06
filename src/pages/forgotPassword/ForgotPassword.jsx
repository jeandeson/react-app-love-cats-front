import React, { useEffect } from "react";
import { useState } from "react";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { SiJsonwebtokens } from "react-icons/si";
import AuthService from "../../services/authService";
import Title from "../../components/form/title/Title";
import Subtitle from "../../components/form/subtitle/SubTitle";
import Input from "../../components/form/input/Input";
import Button from "../../components/form/button/Button";
import Footer from "../../components/form/footer/Footer";
import { hideEffect } from "../../generics/useHideEffect";
import "./ForgotPassword.css";

const Form = () => {
  const authService = new AuthService();

  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const [steps, setSteps] = useState(1);
  const [errors, setErrors] = useState("");

  const handleSteps = async () => {
    try {
      const { data } = await authService.sendResetPassEmail({ email: email });
      console.log(data);
      setSteps(steps + 1);
    } catch (error) {
      if (error.response) {
        console.log(error.response);
        setErrors(error.response.data.error);
      }
    }
  };

  const handleForm = (e) => {
    switch (e.name) {
      case "email":
        setEmail(e.value);
        break;
      case "token":
        setToken(e.value);
        break;
      case "password":
        setPassword(e.value);
        break;
      default:
    }
  };

  const handleResetPassword = async () => {
    if (steps === 2) {
      //dossomenthing
      const body = {
        email: email,
        token: token,
        password: password,
      };
      try {
        const { data } = await authService.resetUserPassword(body);
        if (data) {
          alert("your password was reseted");
          window.location.pathname = "/login";
        }
      } catch (error) {
        console.log(error.response);
        setErrors(error.response.data.error);
      }
    }
  };

  useEffect(() => {
    hideEffect();
  }, []);

  return (
    <div className="form-container">
      <form className="form-login">
        {steps === 1 ? (
          <>
            <Title Title={"Password Reset"} />
            <Subtitle Title={"Recover your account"} />
            {errors && <Subtitle color="red" Title={errors} />}
            <Input
              Icon={() => <MdAlternateEmail />}
              value={email}
              name={"email"}
              onChange={handleForm}
              type={"text"}
              placeholder={"Email"}
            />
            <Button onClick={handleSteps} type="button" text="Next" />
          </>
        ) : (
          <>
            <Title Title={"Password Reset"} />
            <Subtitle Title={"Recover your account"} />
            <Subtitle Title={"The token was sent to your email"} />
            {errors && <Subtitle Title={errors} color="red" />}
            <Input
              value={token}
              Icon={() => <SiJsonwebtokens />}
              name={"token"}
              autocomplete={"new-password"}
              onChange={handleForm}
              type={"field"}
              placeholder={"Token"}
            />
            <Input
              Icon={() => <RiLockPasswordLine />}
              autocomplete={"new-password"}
              name={"password"}
              value={password}
              onChange={handleForm}
              type={"password"}
              placeholder={"New Password"}
            />
            <Button onClick={handleResetPassword} type="button" text="Reset Now" />
          </>
        )}
      </form>
      <Footer text={"remembered your password? "} href={"/login"} hrefText={"Login"} />
    </div>
  );
};

export default Form;
