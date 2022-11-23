// import React from 'react'
// import CartWidget from '../CartWidget/CartWidget';

// export default function NavBar() {
//   return (
//     <div>
//         <CartWidget/>
//     </div>
//   )
// }


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React - German Olmedo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Inicio</Nav.Link>
            <Nav.Link href="#pricing">Contacto</Nav.Link>
            <NavDropdown title="Tienda" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Zapatillas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Ropa masculina
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Ropa femenina</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Accesorios
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* <button> */}
            <CartWidget/>
          {/* </button> */}
          {/* ver si se vio el tema de rutas */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
