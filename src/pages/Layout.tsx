import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

type Props = {}

const Layout = (props: Props) => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout