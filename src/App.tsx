import { Provider } from 'react-redux';
import { store } from 'store';
import { UsersList } from 'features';
import 'app.css';

export const App = () => {
	return (
		<Provider store={store}>
			<div className="container">
				<UsersList />
			</div>
		</Provider>
	);
};
