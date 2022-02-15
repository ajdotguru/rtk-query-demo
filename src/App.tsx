import { Provider } from 'react-redux';
import { store } from 'store';
import { UsersList } from 'features';

export const App = () => {
	return (
		<Provider store={store}>
			<h1>Home</h1>
			<UsersList />
		</Provider>
	);
};
