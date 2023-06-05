import {
  Paper,
  Table,
  TableBody,
  TableHead,
  TableContainer,
} from '@mui/material';
import { ITableMovie } from './TableMovie.types';
import './TableMovie.scss';

export const TableMovie = ({
  headContent,
  bodyContent,
  className = '',
}: ITableMovie): JSX.Element => {
  return (
    <TableContainer className={`table-movie ${className}`} component={Paper}>
      <Table size="small">
        <TableHead>{headContent}</TableHead>
        <TableBody>{bodyContent}</TableBody>
      </Table>
    </TableContainer>
  );
};
