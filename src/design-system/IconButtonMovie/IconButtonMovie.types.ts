import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';
import { MouseEventHandler } from 'react';

export interface IIconButtonMovie {
  ariaLabel?: string;
  className?: string;
  colorIcon?:
    | 'inherit'
    | 'default'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning';
  Icon: OverridableComponent<SvgIconTypeMap>;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
