import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';

import './sass/main.scss';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route index element={<Home />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
