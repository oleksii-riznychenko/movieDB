import { Box, CircularProgress } from '@mui/material';
import './GlobalLoader.scss';

export const GlobalLoader = () => {
  return (
    <div className="loader">
      <Box
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <CircularProgress />
      </Box>
    </div>
  );
};
