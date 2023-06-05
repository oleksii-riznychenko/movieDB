import {
  Box,
  List,
  Avatar,
  Typography,
  ListItemButton,
  ListItemText,
  ListItemAvatar,
} from '@mui/material';
import { IDetailsCast } from './DetailsCast.types';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { configLink } from '../../../../router';
import { KeyboardArrowRight } from '@mui/icons-material';

export const DetailsCast = ({
  filmId,
  actorList,
}: IDetailsCast): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Box className="film-details__cast">
      <Box className="film-details__row">
        <Typography variant="h6" className="film-details__title">
          {t('filmDetails.castAndCrew')}
        </Typography>
      </Box>
      <List className="film-details__row film-details__cast-list">
        {actorList &&
          actorList
            .slice(0, actorList.length > 5 ? 5 : actorList.length)
            .map((star) => (
              <Link to={configLink.person + star.id} key={star.name}>
                <ListItemButton>
                  <ListItemAvatar>
                    <Avatar alt={star.name} src={star.image} />
                  </ListItemAvatar>
                  <ListItemText>
                    <Typography
                      variant="body1"
                      className="film-details__cast-name"
                    >
                      {star.name}
                    </Typography>
                    {star.asCharacter && (
                      <Typography
                        variant="body2"
                        className="film-details__cast-description"
                      >
                        {t('filmDetails.as')} {star.asCharacter}
                      </Typography>
                    )}
                  </ListItemText>
                </ListItemButton>
              </Link>
            ))}
      </List>
      <Box className="film-details__row film-details__redirect-link">
        <Link to={configLink.fullCast + filmId}>
          <Typography variant="body1" className="film-details__title">
            {t('filmDetails.showAll')}
            <KeyboardArrowRight />
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};
