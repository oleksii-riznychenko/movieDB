import { ReactNode } from 'react';

export interface IModalMovie {
  open: boolean;
  onClose: (event?: object, reason?: string) => void;
  title: string;
  content: ReactNode;
}
