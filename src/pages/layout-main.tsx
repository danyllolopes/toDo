import { Outlet } from "react-router"
import Header from "../core-components/Header"
import MainContent from "../core-components/MainContent"

const LayoutMain = () => {
    return (
        <>
            <Header />
            <MainContent>
                <Outlet />
            </MainContent>
        </>
    )
}

export default LayoutMain