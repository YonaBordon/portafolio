import { Data } from './Data';
import { NavLink } from 'react-router-dom';
import ThemeButton from './ThemeButton/ThemeButton';

const NavBar = () => {
	const activeStyle = {
		transition: 'background-color 10ms linear',
		background: '#16a34a',
	};

	return (
		<>
			<div className='bar-container'>
				{Data.map((item, index) => {
					return (
						<div key={index}>
							<NavLink
								className='bar-item'
								style={({ isActive }) => (isActive ? activeStyle : undefined)}
								to={item.path}
							>
								<div className='bar-icon'>{item.icon}</div>
								<div className='bar-title'>{item.title}</div>
							</NavLink>
						</div>
					);
				})}
				<ThemeButton />
			</div>
		</>
	);
};

export default NavBar;
