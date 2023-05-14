import { describe, expect, vi } from 'vitest';
import App from '../App';
import { act, render, screen } from '@testing-library/react';
import mockFetch from './mocks/mockFetch';
import userEvent from '@testing-library/user-event'


describe('integration tests', () => {
  beforeEach(() => {
    global.fetch = vi.fn(mockFetch)
  })

  test('App renders accordingly', async () => {
    // const user = userEvent.setup()
    await act(() => render(<App />));
  });
});