import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import Bag from "../../assets/bag.svg";
import Person from "../../assets/person.svg";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  useEffect(() => {        
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
          setIsLoggedIn(true);
      }
  }, []);  
  


  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Las Urbanas</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">            
            <Nav.Link as={Link} to="/direccion">Ubicación</Nav.Link>                              
            <NavDropdown title="Menú" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/entradas">Entradas</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/hamburguesas">Hamburguesas</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/tacos">Tacos</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/boneless">Boneless y Alitas</NavDropdown.Item>              
              <NavDropdown.Item as={Link} to="/bebidas">Bebidas</NavDropdown.Item>    
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/menu">
                Menú Completo
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            {isLoggedIn ? 
              <Nav.Link as={Link} to="/perfil">
                <img class="log-in-header perfil" src={Person} alt="perfil"/>
              </Nav.Link> : null              
            }
            {!isLoggedIn ?
              <Nav.Link as={Link} to="/ingresar">
                <img class="log-in-header ingresar" src={Person} alt="login"/>
              </Nav.Link> : null
            }
            <Nav.Link as={Link} to="/carrito">
              <img class="bag-header" src={Bag} alt="cart"/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export {Header};