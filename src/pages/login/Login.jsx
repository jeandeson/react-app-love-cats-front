import React, { useEffect } from "react";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { hideEffect } from "../../generics/useHideEffect";
import UseFormValidation from "../../generics/useFormValidation";
import AuthService from "../../services/authService";
import Title from "../../components/form/title/Title";
import Subtitle from "../../components/form/subtitle/SubTitle";
import Input from "../../components/form/input/Input";
import Button from "../../components/form/button/Button";
import Footer from "../../components/form/footer/Footer";
import ReactLoading from "../../components/loading/Loading";
import "./Login.css";

const Form = () => {
  const useFormValidation = new UseFormValidation();
  const authService = new AuthService();
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState("");
  const [errorsOnForm, setErrorsOnForm] = useState({});

  const navigate = useNavigate();
  const [isLogging, setIsLogging] = useState(false);

  const handleForm = (event) => {
    setForm({ ...form, [event.name]: event.value });
  };

  const handleValidateform = (event) => {
    if (event.target.name === "email") {
      setErrorsOnForm(useFormValidation.handleValidateEmail(form, errorsOnForm));
    } else if (event.target.name === "password") {
      setErrorsOnForm(useFormValidation.handleValidatePassword(form, errorsOnForm));
    }
  };

  const handleLogin = async () => {
    try {
      setIsLogging(true);
      const data = await authService.login(form);
      if (data.token) {
        setTimeout(() => {
          setIsLogging(false);
          navigate("/");
        }, 1000);
      }
    } catch (error) {
      setIsLogging(false);
      console.log(error.response);
      setErrors(error.response.statusText);
    }
  };

  useEffect(() => {
    hideEffect();
  }, []);

  return (
    <div className="form-container">
      {isLogging && <ReactLoading type={"spinningBubbles"} color="red" />}
      <form className="form-login">
        <Title Title={"Login"} />
        <Subtitle Title={"Login with your account"} />
        {errors && <Subtitle Title={errors} color={"red"} />}
        {errorsOnForm.email && <span style={{ color: "red" }}>{errorsOnForm.email}</span>}
        <Input
          Icon={() => <MdAlternateEmail />}
          name={"email"}
          value={form.email}
          onChange={handleForm}
          type={"text"}
          placeholder={"Email"}
          onKey={handleValidateform}
        />
        {errorsOnForm.password && <span style={{ color: "red" }}>{errorsOnForm.password}</span>}
        <Input
          Icon={() => <RiLockPasswordLine />}
          name={"password"}
          value={form.password}
          onChange={handleForm}
          type={"password"}
          placeholder={"Password"}
          onKey={handleValidateform}
        />
        <Button onClick={handleLogin} type="button" text="Login" />
      </form>
      <Footer text={"Don't have an account? "} href={"/register"} hrefText={"Register"} />
    </div>
  );
};

export default Form;
