import { Provider } from 'react-redux';
import { store } from 'store';

export const App = () => {
	return (
		<Provider store={store}>
			<h1>Home</h1>
		</Provider>
	);
};
