import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const jsonplaceholderApi = createApi({
	reducerPath: 'jsonplaceholderApi',
	keepUnusedDataFor: 3600, // in seconds
	baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
	endpoints: builder => ({
		getUsers: builder.query<any, void>({
			query: () => 'users',
		}),
	}),
});

export const { useGetUsersQuery } = jsonplaceholderApi;
