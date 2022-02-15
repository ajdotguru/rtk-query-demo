import { configureStore } from '@reduxjs/toolkit';
import { jsonplaceholderApi } from 'services/jsonplaceholderApi';

export const store = configureStore({
	reducer: {
		[jsonplaceholderApi.reducerPath]: jsonplaceholderApi.reducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(jsonplaceholderApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
