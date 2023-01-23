import Typed from 'react-typed';

const Home = () => {
	return (
		<div className='home-container'>
			<div>
				<h1>Hola a todos, soy Yona!</h1>
				<p>O asi me dicen :)</p>
			</div>
			<h3>
				Desarrollador Web:{' '}
				<Typed
					strings={['Front-End', 'Back End (en proceso...)']}
					typeSpeed={150}
					backSpeed={100}
					loop
				/>
			</h3>
			<div>linkedin y git botones</div>
			<p>Navega por la pagina para saber mas sobre mi.</p>
		</div>
	);
};

export default Home;
