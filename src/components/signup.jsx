import React, { useState } from "react";

function SignUp(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  var handleSubmit = e => {
    e.preventDefault();
    if (!passwordChecker()) {
      return alert("passwords don`t match");
    }
    let user = {
      username,
      password
    };

    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify(user)
    });
  };
  var passwordChecker = () => {
    return password === confirmPassword;
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
      <label>
        <input
          placeholder="enter password"
          type="password"
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
        ></input>
      </label>
      <label>
        <input
          placeholder="confirm your password"
          type="password"
          value={confirmPassword}
          onChange={e => setconfirmPassword(e.target.value)}
        ></input>
      </label>
      <button type="submit"> submit</button>
    </form>
  );
}
export default SignUp;
