import axios from 'axios';

const BASE_URL = 'https://dadosabertos.camara.leg.br/api'

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 2000,
  headers: { accept: 'application/json' },
});

export const getDeputados = (page: number, quant: number, nameDeputado: string | null, partido: string | null, uf: string | null) => {
  const itens = quant;
  const pageSearch = page;
  const ordem = 'ASC';
  const ordenarPor = 'nome';

  console.log(nameDeputado, partido, uf);


  return instance
    .get(
      `/v2/deputados?itens=${itens}&nome=${nameDeputado}&siglaUf=${uf}&siglaPartido=${partido}&pagina=${pageSearch}&ordem=${ordem}&ordenarPor=${ordenarPor}`,
      {
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
      },
    )
    .then(function ({ data }) {
      return data;
    })
    .catch(function (error) {
      console.error(error);
    });
};

export const getDeputado = (deputadoId: number) => {
  return instance
    .get(`/v2/deputados/${deputadoId}`, {
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
    })
    .then(function ({ data }) {
      return data;
    })
    .catch(function (error) {
      console.error(error);
    });
};
