import { signupValidation } from "../utils/validation.js";
import { faild, success } from "../utils/validationMassage.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { signupFunction, schemaFunction } from "../src/Model/schema.js";

dotenv.config();
const jsonPass = process.env.JSONPASS

const signUpController = async(req, res) => {

  try {
   await schemaFunction();
    const {name, email, password, id } = req.body;
    let token
    
   
 
  const validation_Result = await signupValidation(name, email, password )

 

   if(validation_Result === faild.emptyInputs){
    res.send({massage:faild.emptyInputs});
   }else if (validation_Result === faild.emailFailed){
    res.send({massage:faild.emailFailed});
   }else if(validation_Result === faild.passFailed){
    res.send({massage:faild.passFailed});
   }else{
     token = jwt.sign({
      id : id,
    },`${jsonPass}`)

 setTimeout(async ()=>{
  await signupFunction(name, email, password, id, token)
 },20)
   res.send({massage: success.signUps,})
   }
  } catch (error) {
    if(error) throw error; 
  }
  
    
  }

  const loginController = (req, res) => {
    console.log(req.body)
    res.send("hii");
  }

  const userController = (req, res) => {
    console.log(req.body)
    res.send("hii");
  }

  export {signUpController, loginController, userController };