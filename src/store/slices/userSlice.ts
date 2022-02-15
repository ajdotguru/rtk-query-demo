import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

interface IUserState {
	selectedUserId: number;
}

const initialState: IUserState = {
	selectedUserId: 0,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUserId: (state, action: PayloadAction<number>) => {
			state.selectedUserId = action.payload;
		},
	},
});

export const { setUserId } = userSlice.actions;

export const selectSelectedUserId = (state: RootState) => state.user.selectedUserId;
