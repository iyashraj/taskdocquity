import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    if (email.length && password.length) {
      navigate("/home");
    } else {
        setError("Please fill all the fields.");
        setTimeout(()=>{
            window.location.reload()
        },3000)
    }
  };
  return (
    <div className="App">
      <h3>Log In</h3>
      <form  onClick={() => handleSubmit()}>
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
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
