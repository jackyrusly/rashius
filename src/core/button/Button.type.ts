export type ButtonType = 'primary' | 'secondary';

interface IButton {
  /**
   * If true show loading indicator and hide button label
   */
  $isLoading?: boolean;
  /**
   * Button type, The default value is primary
   */
  $type?: ButtonType;
}

export default IButton;
