import { IconButton } from '@mui/material';
import { IIconButtonMovie } from './IconButtonMovie.types';
import './IconButtonMovie.scss';

export const IconButtonMovie = ({
  Icon,
  onClick,
  colorIcon,
  className = '',
  ariaLabel = '',
}: IIconButtonMovie): JSX.Element => {
  return (
    <IconButton
      size="medium"
      color={colorIcon}
      onClick={onClick}
      aria-label={ariaLabel}
      className={`icon-button-movie ${className}`}
    >
      <Icon />
    </IconButton>
  );
};
