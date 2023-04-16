import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ITop250Data } from '../models';
import { baseUrl, APIKEY } from './API';

export const otherAPI = createApi({
  reducerPath: 'otherAPI',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['other'],
  endpoints: (build) => ({
    getTop250Movies: build.query<ITop250Data, string>({
      query: (lang = 'en') => ({
        url: `/${lang}/API/Top250Movies/${APIKEY}`,
      }),
      providesTags: () => ['other'],
    }),
  }),
});

export const { useGetTop250MoviesQuery } = otherAPI;
