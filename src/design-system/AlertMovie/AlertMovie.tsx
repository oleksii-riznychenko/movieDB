import { Alert, Snackbar } from '@mui/material';
import { IAlertMovie } from './AlertMovie.types';
import './AlertMovie.scss';

export const AlertMovie = ({
  open,
  message,
  handleClose,
  variant = 'success',
}: IAlertMovie): JSX.Element => {
  return (
    <Snackbar
      open={open}
      onClose={handleClose}
      className="alert-movie"
      autoHideDuration={5000}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <Alert
        severity={variant}
        onClose={handleClose}
        className="alert-movie__alert"
      >
        {message}
      </Alert>
    </Snackbar>
  );
};
