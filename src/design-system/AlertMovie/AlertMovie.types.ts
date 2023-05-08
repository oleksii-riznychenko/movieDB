import { SyntheticEvent } from 'react';

export interface IAlertMovie {
  open: boolean;
  message: string;
  variant?: 'success' | 'info' | 'warning' | 'error';
  handleClose: (event: SyntheticEvent<any> | Event) => void;
}
