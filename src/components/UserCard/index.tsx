import { IUser } from 'models';

export const UserCard: React.FC<{ user: IUser }> = ({ user }) => (
	<div className="user-card">
		<div className="flex justify-between">
			<h1>{user.name}</h1>
			<h2>{user.username}</h2>
		</div>
		<p>Email: {user.email}</p>
		<p>Phone: {user.phone}</p>
		<p>Website: {user.website}</p>
	</div>
);
