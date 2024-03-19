import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./views/Login";
import Register from "./views/Register";
import Home from "./views/Home";
import Tsekbot from "./views/Tsekbot";
import Tsekbot2 from "./views/Tsekbot2";


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<Home />} />
        <Route path='/tsekbot' element={<Tsekbot />} />
        <Route path='/tsekbot2' element={<Tsekbot2 />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App