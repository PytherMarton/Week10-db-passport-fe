import "./App.css";
import { useState } from "react";

import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/Profile";
// import React from "react";
// import { Route, Routes, Outlet, Link } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <div className="container">
        <div className="text">
          <h1 className="animate-charcter">Welcome to Magic Card Finder!</h1>
          <p>- Search for your favourite Magic cards.</p>
          <p>- Create your own deck.</p>
          <p>- Extend your collection.</p>
          <p>- Create multiple decks.</p>
        </div>
     
        <Login user={user} setUser={setUser} />
          <Register />
          <Profile user={user} setUser={setUser} />
      </div>
    </div>
  );
}


export default App;
