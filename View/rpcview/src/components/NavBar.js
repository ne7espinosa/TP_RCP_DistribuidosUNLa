import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/medicamentos">
                        Inicio
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} className="bi bi-box-seam" to="/medicamentos">
                            Medicamentos
                        </Nav.Link>
                        <Nav.Link as={Link} className="bi bi-box-seam" to="/tipomedicamentos">
                            Tipo Medicamentos
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar
