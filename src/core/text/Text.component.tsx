import { FC } from 'react';
import IText from './Text.type';
import StyledText from './Text.style';

export const Text: FC<IText> = ({
  children,
  color = 'primary',
  size = 'md',
}) => {
  return (
    <StyledText color={color} size={size}>
      {children}
    </StyledText>
  );
};

export default Text;
