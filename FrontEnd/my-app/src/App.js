import Login from "./Components/Login";
import NavBar from "./Components/NavBar";
import SignUp from "./Components/SignUp";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import User from "./Components/User";

function App() {
  return(
 <>
 <Router>
 <NavBar/>
  <Routes>
    <Route element={<Login/>} path="/login"></Route>
    <Route element={<SignUp/>} path="/signup"></Route>
    <Route element={<User/>} path="/user"></Route>
  </Routes>
 </Router>
 
 
 
 </>
  ) 
}

export default App;
