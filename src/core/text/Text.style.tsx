import { memo } from 'react';
import tw, { styled } from 'twin.macro';
import IText, { TextColor, TextSize } from './Text.type';

const chooseTextColor = (textColor: TextColor) => {
  switch (textColor) {
    case 'primary':
      return tw`text-gray-800`;
    case 'secondary':
      return tw`text-indigo-300`;
    case 'success':
      return tw`text-green-400`;
    case 'danger':
      return tw`text-red-600`;
    case 'warning':
      return tw`text-yellow-400`;
    case 'info':
      return tw`text-blue-400`;
  }
};

const chooseFontSize = (fontSize: TextSize) => {
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

const StyledText = styled.div<IText>(({ size, color }) => [
  chooseTextColor(color!),
  chooseFontSize(size!),
]);

export default memo(StyledText);
