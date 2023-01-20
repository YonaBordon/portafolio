import React, { ReactNode } from 'react';
import NavBar from './NavBar/NavBar';
import { Outlet } from 'react-router-dom';

interface Props {
	children?: ReactNode;
}

const Layout = ({ children }: Props) => {
	return (
		<div className='layout-container'>
			<NavBar />
			{children}
			<Outlet />
		</div>
	);
};

export default Layout;
