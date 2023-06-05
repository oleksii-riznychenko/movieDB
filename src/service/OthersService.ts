import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IActorFull, IMoviesData } from '../models';
import { baseUrl, APIKEY } from './API';

export const otherAPI = createApi({
  reducerPath: 'otherAPI',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['other'],
  endpoints: (build) => ({
    getTop250Movies: build.query<IMoviesData, string>({
      query: (lang = 'en') => ({
        url: `/${lang}/API/Top250Movies/${APIKEY}`,
      }),
      providesTags: () => ['other'],
    }),
    getTop250TVs: build.query<IMoviesData, string>({
      query: (lang = 'en') => ({
        url: `/${lang}/API/Top250TVs/${APIKEY}`,
      }),
      providesTags: () => ['other'],
    }),
    getPopularMovies: build.query<IMoviesData, string>({
      query: (lang = 'en') => ({
        url: `/${lang}/API/MostPopularMovies/${APIKEY}`,
      }),
      providesTags: () => ['other'],
    }),
    getPopularTVs: build.query<IMoviesData, string>({
      query: (lang = 'en') => ({
        url: `/${lang}/API/MostPopularTVs/${APIKEY}`,
      }),
      providesTags: () => ['other'],
    }),
    getInTheaters: build.query<IMoviesData, string>({
      query: (lang = 'en') => ({
        url: `/${lang}/API/InTheaters/${APIKEY}`,
      }),
      providesTags: () => ['other'],
    }),
    getComingSoon: build.query<IMoviesData, string>({
      query: (lang = 'en') => ({
        url: `/${lang}/API/ComingSoon/${APIKEY}`,
      }),
      providesTags: () => ['other'],
    }),
    getBoxOffice: build.query<IMoviesData, string>({
      query: (lang = 'en') => ({
        url: `/${lang}/API/BoxOffice/${APIKEY}`,
      }),
      providesTags: () => ['other'],
    }),
    getBoxOfficeAllTime: build.query<IMoviesData, string>({
      query: (lang = 'en') => ({
        url: `/${lang}/API/BoxOfficeAllTime/${APIKEY}`,
      }),
      providesTags: () => ['other'],
    }),
    getPersonInformation: build.query<IActorFull, string>({
      query: (id) => ({
        url: `/uk/API/Name/${APIKEY}/${id}`,
      }),
      providesTags: () => ['other'],
    }),
  }),
});

export const {
  useGetTop250MoviesQuery,
  useGetTop250TVsQuery,
  useGetPopularMoviesQuery,
  useGetInTheatersQuery,
  useGetComingSoonQuery,
  useGetBoxOfficeQuery,
  useGetBoxOfficeAllTimeQuery,
  useGetPopularTVsQuery,
  useGetPersonInformationQuery,
} = otherAPI;
