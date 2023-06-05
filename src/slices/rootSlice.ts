import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LangEnum } from '../models';

export type LANG = LangEnum.UA | LangEnum.EN;
export type FilmBookmark = string;

interface ConfigState {
  language: LANG;
  filmBookmarks: string;
}

const initialState: ConfigState = {
  language: LangEnum.UA,
  filmBookmarks: JSON.stringify([]),
};

const configSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    updateLanguage: (state, action: PayloadAction<LANG>) => {
      state.language = action.payload;
    },
    saveFilmToBookmarks: (state, action: PayloadAction<FilmBookmark>) => {
      const filmBookmarks: FilmBookmark[] = JSON.parse(state.filmBookmarks);

      state.filmBookmarks = JSON.stringify([...filmBookmarks, action.payload]);
    },
    removeFilmFromBookmarks: (state, action: PayloadAction<FilmBookmark>) => {
      const filmBookmarks: FilmBookmark[] = JSON.parse(state.filmBookmarks);

      state.filmBookmarks = JSON.stringify(
        filmBookmarks.filter((film) => film !== action.payload)
      );
    },
  },
});

export const { updateLanguage, saveFilmToBookmarks, removeFilmFromBookmarks } =
  configSlice.actions;
export default configSlice.reducer;
