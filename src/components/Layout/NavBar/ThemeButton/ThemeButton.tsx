import * as TiIcons from 'react-icons/io5';
import { useContext } from 'react';
import { ThemeContext } from '../../../../context/ThemeContext';

const ThemeButton = () => {
	const { theme, setTheme } = useContext(ThemeContext);

	return (
		<>
			<div
				className='bar-item theme-item'
				onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
			>
				{theme === 'light' ? (
					<TiIcons.IoMoonOutline size={25} />
				) : (
					<TiIcons.IoSunnyOutline size={25} />
				)}
			</div>
		</>
	);
};

export default ThemeButton;
