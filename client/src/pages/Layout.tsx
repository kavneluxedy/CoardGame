import React from 'react';
import Header from '../components/Main/Header'
import Footer from '../components/Main/Footer'
import { Outlet } from 'react-router-dom'

const Layout = (): JSX.Element => {

	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	)
}

export default Layout