import { MouseEventHandler, ReactNode } from 'react';

export interface IButtonMovie {
  content: string;
  className?: string;
  EndIcon?: ReactNode;
  variant?: 'text' | 'contained' | 'outlined';
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
