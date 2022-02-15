import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IAuthState {
	token: string | null;
}

const initialState: IAuthState = {
	token: null,
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setToken: (state, action: PayloadAction<string>) => {
			state.token = action.payload;
		},
	},
});

export const { setToken } = authSlice.actions;
