import { useGetUsersQuery } from 'services';
import { useAppDispatch } from 'store/hooks';
import { setUserId } from 'store/slices';

export const UsersList = () => {
	const { data: users = [], isFetching, isError } = useGetUsersQuery();
	const dispatch = useAppDispatch();

	if (isFetching) {
		return <h1>Loading...</h1>;
	}

	if (isError) {
		return <h1>Could not fetch Users data</h1>;
	}

	return (
		<ul>
			{users.map(({ id, name }) => (
				<li key={id} className="list-item" onClick={() => dispatch(setUserId(id))}>
					{name}
				</li>
			))}
		</ul>
	);
};
