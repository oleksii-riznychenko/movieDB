import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';

export interface FooterConfig {
  links: {
    link: string;
    Icon: OverridableComponent<SvgIconTypeMap>;
  }[];
  currentYear: number;
}
