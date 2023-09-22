import logo from "./logo.svg";
import "./App.css";
import LoginSignup from "./Components/LoginSignup/Signup";
import Login from "./Components/LoginSignup/Login";
import { useState } from "react";

function App() {
  const [currPage, setCurrPage] = useState("login");
  return (
    <div className="App">
      {currPage == "login" ? <Login /> : <Signup />}
    </div>
  );
}

export default App;
