import { memo } from 'react';
import tw, { styled } from 'twin.macro';
import IText, { FontSize } from './Text.type';

const chooseFontSize = (fontSize: FontSize) => {
  switch (fontSize) {
    case 'xs':
      return tw`text-xs`;
    case 'sm':
      return tw`text-sm`;
    case 'md':
      return tw`text-base`;
    case 'lg':
      return tw`text-lg`;
    case 'xl':
      return tw`text-xl`;
  }
};

const StyledText = styled.div<IText>(({ size }) => [chooseFontSize(size!)]);

export default memo(StyledText);
