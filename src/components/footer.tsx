//footer
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="grid grid-cols-12 grid-rows-3 gap-4">
                    <div className="col-start-1 col-span-12 row-start-1 row-span-1">
                        <h1 className="title">Kyle Fogarty-Anderson</h1>
                    </div>
                    <div className="col-start-1 col-span-12 row-start-2 row-span-1">
                        <h2 className="subtitle">Full Stack Developer</h2>
                    </div>
                    <div className="col-start-1 col-span-12 row-start-3 row-span-1">
                        <a href="https://www.linkedin.com/in/kyle-fogarty-anderson-2b2b3a1a6/" target="_blank" rel="noopener noreferrer"><img src="/images/linkedin.svg" alt="LinkedIn" className="social-icon"/></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

//export
export default Footer;