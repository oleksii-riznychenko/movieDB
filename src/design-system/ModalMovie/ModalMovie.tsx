import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { IModalMovie } from './ModalMovie.types';
import { useTranslation } from 'react-i18next';

export const ModalMovie = ({
  open,
  title,
  onClose,
  content,
}: IModalMovie): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xl">
      <DialogTitle id="scroll-dialog-title">{title}</DialogTitle>
      <DialogContent>{content}</DialogContent>
      <DialogActions>
        <Button onClick={onClose}>{t('modal.close')}</Button>
      </DialogActions>
    </Dialog>
  );
};
