import Typed from 'react-typed';
import SocialMedia from '../../components/Buttons/SocialMedia';

const Home = () => {
	return (
		<div className='home-container'>
			<div>
				<h1>Hola a todos, soy Yona!</h1>
				<p>Asi me dicen :)</p>
			</div>
			<h3>
				<Typed strings={['Desarrollador Front-End de Santa Fe, Argentina.']} typeSpeed={50} />
			</h3>
			<SocialMedia />
			<p>Navega por la pagina para saber mas sobre mi.</p>
		</div>
	);
};

export default Home;
