export type ButtonType = 'primary' | 'secondary';

interface IButton {
  $isLoading?: boolean;
  $type?: ButtonType;
}

export default IButton;
