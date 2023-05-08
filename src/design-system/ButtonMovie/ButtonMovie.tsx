import { Button } from '@mui/material';
import { IButtonMovie } from './ButtonMovie.types';
import './ButtonMovie.scss';

export const ButtonMovie = ({
  EndIcon,
  content,
  onClick,
  className = '',
  variant = 'contained',
}: IButtonMovie): JSX.Element => {
  return (
    <Button
      size="large"
      endIcon={EndIcon}
      variant={variant}
      onClick={onClick}
      className={`button-movie ${className}`}
    >
      {content}
    </Button>
  );
};
