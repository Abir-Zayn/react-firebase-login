import { useState } from "react";
import "./App.css";
import { SignIn } from "./components/signin";
import { SignUp } from "./components/signUp";
import { AuthDetails } from "./components/authDetails";

function App() {
  return (
    <>
      <SignIn />
      <SignUp />
      <AuthDetails />
    </>
  );
}

export default App;
