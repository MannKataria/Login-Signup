import logo from "./logo.svg";
import "./App.css";
import Signup from "./Components/LoginSignup/Signup";
import Login from "./Components/LoginSignup/Login";
import { useState } from "react";

function App() {
  const [currPage, setCurrPage] = useState("signup");
  const handleFormSwitch = (pageType) => {
    setCurrPage(pageType);
  };
  return (
    <div className="App">
      {currPage == "login" && <Login />}
      {currPage == "signup" && <Signup xyz={handleFormSwitch} />}
    </div>
  );
}

export default App;
