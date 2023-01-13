import validator from "validator";
import { faild, success } from "./validationMassage.js";


const signupValidation = async (user_name, user_email, user_password) => {
  try {
    if (
      user_name === "" ||
      (user_name === null && user_email === "") ||
      (user_email === null && user_password === "") ||
      user_password === null
    ) {
        return faild.emptyInputs
    }else if(!validator.isEmail(user_email)){
        return faild.emailFailed
    }else if (!validator.isStrongPassword(user_password)){
        return faild.passFailed
    }else {
        return success.signUps
    }
  } catch (error) {}
};


export {signupValidation};