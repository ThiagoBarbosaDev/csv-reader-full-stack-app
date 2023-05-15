import App from '../App';
import { act, render } from '@testing-library/react';

test('Testing environment works', () => {
  expect(true).toBe(true)
});

test('App renders', async () => {
  await act(() => render(<App />));
});