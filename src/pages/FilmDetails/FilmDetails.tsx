import { Layout } from '../../components';
import { ITitleData } from '../../models';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const FilmDetails = (): JSX.Element => {
  // useGetMoviesOrSeriesTVInformationQuery
  const { t, i18n } = useTranslation();
  //const data: ITitleData = localStorage.getItem('lol');

  return (
    <Layout>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ width: '33%' }}></Box>
        <Box sx={{ width: '33%' }}>
          <Typography>title</Typography>
          <Typography>
            {t('filmDetails.originalTitle')}: originalTitle
          </Typography>
        </Box>
        <Box sx={{ width: '33%' }}></Box>
      </Box>
    </Layout>
  );
};
