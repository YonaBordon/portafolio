import React, { ReactNode } from 'react';
import NavBar from './NavBar/NavBar';
import { Outlet } from 'react-router-dom';

interface Props {
	children?: ReactNode;
}

const Layout = ({ children }: Props) => {
	return (
		<>
			{children}
			<Outlet />
			<NavBar />
		</>
	);
};

export default Layout;
