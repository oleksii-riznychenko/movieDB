import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IFullCastData, IImageData, ITitleData } from '../models';
import { baseUrl, APIKEY } from './API';

export const titleAPI = createApi({
  reducerPath: 'titleAPI',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['title'],
  endpoints: (build) => ({
    getMoviesOrSeriesTVInformation: build.query<ITitleData, string>({
      query: (id) => ({
        url: `/uk/API/Title/${APIKEY}/${id}/FullActor,Posters,Images,Trailer,Ratings,Wikipedia`,
      }),
      providesTags: () => ['title'],
    }),
    getImage: build.query<IImageData, string>({
      query: (id) => ({
        url: `/uk/API/Images/${APIKEY}/${id}/Short`,
      }),
      providesTags: () => ['title'],
    }),
    getFullCast: build.query<IFullCastData, string>({
      query: (id) => ({
        url: `/uk/API/FullCast/${APIKEY}/${id}`,
      }),
      providesTags: () => ['title'],
    }),
  }),
});

export const {
  useGetMoviesOrSeriesTVInformationQuery,
  useGetImageQuery,
  useGetFullCastQuery,
} = titleAPI;
