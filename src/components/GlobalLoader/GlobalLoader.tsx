import { Box, CircularProgress } from '@mui/material';

export const GlobalLoader = () => {
  return (
    <Box
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <CircularProgress />
    </Box>
  );
};
