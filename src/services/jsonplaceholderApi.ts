import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUsers, IUser } from 'models';

export const jsonplaceholderApi = createApi({
	reducerPath: 'jsonplaceholderApi',
	keepUnusedDataFor: 3600, // in seconds
	baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
	endpoints: builder => ({
		getUsers: builder.query<IUsers, void>({
			query: () => 'users',
		}),
		getUser: builder.query<IUser, number>({
			query: id => `users/${id}`,
		}),
	}),
});

export const { useGetUsersQuery, useGetUserQuery } = jsonplaceholderApi;
