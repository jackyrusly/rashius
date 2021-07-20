import { FC } from 'react';
import IText from './Text.type';
import StyledText from './Text.style';

const Text: FC<IText> = ({ children, size = 'md' }) => {
  return <StyledText size={size}>{children}</StyledText>;
};

export default Text;
