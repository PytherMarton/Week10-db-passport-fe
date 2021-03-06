import { useState } from "react";
import React from "react";

function Register() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const baseURL = "http://localhost/user/registeruser";

  const handleUserChange = (e) => setUser(e.target.value);

  const handlePasswordChange = (e) => setPassword(e.target.value);

  const submitForm = async (e) => {
    e.preventDefault();
    const payload = JSON.stringify({
      name: user,
      password: password,
    });

    const res = await fetch(baseURL, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: payload,
    });
    console.log(await res.json());
  };

  return (
    <div>
      <h1 className="text">Register</h1>
      <form onSubmit={submitForm}>
        <label htmlFor="user" className="form">
          Username:{" "}
        </label>
        <input
          type="text"
          name="user"
          value={user}
          onChange={handleUserChange}
        ></input>

        <label htmlFor="password" className="form">
          Password:{" "}
        </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        ></input>
        <input
          type="submit"
          value="Submit"
          className="submitbtn"
        ></input>
      </form>
    </div>
  );
}

// onClick={event =>  window.location.href="./cards.js"}

export default Register;
