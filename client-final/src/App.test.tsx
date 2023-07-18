import { render, screen, waitFor } from '@testing-library/react';

import { act } from 'react-dom/test-utils';
import App from './App';

test('App', async () => {
  await act(() => {
    render(<App />);
  });

  await waitFor(() => {
    screen.getByText(/Home page/);
  });
});
