import React from "react";
import Login from "./component/Login";
import HomePage from "./component/HomePage";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />}/>
      <Route path="/" element={<Login />}/>
      <Route path="/home" element={<HomePage />}/>
    </Routes>
    </BrowserRouter>
  );
};

export default App;
