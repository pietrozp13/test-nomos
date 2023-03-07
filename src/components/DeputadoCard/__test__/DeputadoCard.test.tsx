import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import DeputadoCard from '../index';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

test('loads and displays greeting', async () => {
  // ARRANGE
  render(
    <DeputadoCard
      key={1}
      id={1}
      nome={'Cleber'}
      partido={'PZP'}
      photo={''}
      cargo={'Deputado Federal'}
      uf={'SC'}
    />
  );

  // // ACT
  // await userEvent.click(screen.getByText('Load Greeting'))
  // await screen.findByRole('heading')

  // ASSERT
  expect(screen.getByTestId('name-info')).toHaveTextContent('Cleber');
});
