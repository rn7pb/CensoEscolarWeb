import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router";
import Carrossel from "../components/Carrossel";
import escola from "../assets/iemaca.avif";
import salaDeAula from "../assets/sala-de-aulapw1.jpg";

const Home = () => {
  let itensCarrossel = [
    {
      srcImagem: escola,
      titulo: "Um olhar sobre a educação na paraíba.",
      descricao:
        "Instituições de Ensino e matrículas da educação básica no Censo escolar 2025.",
      textoAlternativo:
        "Imagem ilustrativa de uma instituição de ensino, reutilizada do projeto de referência.",
    },
    {
      srcImagem: salaDeAula,
      titulo: "Conheça as instituições com mais matrículas.",
      descricao:
        "Consulte as dez primeiras posições do ranking estadual por matrículas totais.",
      textoAlternativo:
        "Ilustração de uma sala de aula com quadro e carteiras.",
    },
  ];

  let cartoes = [
    {
      destaque: "PB",
      titulo: "Recorte da paraíba",
      descricao:
        "Os dados selecionados pertencem às instituições de ensino do estado da Paraíba.",
    },
    {
      destaque: "2025",
      titulo: "Censo escolar",
      descricao:
        "A base utilizada pelo projeto é a edição de 2025 dos microdados do Inep.",
    },
    {
      destaque: "10",
      titulo: "Maiores por matrículas",
      descricao:
        "O ranking é ordenado pelo campo qt_mat_bas, do maior número para o menor.",
    },
  ];

  return (
    <>
      <div className="page-intro">
        <p className="eyebrow">educação básica - paraíba</p>
        <h1>Censo escolar 2025</h1>
        <p>
          Conheça a proposta e explore as Instituições de Ensino da Paraíba.
        </p>
      </div>

      <Carrossel itensCarrossel={itensCarrossel} />

      <section className="info-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">sobre os dados</p>
            <h2>Informação para conhecer a nossa educação.</h2>
          </div>
          <Link to="/instituicoesensino" className="btn btn-primary">
            Ver instituições →
          </Link>
        </div>

        <Row className="g-4">
          {cartoes.map(({ destaque, titulo, descricao }, i) => {
            return (
              <Col md={4} key={i}>
                <Card className="h-100 info-card">
                  <Card.Body>
                    <p className="card-highlight">{destaque}</p>
                    <Card.Title>{titulo}</Card.Title>
                    <Card.Text>{descricao}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </section>
    </>
  );
};

export default Home;
