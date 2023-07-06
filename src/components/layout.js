import Navbar from "./navbar"
import TopBar from "@/components/topBar"

const Layout = ({ children }) => {
    return (
        <>
            <TopBar/>
            <div className="flex flex-col w-screen scroll-smooth px-10 py-8">
                <Navbar/>
                {children}
            </div>
        </>
    )
}

export default Layout