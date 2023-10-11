import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/esm/Button';

function BasicNav() {

  const username = localStorage.getItem("username")

  const handleLogout = () =>{
    localStorage.removeItem("token")
    localStorage.removeItem('username')
    window.location = "/";
  }

  return (
    <Navbar className="bg-body-warning">
      <Container>
        <Navbar.Brand href="/">Whirlpool</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/landing">Home</Nav.Link>
            <Nav.Link href="/question">Questions</Nav.Link>
            <Nav.Link href="/profile">My Profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link href='/profile'>{username}</Nav.Link>
          <Button variant='light' onClick={handleLogout}>Logout</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicNav;