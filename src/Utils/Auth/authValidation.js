import { SET_LOGIN_ERROR, SET_SIGNUP_ERROR } from "../../Constant";

export const signUpFormValidation = (user, dispatchUser) => {
  const {
    user: { email, firstName, lastName, password, confirmPassword }
  } = user;

  const isfirstNameValid =
    firstName.length > 2 && /^[A-Za-z\s]+$/.test(firstName);

  const islastNameValid = lastName !== "" && /^[A-Za-z\s'-]+$/.test(lastName);

  const isEmailValid = email !== "" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid =
    password !== "" && /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/.test(password);

  const isConfirmPasswordValid =
    confirmPassword !== "" && password === confirmPassword;

  if (!isfirstNameValid) {
    dispatchUser({ type: SET_SIGNUP_ERROR, payload: "Enter valid first name" });
    return;
  }
  if (!islastNameValid) {
    dispatchUser({ type: SET_SIGNUP_ERROR, payload: "Enter valid last name" });
    return;
  }
  if (!isEmailValid) {
    dispatchUser({ type: SET_SIGNUP_ERROR, payload: "Enter valid Email" });
    return;
  }

  if (!isPasswordValid) {
    dispatchUser({
      type: SET_SIGNUP_ERROR,
      payload:
        "Password must contain 6 character a uppercase,number and special character"
    });
    return;
  }

  if (!isConfirmPasswordValid) {
    dispatchUser({
      type: SET_SIGNUP_ERROR,
      payload: "password and confirm password not match"
    });
    return;
  }

  return (
    isfirstNameValid &&
    islastNameValid &&
    isEmailValid &&
    isPasswordValid &&
    isConfirmPasswordValid
  );
};

//! Login Form Validation

export const loginFromValidation = (user, dispatchUser) => {
  const { email, password } = user;

  const isValidEmail = email !== "" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPassword =
    password !== "" && /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/.test(password);

  if (!isValidEmail) {
    dispatchUser({ type: SET_LOGIN_ERROR, payload: "Email is not valid" });
    return;
  }

  if (!isValidPassword) {
    dispatchUser({ type: SET_LOGIN_ERROR, payload: "Password is not valid" });
    return;
  }

  return isValidEmail && isValidPassword;
};
