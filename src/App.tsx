import { Provider } from 'react-redux';
import { store } from 'store';
import { UserDetailsContainer, UsersList } from 'features';
import 'app.css';

export const App = () => (
	<Provider store={store}>
		<div className="container">
			<UsersList />
			<UserDetailsContainer />
		</div>
	</Provider>
);
