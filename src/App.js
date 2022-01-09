import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import React, { useState } from "react";

import Navrr from "./compononts/Navrr";

import Logn from "./compononts/Logn";
import Save from "./compononts/Save";
import Home from "./compononts/Home";
import About from "./compononts/About";
import Profile from "./compononts/Profile";
import "bootstrap/dist/css/bootstrap.min.css";
import Idpage from "./compononts/Idpage";
function App() {
  const [auth, setAuth] = useState(() => {
    let localValue = window.localStorage.getItem("auth");
    if (localValue) {
      return JSON.parse(localValue);
    }
    return false;
  });
  return (
    <div className="App">
      <Router>
        <Navrr auth={auth} setAuth={setAuth} />

        <Routes>
          {/* <Route path="/" exact element={<Home />} /> */}
          <Route
            path="/"
            element={auth ? <Home /> : <Logn setAuth={setAuth} />}
          />
          <Route path="/Save" element={<Save auth={auth} />} />
          <Route path="/About" element={<About auth={auth} />} />
          {/* <Route path="/Logn" element={<Logn />} /> */}
          <Route path="/Profile" element={<Profile auth={auth} />} />
          <Route path="/Idpage/:id" element={<Idpage auth={auth} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
