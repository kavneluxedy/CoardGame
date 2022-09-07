import React from 'react';

import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

// type Props = {}

const Layout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	)
}

export default Layout