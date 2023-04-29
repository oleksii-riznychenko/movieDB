import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ITitleData } from '../models';
import { baseUrl, APIKEY } from './API';

export const titleAPI = createApi({
  reducerPath: 'titleAPI',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['title'],
  endpoints: (build) => ({
    getMoviesOrSeriesTVInformation: build.query<
      ITitleData,
      { lang: string; id: number }
    >({
      query: ({ lang = 'en', id }) => ({
        url: `/${lang}/API/Title/${APIKEY}/${id}`,
      }),
      providesTags: () => ['title'],
    }),
  }),
});

export const { useGetMoviesOrSeriesTVInformationQuery } = titleAPI;
