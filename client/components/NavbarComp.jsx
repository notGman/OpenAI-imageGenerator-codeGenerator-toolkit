import {Container,Nav,Navbar} from "react-bootstrap";
import {NavLink} from 'react-router-dom'

function CollapsibleExample() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="w-100 d-flex justify-content-between">
        <Container>
          <Navbar.Brand>OpenAI Projects</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav ">
            <Nav className="ms-auto gap-3 text-center">
              <Nav.Link as={NavLink} to="/">Image generator</Nav.Link>
              <Nav.Link as={NavLink} to="/chat">Chatbot</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default CollapsibleExample;
