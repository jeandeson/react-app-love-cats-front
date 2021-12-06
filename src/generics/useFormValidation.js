export default class UseFormValidation {
  handleValidateEmail(form, errorsOnForm) {
    if (!form.email) {
      const errors = { ...errorsOnForm, email: "Required" };
      return errors;
    } else if (!/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(form.email)) {
      const errors = { ...errorsOnForm, email: "Invalid email adress" };
      return errors;
    } else {
      const errors = { ...errorsOnForm };
      delete errors.email;
      return errors;
    }
  }

  handleValidatePassword(form, errorsOnForm) {
    if (!form.password) {
      const errors = { ...errorsOnForm, password: "Required" };
      return errors;
    } else if (form.password.length < 6) {
      const errors = { ...errorsOnForm, password: "Password too short" };
      return errors;
    } else {
      const errors = { ...errorsOnForm };
      delete errors.password;
      return errors;
    }
  }
  handleValidateUserName(form, errorsOnForm) {
    if (!form.password) {
      const errors = { ...errorsOnForm, username: "Required" };
      return errors;
    } else if (form.password.length < 6) {
      const errors = { ...errorsOnForm, name: "Username too short" };
      return errors;
    } else {
      const errors = { ...errorsOnForm, name: "" };
      delete errors.name;
      return errors;
    }
  }
}
