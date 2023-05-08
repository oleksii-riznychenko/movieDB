import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ITitleData } from '../models';
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
  }),
});

export const { useGetMoviesOrSeriesTVInformationQuery } = titleAPI;
