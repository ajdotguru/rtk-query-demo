export interface IUser {
	id: number;
	name: string;
	username: string;
	email: string;
	phone: string;
	website: string;
}

export type IUsers = Pick<IUser, 'id' | 'name'>[];
