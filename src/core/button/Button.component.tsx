import { FC, memo } from 'react';
import IButton from './Button.type';
import StyledButton from './Button.style';

export const Button: FC<IButton> = memo(
  ({ children, $isLoading = false, $type = 'primary' }) => {
    return (
      <StyledButton $isLoading={$isLoading} $type={$type}>
        {$isLoading ? 'Loading...' : children}
      </StyledButton>
    );
  },
);

Button.defaultProps = {
  $isLoading: false,
  $type: 'primary',
};

export default Button;
