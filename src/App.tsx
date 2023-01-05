import { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Layout from './components/Layout/Layout';

import { ThemeContext } from './context/ThemeContext';

import './sass/main.scss';
import AboutMe from './pages/AboutMe/AboutMe';
import Skills from './pages/Skills/Skills';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';

function App() {
	const { theme } = useContext(ThemeContext);
	return (
		<div className={`${theme} flex`}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route index element={<Home />} />
						<Route path='/SobreMi' element={<AboutMe />} />
						<Route path='/Habilidades' element={<Skills />} />
						<Route path='/Proyectos' element={<Projects />} />
						<Route path='/Contacto' element={<Contact />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
