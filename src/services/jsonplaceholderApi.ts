import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser } from 'models';

export const jsonplaceholderApi = createApi({
	reducerPath: 'jsonplaceholderApi',
	keepUnusedDataFor: 3600, // in seconds
	baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
	endpoints: builder => ({
		getUsers: builder.query<IUser[], void>({
			query: () => 'users',
		}),
	}),
});

export const { useGetUsersQuery } = jsonplaceholderApi;
