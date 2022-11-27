import { CharecterType, CharectersApiResponseType } from './types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Defining a service using a base URL and expected endpoints
export const fetchCharectersApi = createApi({
    reducerPath: 'fetchCharectersApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
    endpoints: (builder) => ({
        fetchCharecters: builder.query<CharectersApiResponseType, string>({
            query: (page) => `character?page=${page}`,
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useFetchCharectersQuery } = fetchCharectersApi




////////////////////////////////////////////



// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
    return new Promise<{ data: number }>((resolve) =>
        setTimeout(() => resolve({ data: amount }), 500)
    );
}

// A mock function to mimic making an async request for data
export function fetchCharechers(url = "https://rickandmortyapi.com/api/character", page = 1) {
    const ApiEndpoint = url + "?page=" + page;
    return new Promise<{ data: number }>((resolve) =>
        setTimeout(() => resolve({ data: 10 }), 500)
    );
}

