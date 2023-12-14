import React from "react";
import Login from "./Components/login";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from "./Components/register";
import Home from "./Components/home";

const App = () => {
  return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/home' element={<Home/>} />
          </Routes>
        </div>
      </BrowserRouter>  

  );
}

export default App;
