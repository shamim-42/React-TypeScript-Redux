import { CharectersApiResponseType } from './types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Defining a service using a base URL and expected endpoints
export const fetchCharectersApi = createApi({
    reducerPath: 'fetchCharectersApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/character' }),
    endpoints: (builder) => ({
        fetchCharecters: builder.query<CharectersApiResponseType, string>({
            query: (params) => `?${params}`,
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useFetchCharectersQuery } = fetchCharectersApi
