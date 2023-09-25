import logo from "./logo.svg";
import "./App.css";
import Signup from "./Components/LoginSignup/Signup";
import Login from "./Components/LoginSignup/Login";
import { useState } from "react";
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  const [currPage, setCurrPage] = useState("Signup");
  return (
    <GoogleOAuthProvider clientId="169559215961-i0o7klhc5rhvsm81nctt95v7drpnenjj.apps.googleusercontent.com">
    <div className="App">
      {currPage == "login" && <Login />}
      {currPage == "signup" && <Signup xyz={handleFormSwitch} />}
    </div>
    </GoogleOAuthProvider>
  );
}

export default App;
