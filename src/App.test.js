import { render, screen } from '@testing-library/react';
import App from './App';

test("renders portfolio introduction text", () => {
  render(<App />);
  const introElement = screen.getByText(/hello, i'm sagar bisht/i);
  expect(introElement).toBeInTheDocument();
});
