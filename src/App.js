import "./App.css";
import Aboutus from "./Components/aboutus/Aboutus";
import Main from "./Components/Main/Main";
import Signup from "./Components/LoginSignup/Signup";
import Login from "./Components/LoginSignup/Login";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const [currPage, setCurrPage] = useState("signup");
  return (
    // <GoogleOAuthProvider clientId="169559215961-i0o7klhc5rhvsm81nctt95v7drpnenjj.apps.googleusercontent.com">
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/aboutus" element={<Aboutus />} />
        </Routes>
      </BrowserRouter>
    </div>
    // </GoogleOAuthProvider>
  );
}

export default App;
