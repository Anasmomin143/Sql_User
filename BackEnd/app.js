import express from "express";
import "./src/Connection_Db/connection.js";
import "./src/Model/schema.js";
import { loginController, signUpController, userController } from "./Controller/callbackfunctions.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();


const port = process.env.PORT || 9000;


const corsOption = {
  url : "http://localhost:3000",
}

app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded( { extended: false} ))

app.post("/signup", signUpController );
app.post("/login", loginController);
app.post("/user", userController);


app.listen(port, () => {
  console.log(`server runnig on ${port}`);
});
