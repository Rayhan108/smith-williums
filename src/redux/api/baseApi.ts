import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { RootState } from '../store';


const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_HOST_API,
  prepareHeaders: (headers,
     // eslint-disable-next-line @typescript-eslint/no-unused-vars
     { getState }
    ) => {
    headers.set('Accept', 'application/json');

    // ✅ Get token from Redux store
    // const token = (getState() as RootState).auth.token;

    // if (token) {
    //   headers.set('Authorization', `Bearer ${token}`);
    // }
    // return headers;
  },

});

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: baseQuery,
  tagTypes: [
    'packages',
    'payments',
  ],
  endpoints: () => ({}),
});
