import { useAppSelector } from 'store/hooks';
import { selectSelectedUserId } from 'store/slices';
import { useGetUserQuery } from 'services';

interface IUserDetailsProps {
	id: number;
}

const UserDetails: React.FC<IUserDetailsProps> = ({ id }): JSX.Element => {
	const { data: user, isFetching, isError } = useGetUserQuery(id, { skip: id === 0 });

	if (isFetching) {
		return <h1>Loading...</h1>;
	}

	if (isError) {
		return <h1>Could not fetch User data</h1>;
	}

	if (!user) {
		return <></>;
	}

	const { name, username, email, phone, website } = user;

	return (
		<>
			<h1>{name}</h1>
			<h2>{username}</h2>
			<p>Email: {email}</p>
			<p>Phone: {phone}</p>
			<p>Website: {website}</p>
		</>
	);
};

export const UserDetailsContainer = () => {
	const selectedUserId = useAppSelector(selectSelectedUserId);

	return <UserDetails id={selectedUserId} />;
};
