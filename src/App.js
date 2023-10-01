import "./App.css";
import Signup from "./Components/LoginSignup/Signup";
import Login from "./Components/LoginSignup/Login";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const [currPage, setCurrPage] = useState("signup");
  return (
    <GoogleOAuthProvider clientId="169559215961-i0o7klhc5rhvsm81nctt95v7drpnenjj.apps.googleusercontent.com">
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
    </GoogleOAuthProvider>
  );
}

export default App;
