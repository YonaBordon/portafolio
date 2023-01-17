import React from 'react';
import ShortDescription from '../../components/Description/ShortDescription';
import homeImage from '../../assets/home-image.png';

const Home = () => {
	return (
		<div className='home-container'>
			<img className='img' src={homeImage} alt='Imagen Inicio' />
			<ShortDescription />
		</div>
	);
};

export default Home;
