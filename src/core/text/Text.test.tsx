import { render, screen } from '@testing-library/react';
import Text from './index';

it('Render Text component correctly', () => {
  const text = 'Text Component';

  render(<Text>{text}</Text>);

  const textElement = screen.getByText(text);

  expect(textElement).toBeInTheDocument();
});
