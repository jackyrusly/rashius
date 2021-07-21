import { render, screen } from '@testing-library/react';
import Button from './index';

const text = 'Button Component';

describe('Button', () => {
  it('Render Button component correctly', () => {
    render(<Button>{text}</Button>);

    const buttonElement = screen.getByText(text);

    expect(buttonElement).toBeInTheDocument();
  });

  it('Render Button loading state', () => {
    render(<Button $isLoading>{text}</Button>);

    const buttonElement = screen.queryByText(text);

    expect(buttonElement).not.toBeInTheDocument();
  });
});
