import { useContext } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';

import { ThemeContext } from './context/ThemeContext';

import AboutMe from './pages/AboutMe/AboutMe';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Layout from './components/Layout/Layout';
import Projects from './pages/Projects/Projects';
import Skills from './pages/Skills/Skills';

import './sass/main.scss';

function App() {
	const { theme } = useContext(ThemeContext);
	return (
		<HashRouter>
			<div className={`${theme} flex`}>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route index element={<Home />} />
						<Route path='/SobreMi' element={<AboutMe />} />
						<Route path='/Habilidades' element={<Skills />} />
						<Route path='/Proyectos' element={<Projects />} />
						<Route path='/Contacto' element={<Contact />} />
					</Route>
				</Routes>
			</div>
		</HashRouter>
	);
}

export default App;
