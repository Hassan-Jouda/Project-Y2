import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";
const Profile = ({ auth, setAuth }) => {
  const outbtn = () => {
    setAuth(false);
    window.localStorage.removeItem("auth");
  };

  return (
    <div>
      <h1>Profile</h1>

      <img
        className="img"
        src="https://ichef.bbci.co.uk/news/976/cpsprodpb/2B87/production/_90934111_1-1.jpg"
      />
      <h5 className="up">Username</h5>
      {localStorage.getItem("Name") && (
        <div className="name">
          <p>{localStorage.getItem("Name")}</p>
        </div>
      )}
      <h5 className="up">Email</h5>
      {localStorage.getItem("Email") && (
        <div className="name">
          <p>{localStorage.getItem("Email")}</p>
        </div>
      )}
      <h5 className="up">Password</h5>
      {localStorage.getItem("Password") && (
        <div className="name">
          <p>{localStorage.getItem("Password")}</p>
        </div>
      )}

      <button className="bttn">Edit User Profile</button>
      <div>
        {auth ? (
          <button className="log" onClick={outbtn}>
            Logout
          </button>
        ) : (
          <Link to="/" className="navbar__link">
            <button className="log">login</button>
          </Link>
        )}
      </div>
    </div>
  );
};
export default Profile;
