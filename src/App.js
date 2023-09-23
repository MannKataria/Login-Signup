import logo from "./logo.svg";
import "./App.css";
import Signup from "./Components/LoginSignup/Signup";
import Login from "./Components/LoginSignup/Login";
import { useState } from "react";
import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {

  const [currPage, setCurrPage] = useState("login");
  
  return (

    <BrowserRouter>

    {currPage == "login" ? <Login/> : <Signup />}

    </BrowserRouter>

  );
}

export default App;
