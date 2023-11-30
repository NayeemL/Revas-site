import React from "react";
import { Navbar, Nav, Container, Button, FormControl } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import revasLogo from "../../images/revasLogo.png";
import "./navBar.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function navBar() {
  return (
    <div>
      <Navbar bg="light" className="d-flex flex-column" expand="lg">
        <Container fluid className="mx-lg-2">
          <Navbar.Brand>
            <img
              className="revas-logo align-top d-inline-block"
              src={revasLogo}
              alt="Reva's logo"
            />
          </Navbar.Brand>

          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end flex-grow-0"
          >
            <Nav className="me-2">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/wallbed">Wall bed</Nav.Link>
              <Nav.Link href="#pricing">Kitchen</Nav.Link>
              <Nav.Link href="#pricing">Wardrobe</Nav.Link>
              <Nav.Link href="#pricing">Space Saving Furniture</Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <Button size="sm" className="rounded">
            Enquire Now
          </Button>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Container>

        <Container className="d-flex justify-content-center align-items-center mt-2">
          <InputGroup className="mb-3">
            <FormControl
              type="text"
              placeholder="Search..."
              className="mx-auto"
              style={{ borderRadius: "10px" }}
            />
            <div className="search-icon">
              <Button style={{borderRadius:'10px', width:'auto'}}>
                <FontAwesomeIcon icon={faSearch} />
              </Button>
            </div>
          </InputGroup>
        </Container>
      </Navbar>
    </div>
  );
}

export default navBar;
