import { useAppSelector } from 'store/hooks';
import { selectSelectedUserId } from 'store/slices';
import { useGetUserQuery } from 'services';
import { UserCard } from 'components';

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

	return <UserCard user={user} />;
};

export const UserDetailsContainer = () => {
	const selectedUserId = useAppSelector(selectSelectedUserId);

	return <UserDetails id={selectedUserId} />;
};
