export const isPassAndConfirmPassSame = (pass, confirmPass) => {
  return pass === confirmPass;
};

export const isPassValid = (pass) => {
  let isValid = false;

  if (pass.length >= 6) {
    isValid = true;
  } else {
    return { isValid: false, errorMsg: "Password atleast have 6 characters" };
  }

  return isValid;
};
