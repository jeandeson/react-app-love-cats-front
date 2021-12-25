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
    const regexNoEspecial = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;
    const regex = /[0-9]/;
    if (!form.name) {
      const errors = { ...errorsOnForm, name: "Required" };
      return errors;
    }
    if (regex.test(form.name) || regexNoEspecial.test(form.name)) {
      const errors = { ...errorsOnForm, name: "Cannot use numbers or special characters" };
      return errors;
    } else if (form.name.length < 6) {
      const errors = { ...errorsOnForm, name: "Username too short" };
      return errors;
    } else {
      const errors = { ...errorsOnForm, name: "" };
      delete errors.name;
      return errors;
    }
  }
  handleValidateCatName(form, errorsOnForm) {
    const regexNoEspecial = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;
    const regex = /[0-9]/;
    if (!form.catName) {
      const errors = { ...errorsOnForm, catName: "Required" };
      return errors;
    }
    if (regex.test(form.catName) || regexNoEspecial.test(form.catName)) {
      const errors = { ...errorsOnForm, catName: "Cannot use numbers or special characters" };
      return errors;
    } else if (form.catName.length < 3) {
      const errors = { ...errorsOnForm, catName: "Catname too short" };
      return errors;
    } else {
      const errors = { ...errorsOnForm, catName: "" };
      delete errors.catName;
      return errors;
    }
  }
}
