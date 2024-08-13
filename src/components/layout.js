import Footer from "./footer"
import Navbar from "./navbar"

const Layout = ({ children }) => {
    return (
        <>
            <div className="w-full m-auto max-w-[1100px] flex flex-col font-nunito scroll-smooth px-10 py-6">
                <Navbar/>
                {children}
                <Footer/>
            </div>
        </>
    )
}

export default Layout