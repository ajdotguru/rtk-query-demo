import { configureStore } from '@reduxjs/toolkit';
import { jsonplaceholderApi } from 'services/jsonplaceholderApi';
import { userSlice } from 'store/slices';

export const store = configureStore({
	reducer: {
		[jsonplaceholderApi.reducerPath]: jsonplaceholderApi.reducer,
		user: userSlice.reducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(jsonplaceholderApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
