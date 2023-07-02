const Layout = ({ children }) => {
    return (
        <div>
            <div className="flex flex-col min-h-[calc(110vh-100px)] w-screen scroll-smooth">
                {children}
            </div>
        </div>
    )
}

export default Layout