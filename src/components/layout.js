import Footer from "./Footer"
import Sidebar from "./Sidebar"
import { useRouter } from "next/router"

const Layout = ({ children }) => {
    const router = useRouter()
    const showSidebar = router.pathname === '/'

    return (
        <div className="flex min-h-screen bg-white text-black">
            {showSidebar && <Sidebar />}
            <main className={`flex-1 ${showSidebar ? 'lg:pl-32' : ''} px-5 md:px-10 max-w-6xl mx-auto w-full`}>
                {children}
                <Footer/>
            </main>
        </div>
    )
}

export default Layout