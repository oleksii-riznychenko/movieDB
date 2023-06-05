import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IImageData, ITitleData } from '../models';
import { baseUrl } from './API';
import { store } from '../store';

const initialLanguage: string = store.getState().apiKey.activeApiKey;

export const titleAPI = createApi({
  reducerPath: 'titleAPI',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['title'],
  endpoints: (build) => ({
    getMoviesOrSeriesTVInformation: build.query<ITitleData, string>({
      query: (id) => ({
        url: `/uk/API/Title/${initialLanguage}/${id}/FullActor,Posters,Images,Trailer,Ratings,Wikipedia`,
      }),
      providesTags: () => ['title'],
    }),
    getImage: build.query<IImageData, string>({
      query: (id) => ({
        url: `/uk/API/Images/${initialLanguage}/${id}/Short`,
      }),
      providesTags: () => ['title'],
    }),
  }),
});

export const { useGetMoviesOrSeriesTVInformationQuery, useGetImageQuery } =
  titleAPI;
