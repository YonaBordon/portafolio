import { Data } from './Data';
import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<>
			<div className='bar-container'>
				{Data.map((item, index) => {
					return (
						<div className='bar-item'>
							<Link to={item.path}>
								<div className='bar-icon'>{item.icon}</div>
							</Link>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default NavBar;
