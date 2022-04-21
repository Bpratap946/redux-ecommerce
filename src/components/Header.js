import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";

const Header = () => {
  const getData = useSelector((state) => state.cartreducer);
  console.log(getData);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">MyStore</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#features">Home</Nav.Link>
        </Nav>
        <Badge badgeContent={4} color="primary">
          <ShoppingCartIcon
            style={{ color: "#ffffff", fontSize: "30px", cursor: "pointer" }}
          />
        </Badge>
      </Container>
    </Navbar>
  );
};

export default Header;
