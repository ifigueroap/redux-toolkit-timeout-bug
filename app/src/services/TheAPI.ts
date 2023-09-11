import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const globalApiTimeout = 10;

export const TheAPI = createApi({
  reducerPath: "TheAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
    timeout: globalApiTimeout,
  }),
  endpoints: (builder) => ({
    getThing: builder.query({
      query: ({ thingId }) => `/things/${thingId}`,
    }),
  }),
});
