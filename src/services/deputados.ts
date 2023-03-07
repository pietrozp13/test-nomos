import axios from 'axios';

const BASE_URL = 'https://dadosabertos.camara.leg.br/api'

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 2000,
  headers: { accept: 'application/json' },
});

export const getDeputados = (page: number, quant: number) => {
  const itens = quant;
  const pageSearch = page;
  const ordem = 'ASC';
  const ordenarPor = 'nome';

  return instance
    .get(
      `/v2/deputados?itens=${itens}&pagina=${pageSearch}&ordem=${ordem}&ordenarPor=${ordenarPor}`,
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
