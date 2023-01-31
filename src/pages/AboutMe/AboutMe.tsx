import profilePhoto from './../../assets/home-image.png';
const AboutMe = () => {
	return (
		<div className='container'>
			<div className='img-place'>
				<img src={profilePhoto} alt='' />
			</div>
			<div className='information'>
				<p>Etiquetas</p>
				<h3>Algun titulo</h3>
				<div className='description'>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos labore maxime alias
						quidem magni reiciendis suscipit, praesentium culpa est natus deserunt? Necessitatibus
						exercitationem aliquid accusamus repudiandae laboriosam doloremque labore consequuntur?
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta necessitatibus,
						provident laborum magni magnam quibusdam ipsum aliquid est accusamus aliquam veniam quae
						fugiat et, quam deserunt. Minima optio maxime sapiente?
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
