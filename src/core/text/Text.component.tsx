import { FC } from 'react';
import StyledText from './Text.style';

const Text: FC = ({ children }) => {
  return <StyledText>{children}</StyledText>;
};

export default Text;
