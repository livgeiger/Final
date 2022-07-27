import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';



function NavBar() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>Geiger Art</Navbar.Brand>
            <Nav className="me-auto">
              <Link to="/">Home</Link>
              <Link to="/about">Why Digital Art?</Link>
              <Link to="/signup">Sign Up</Link>
            </Nav>
          </Container>
        </Navbar>
        </>
  );
}

export default NavBar;