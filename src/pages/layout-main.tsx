import { Outlet } from "react-router"
import Header from "../core-components/Header"
import MainContent from "../core-components/MainContent"
import Footer from "../core-components/Footer"

const LayoutMain = () => {
    return (
        <>
            <Header />
            <MainContent>
                <Outlet />
            </MainContent>
            <Footer />
        </>
    )
}

export default LayoutMain