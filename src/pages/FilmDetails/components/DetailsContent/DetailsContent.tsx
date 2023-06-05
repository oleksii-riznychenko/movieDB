import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import {
  AlertMovie,
  ModalMovie,
  ButtonMovie,
  IconButtonMovie,
} from '../../../../design-system';
import {
  Link,
  Bookmark,
  PlayArrowOutlined,
  BookmarkBorderOutlined,
} from '@mui/icons-material';
import { DetailsTable } from '../DetailsTable';
import { IDetailsContent } from './DetailsContent.types';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { LangEnum } from '../../../../models';
import {
  saveFilmToBookmarks,
  removeFilmFromBookmarks,
  FilmBookmark,
} from '../../../../slices/rootSlice';

export const DetailsContent = ({ data }: IDetailsContent) => {
  const { t } = useTranslation();
  const language = useAppSelector((state) => state.root.language);
  const filmBookmarks: FilmBookmark[] = useAppSelector((state) =>
    JSON.parse(state.root.filmBookmarks)
  );
  const dispatch = useAppDispatch();
  const [filmSaved, setFilmSaved] = useState<boolean>(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [openTrailer, setOpenTrailer] = useState<boolean>(false);

  const handleOpenTrailer = () => setOpenTrailer(true);
  const handleCloseTrailer = () => setOpenTrailer(false);

  const handleSaveFilm = () => {
    if (filmSaved) {
      setFilmSaved(false);
      if (data.id) dispatch(removeFilmFromBookmarks(data.id));
    } else {
      setFilmSaved(true);
      if (data.id) dispatch(saveFilmToBookmarks(data.id));
    }
  };
  const handleCopyLink = () => {
    const currentUrl = location.href;

    navigator.clipboard.writeText(currentUrl).then();
    setOpenAlert(true);
  };
  const handleClose = () => setOpenAlert(false);

  useEffect(() => {
    const filmVal = filmBookmarks?.find((film) => film === data.id);

    setFilmSaved(!!filmVal);
  }, []);

  return (
    <Box className="film-details__content">
      <Box className="film-details__row">
        <Typography variant="h4" className="film-details__title">
          {data.title}
        </Typography>
      </Box>
      <Box className="film-details__row">
        <Typography className="film-details__original-title">
          {t('filmDetails.originalTitle')}:&nbsp;
          {data.originalTitle || data.title}
        </Typography>
      </Box>
      <Box className="film-details__row film-details__row--buttons">
        {!!data.trailer && (
          <>
            <ButtonMovie
              onClick={handleOpenTrailer}
              EndIcon={<PlayArrowOutlined />}
              content={t('filmDetails.watchTrailer')}
              className="film-details__background"
            />
            <ModalMovie
              open={openTrailer}
              onClose={handleCloseTrailer}
              title={data.trailer?.fullTitle || ''}
              content={
                <iframe
                  allowFullScreen
                  className="film-details__trailer"
                  title={data.trailer?.fullTitle || ''}
                  src={data.trailer?.linkEmbed || ''}
                />
              }
            />
          </>
        )}
        <IconButtonMovie
          aria-label="save"
          onClick={handleSaveFilm}
          colorIcon={filmSaved ? 'warning' : 'primary'}
          Icon={filmSaved ? Bookmark : BookmarkBorderOutlined}
          className="film-details__background"
        />
        <IconButtonMovie
          Icon={Link}
          aria-label="copy link"
          onClick={handleCopyLink}
          className="film-details__background"
        />
        <AlertMovie
          open={openAlert}
          handleClose={handleClose}
          message={t('filmDetails.linkSuccessfullyCopied')}
        />
      </Box>
      <Box className="film-details__row">
        <Typography variant="body2" className="film-details__description">
          {language === LangEnum.UA ? data.plotLocal : data.plot}
        </Typography>
      </Box>
      <Box className="film-details__row">
        <Typography variant="h5" className="film-details__title">
          {t('filmDetails.details')}
        </Typography>
      </Box>
      <Box className="film-details__row">
        <DetailsTable data={data} />
      </Box>
    </Box>
  );
};
