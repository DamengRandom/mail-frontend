import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Mailer service link', () => {
  render(<App />);
  const title = screen.getByText(/Mailer service/i);
  expect(title).toBeInTheDocument();
});
