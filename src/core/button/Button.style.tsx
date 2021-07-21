import tw, { styled } from 'twin.macro';
import IButton from './Button.type';

const buttonBackgroundColor = {
  primary: tw`bg-blue-500`,
  secondary: tw`bg-green-400`,
};

const buttonHoverBackgroundColor = {
  primary: tw`hover:bg-blue-600`,
  secondary: tw`hover:bg-green-500`,
};

const StyledButton = styled.button<IButton>(({ $isLoading, $type }) => [
  buttonBackgroundColor[$type!],
  !$isLoading && buttonHoverBackgroundColor[$type!],
  $isLoading && tw`opacity-75 cursor-not-allowed`,
  tw`transition-colors duration-500 py-2 px-4 shadow-md rounded-full inline text-white focus:outline-none`,
]);

export default StyledButton;
