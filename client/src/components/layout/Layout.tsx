import React from 'react';
import { Outlet } from 'react-router-dom'
import Menu from './menu/Menu';

const Layout = (): JSX.Element => {

	return (
		<>
			<Menu />
			<Outlet />
		</>
	)
}

export default Layout