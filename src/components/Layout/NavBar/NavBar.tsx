import { Data } from './Data';
import { Link } from 'react-router-dom';
import ThemeButton from './ThemeButton/ThemeButton';

const NavBar = () => {
	return (
		<>
			<div className='bar-container'>
				{Data.map((item, index) => {
					return (
						<div className='bar-item' key={index}>
							<Link to={item.path}>
								<div className='bar-icon'>{item.icon}</div>
							</Link>
						</div>
					);
				})}
					<ThemeButton />
			</div>
		</>
	);
};

export default NavBar;
