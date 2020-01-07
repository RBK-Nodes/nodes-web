import React, { useState } from "react";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  var handleSubmit = e => {
    e.preventDefault();
    let user = {
      username,
      password
    };
    console.log(user, "fuck fuvck fuccccccccck");
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify(user)
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          placeholder="Enter user name"
          type="text"
          value={username}
          onChange={e => {
            setUsername(e.target.value);
          }}
        ></input>
      </label>
      <lable>
        {" "}
        <input
          placeholder="enter password"
          type="password"
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
        ></input>
      </lable>
      <input type="submit" />
    </form>
  );
}

export default Login;
