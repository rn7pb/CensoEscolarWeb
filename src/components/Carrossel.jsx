import { Carousel } from "react-bootstrap";
import "./Carrossel.css";

const Carrossel = ({ itensCarrossel }) => {
  return (
    <Carousel className="home-carousel">
      {itensCarrossel.map(
        ({ srcImagem, titulo, descricao, textoAlternativo }, i) => {
          return (
            <Carousel.Item key={i}>
              <img
                className="carousel-img"
                src={srcImagem}
                alt={textoAlternativo}
              />
              <Carousel.Caption>
                <p className="slide-label">Censo escolar - PB</p>
                <h2>{titulo}</h2>
                <p>{descricao}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        },
      )}
    </Carousel>
  );
};

export default Carrossel;
