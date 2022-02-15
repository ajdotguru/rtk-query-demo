import { useGetUsersQuery } from 'services';

export const UsersList = () => {
	const { data: users = [], isFetching, isError } = useGetUsersQuery();

	if (isFetching) {
		return <h1>Loading...</h1>;
	}

	if (isError) {
		return <h1>Could not fetch Users data</h1>;
	}

	return (
		<ul>
			{users.map(({ id, name }) => (
				<li key={id}>{name}</li>
			))}
		</ul>
	);
};
