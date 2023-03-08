import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import DeputadoDetailsCard from '../index';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

test('loads and displays greeting', async () => {
  render(
    <DeputadoDetailsCard
      key={1}
      id={1}
      nome={'Cleber'}
      partido={'PZP'}
      photo={''}
      cargo={'Deputado Federal'}
      uf={'SC'}
      dataNascimento='2001-10-02'
      email='teste@teste.com'
      endereco='teste - teste - teste'
      municipioNascimento='2011-10-02'
      nomeCivil='Cleber Civil'
      phone='(61)1234-5678'
      situacao='Em exercício'
      condicaoEleitoral='Titular'
      ultimaData='2023-03-11'
    />
  );

  expect(screen.getByTestId('name-info-detail')).toHaveTextContent('Cleber Civil');
});
