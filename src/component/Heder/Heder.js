import React from "react";
import { Container, Nav, Navbar} from "react-bootstrap";
import logo from "./logo.png";
import "./Heder.css";
import {Link} from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/Firebase.init";
import { signOut } from "firebase/auth";
// import { useAuthState } from "react-firebase-hooks/auth";
// import auth from "../../firebase.init";
// import { signOut } from "firebase/auth";


const Heder = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  }
  return (
    <>
      <Navbar className="container-times" collapseOnSelect expand="lg" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img height={45} src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="home#service">My Product</Nav.Link>
            </Nav>
            <Nav className="customlink">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
              {
                user && <>
                <Nav.Link as={Link} to="/allinventory">All Inventory</Nav.Link>
                <Nav.Link as={Link} to="/addnewitem">Add New item</Nav.Link>
                <Nav.Link as={Link} to="/myitems">My Items</Nav.Link>
                </>
              }
              {
                user?
                <button className="btn btn-link text-black text-decoration-none" onClick={handleSignOut}>sign out</button>
                :
                 <Nav.Link as={Link} to="/login">
                   Login
                 </Nav.Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Heder;
