import { ITagsMovie } from './TagsMovie.types';
import { Chip } from '@mui/material';
import './TagsMovie.scss';

export const TagsMovie = ({ label }: ITagsMovie): JSX.Element => {
  return <Chip size="small" className="tags-movie" label={label} />;
};
