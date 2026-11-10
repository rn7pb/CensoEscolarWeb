import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="site-footer">
      <Container>
        <Row className="align-items-center gy-2">
          <Col md={6}>© {new Date().getFullYear()} Censo escolar - paraíba</Col>
          <Col md={6} className="footer-source">
            <a href="https://www.gov.br/inep/pt-br/acesso-a-informacao/dados-abertos/microdados/censo-escolar">
              Fonte dos dados: Inep · Censo Escolar 2025
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
