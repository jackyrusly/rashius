export type TextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type TextColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info';

interface IText {
  size?: TextSize;
  color?: TextColor;
}

export default IText;
