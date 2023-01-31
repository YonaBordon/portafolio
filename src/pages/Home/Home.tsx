import Typed from 'react-typed';
import SocialMedia from '../../components/Buttons/SocialMedia';

const Home = () => {
	return (
		<div className='home-container'>
			<div>
				<p>Hola, mi nombre es</p>
				<h1>Carlos Jonatan Bordon</h1>
				<h3>
					<Typed strings={['Desarrollador Front-End <br>Santa Fe, Argentina.']} typeSpeed={50} />
				</h3>
			</div>

			<SocialMedia />
			<p>Navega por la pagina para saber mas sobre mi.</p>
		</div>
	);
};

export default Home;
