import { Table } from "react-bootstrap";
import instituicoesEnsino from "../datasets/instituicoes_pb_2025.json";

const InstituicaoEnsino = () => {
  // valores ausentes não representam zero matrículas e não entram no ranking.
  let ranking = [...instituicoesEnsino].filter((instituicao) => {
    return instituicao.qt_mat_bas !== null;
  });

  ranking.sort((a, b) => {
    if (a.qt_mat_bas === b.qt_mat_bas) {
      return a.co_entidade - b.co_entidade;
    }
    return b.qt_mat_bas - a.qt_mat_bas;
  });

  let dezMaioresInstituicoes = ranking.slice(0, 10);

  return (
    <>
      <div className="page-intro">
        <p className="eyebrow">censo escolar 2025 - ranking</p>
        <h1>Instituições de Ensino</h1>
        <p>
          As 10 instituições da paraíba com mais matrículas totais da educação
          básica.
        </p>
      </div>

      <section className="ranking-section">
        <div className="ranking-heading">
          <div>
            <h2>Maiores por número de matrículas</h2>
            <p>
              Classificação por <code>qt_mat_bas</code>, em ordem decrescente.
            </p>
          </div>
          <span className="ranking-label">PARAÍBA · PB</span>
        </div>

        <Table striped bordered hover responsive className="ranking-table">
          <caption>
            Ranking estadual do Censo Escolar 2025 por matrículas totais.
          </caption>
          <thead>
            <tr>
              <th scope="col">Posição</th>
              <th scope="col">Instituição de Ensino</th>
              <th scope="col">Código Inep</th>
              <th scope="col">Município</th>
              <th scope="col" className="text-end">
                Matrículas totais
              </th>
            </tr>
          </thead>
          <tbody>
            {dezMaioresInstituicoes.map((instituicao, i) => {
              return (
                <tr key={instituicao.co_entidade}>
                  <td>
                    <span className="rank-position">{i + 1}</span>
                  </td>
                  <th scope="row">{instituicao.no_entidade}</th>
                  <td>{instituicao.co_entidade}</td>
                  <td>{instituicao.no_municipio}</td>
                  <td className="text-end enrollment-number">
                    {instituicao.qt_mat_bas}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>

        <p className="ranking-note">
          Em caso de empate, o menor código Inep aparece primeiro, registros sem
          informação de matrículas não entram no ranking. A medida utilizada é o
          campo total sem somar novamente as etapas de ensino.
        </p>
      </section>
    </>
  );
};

export default InstituicaoEnsino;
