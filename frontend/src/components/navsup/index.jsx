import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import Link from 'next/link'
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

export function NavSup () {

    const { signOut } = useContext(AuthContext);

    return (
      <Navbar bg='dark' expand='lg' variant='dark'>
          <Container>
              <Navbar.Brand as={Link} href='/sala' className="nav-link text-light">
                <a className='text-white-50 px-2 text-decoration-none'>Salas de Videos</a>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls='basic-navbar-nav' />
              <Navbar.Collapse id='basic-navbar-nav'>
                  <Nav className='me-auto'>
                      <Nav.Link
                          className="nav-link"
                          as={Link}
                          href='/sala'
                      >
                          <a className="nav-link">Salas</a>
                      </Nav.Link>
                  </Nav>
                  <Nav>
                      <NavDropdown
                          align='end'
                          title='Bem Vindo'
                          id='basic-nav-dropdown'
                      >
                          <NavDropdown.Item href='#action/3.1'>
                              Perfil
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item onClick={signOut}>
                              Sair
                          </NavDropdown.Item>
                      </NavDropdown>
                  </Nav>
              </Navbar.Collapse>
          </Container>
      </Navbar>
    )
  
}

