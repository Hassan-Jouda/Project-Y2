import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";

const Navrr = ({ auth, setAuth }) => {
  const outbtn = () => {
    setAuth(false);
    window.localStorage.removeItem("auth");
    localStorage.removeItem("Name");
    localStorage.removeItem("Password");
    localStorage.removeItem("Email");
  };
  return (
    <div>
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>Hacker</Navbar.Brand>
            <Nav className="m1-auto">
              <Nav.Link>
                <Link to="/" className="navn">
                  {" "}
                  Home{" "}
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link to="/Save" className="navn">
                  Save
                </Link>
              </Nav.Link>

              <Nav.Link className="navn">
                <Link to="/About" className="navn">
                  About
                </Link>
              </Nav.Link>
            </Nav>
            <div>
              <span>
                {auth ? (
                  <>
                    <Nav.Link className="navn">
                      <Link to="/Profile" className="navn">
                        Profile
                      </Link>
                    </Nav.Link>

                    <Nav.Link className="navn">
                      <h5 className="logout" onClick={outbtn}>
                        Logout
                      </h5>
                    </Nav.Link>
                  </>
                ) : (
                  <Link to="/" className="navn">
                    Login
                  </Link>
                )}
              </span>
            </div>
          </Container>
        </Navbar>
      </>
    </div>
  );
};

export default Navrr;
