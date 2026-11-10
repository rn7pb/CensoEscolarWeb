import { Container, Nav, Navbar } from "react-bootstrap";
import { FaSchool } from "react-icons/fa";
import { Link } from "react-router";

const Header = () => {
  return (
    <header>
      <Navbar expand="lg" className="site-navbar">
        <Container>
          <Navbar.Brand className="site-brand">
            <FaSchool size={27} />
            <span>
              Censo escolar <small>paraiba - 2025</small>
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="header-navbar" />
          <Navbar.Collapse id="header-navbar">
            <Nav className="ms-auto">
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/instituicoesensino">
                Instituições de Ensino
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
