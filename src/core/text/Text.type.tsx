export type TextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type TextColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info';

interface IText {
  /**
   * Text size, The default value is md
   */
  $size?: TextSize;
  /**
   * Text color, The default value is primary
   */
  $color?: TextColor;
}

export default IText;
