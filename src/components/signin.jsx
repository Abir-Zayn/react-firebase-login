import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((usercCredential) => {
        console.log(usercCredential);
      })
      .catch((Error) => {
        console.log(Error);
      });
  };
  return (
    <>
      <div className="sign-in-container">
        <br />
        <form onSubmit={signIn}>
          <h1>Log In</h1>
          <label>Enter Email: </label>
          <br />
          <input
            type="email"
            placeholder="Enter mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <br />
          <br />
          <label>Enter Password: </label>
          <br />
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <br />
          <hr />
          <hr />
          <button type="submit">Log In</button>
        </form>
      </div>
    </>
  );
}
