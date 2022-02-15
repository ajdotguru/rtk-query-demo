import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUsers, IUser } from 'models';
import { RootState } from 'store';

const baseQuery = fetchBaseQuery({
	baseUrl: 'https://jsonplaceholder.typicode.com/',
	prepareHeaders: (headers, { getState }) => {
		const token = (getState() as RootState).auth.token;

		if (token) {
			headers.set('authorization', `Bearer ${token}`);
		}

		return headers;
	},
});

export const jsonplaceholderApi = createApi({
	reducerPath: 'jsonplaceholderApi',
	keepUnusedDataFor: 3600, // in seconds
	baseQuery,
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
