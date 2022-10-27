import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    if (email.length != 0 && password.length != 0) {
      navigate("/home");
    } else {
      setError("Please fill all the fields.");
    }
  };
  return (
    <div className="App">
      <h3>Log In</h3>
      <form>
        <label>Email:</label>
        <input
          type="email"
          placeholder="enter your email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          placeholder="enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error}
        <button type="submit" onClick={() => handleSubmit()}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
