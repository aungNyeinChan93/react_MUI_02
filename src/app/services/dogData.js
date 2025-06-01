import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const dogApi = createApi({
    reducerPath: 'dogApi',
    baseQuery: fetchBaseQuery({ baseUrl: `https://dog.ceo/api` }),
    endpoints: (builder) => ({
        getDogs: builder.query({
            query: () => `/breed/hound/images`
        })
    })
})

export const { useGetDogsQuery } = dogApi;
