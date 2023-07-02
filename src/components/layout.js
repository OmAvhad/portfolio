import Navbar from "./navbar"

const Layout = ({ children }) => {
    return (
        <div>
            <div className="flex flex-col min-h-[calc(110vh-100px)] w-screen scroll-smooth px-10 py-8">
                <Navbar/>
                {children}
            </div>
        </div>
    )
}

export default Layout