import Footer from "./Footer"
import Sidebar from "./Sidebar"

const Layout = ({ children }) => {
    return (
        <div className="flex min-h-screen bg-white text-black font-nunito">
            <Sidebar />
            <main className="flex-1 md:pl-32 px-5 md:px-10 max-w-5xl mx-auto w-full">
                {children}
                <Footer/>
            </main>
        </div>
    )
}

export default Layout