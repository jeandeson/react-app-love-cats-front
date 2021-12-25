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
import FileInput from "../../components/form/fileInput/FileInput";
import { RiFileUploadLine } from "react-icons/ri";
import { RiUser2Line } from "react-icons/ri";
import { IoPawOutline } from "react-icons/io5";
import { IoColorPaletteOutline } from "react-icons/io5";
import { IoMaleFemaleOutline } from "react-icons/io5";
import ImageUploadService from "../../services/imageUploadService";
import Select from "../../components/form/select/Select";
import colors from "../../resources/colors.json";
import { useDispatch } from "react-redux";
import { showAction } from "../../redux/actions/notification/notificationActions";

const Form = () => {
  const dispatch = useDispatch();
  const useFormValidation = new UseFormValidation();
  const authService = new AuthService();
  const imageUpload = new ImageUploadService();
  const [steps, setSteps] = useState(1);
  const [form, setForm] = useState({ name: "", email: "", password: "", image: "" });
  const [catForm, setCatForm] = useState({ catName: "", color: "", genere: "", image: "" });
  const [errors, setErrors] = useState("");
  const [errorsOnForm, setErrorsOnForm] = useState({});

  const navigate = useNavigate();
  const [isRestritation, setIsRestritation] = useState(false);

  const handleFormSteps = () => {
    setSteps(steps + 1);
  };

  const handleForm = (event) => {
    if (event.name === "image") {
      setForm({ ...form, [event.name]: event.files[0] });
    } else {
      setForm({ ...form, [event.name]: event.value });
    }
  };

  const handleCatForm = (event) => {
    if (event.name === "image") {
      setCatForm({ ...catForm, [event.name]: event.files[0] });
    } else {
      setCatForm({ ...catForm, [event.name]: event.value });
    }
  };

  const handleValidateform = (event) => {
    switch (event.target.name) {
      case "email":
        setErrorsOnForm(useFormValidation.handleValidateEmail(form, errorsOnForm));
        break;
      case "name":
        setErrorsOnForm(useFormValidation.handleValidateUserName(form, errorsOnForm));
        break;
      case "password":
        setErrorsOnForm(useFormValidation.handleValidatePassword(form, errorsOnForm));
        break;
      case "catName":
        setErrorsOnForm(useFormValidation.handleValidateCatName(catForm, errorsOnForm));
        break;
      default:
    }
  };

  const handleRegister = async () => {
    try {
      setIsRestritation(true);
      const imageUserData = await imageUpload.handleImageUpload(form.image);
      const imageCatData = await imageUpload.handleImageUpload(catForm.image);
      form.image = imageUserData;
      catForm.image = imageCatData;
      const data = await authService.register(form, catForm);
      setIsRestritation(false);
      if (data) {
        dispatch(showAction("notification-sucess"));
        navigate("/login");
      }
    } catch (error) {
      dispatch(showAction("notification-danger"));
      setIsRestritation(false);
      setErrors(error.message);
    }
  };

  useEffect(() => {
    hideEffect();
  }, []);

  return (
    <div className="form-container">
      {steps === 1 ? (
        <>
          {isRestritation && <ReactLoading type={"spinningBubbles"} color="red" />}
          <form className="form-login">
            <Title Title={"Register"} />
            <Subtitle Title={"Register your new account"} />
            {errors && <Subtitle Title={errors} color={"red"} />}
            {errorsOnForm.name && <span style={{ color: "red" }}>{errorsOnForm.name}</span>}
            <Input
              Icon={() => <RiUser2Line />}
              name={"name"}
              value={form.name}
              onChange={handleForm}
              type={"text"}
              placeholder={"Name"}
              onKey={handleValidateform}
            />
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
            <FileInput
              value={form.image}
              text={"Upload your user image"}
              Icon={() => <RiFileUploadLine />}
              name={"image"}
              onChange={handleForm}
              type={"file"}
              placeholder={"Image"}
            />
            <Button onClick={handleFormSteps} type="button" text="Next" />
          </form>
        </>
      ) : (
        <>
          {isRestritation && <ReactLoading type={"spinningBubbles"} color="red" />}
          <form className="form-login">
            <Title Title={"Register your cat"} />
            <Subtitle Title={"Register cat profile"} />
            {errors && <Subtitle Title={errors} color={"red"} />}
            {errorsOnForm.catName && <span style={{ color: "red" }}>{errorsOnForm.catName}</span>}
            <Input
              Icon={() => <IoPawOutline />}
              name={"catName"}
              value={catForm.catName}
              onChange={handleCatForm}
              type={"text"}
              placeholder={"Name"}
              onKey={handleValidateform}
            />

            <Select
              options={colors}
              value={catForm.color}
              Icon={() => <IoColorPaletteOutline />}
              name={"color"}
              onChange={handleCatForm}
              type={"text"}
              placeholder={"Color"}
              onKey={handleValidateform}
            />

            <Select
              value={catForm.genere}
              options={[{ text: "female" }, { text: "male" }]}
              Icon={() => <IoMaleFemaleOutline />}
              name={"genere"}
              onChange={handleCatForm}
              type={"text"}
              placeholder={"Genere"}
              onKey={handleValidateform}
            />
            <FileInput
              value={catForm.image}
              text={"Upload your cat image"}
              Icon={() => <RiFileUploadLine />}
              name={"image"}
              onChange={handleCatForm}
              type={"file"}
              placeholder={"Image"}
            />
            <Button onClick={handleRegister} type="button" text="Finish" />
          </form>
        </>
      )}
      <Footer text={"Already have an account? "} href={"/Login"} hrefText={"Login"} />
    </div>
  );
};

export default Form;
