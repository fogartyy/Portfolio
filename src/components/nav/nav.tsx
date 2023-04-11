//nav next router
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';



const Nav = () => {
    const [active, setActive] = useState(false);
    const router = useRouter();
    const handleClick = () => {
        setActive(!active
        );
    };
    return (
        <nav className="navbar is-transparent" style={{width:"100%"}}>
            <div className="navbar-container">
                <div className="navbar-brand">
                    <Link href="/">
                        {/* <img src="/logo.png" alt="Logo" /> */}
                    </Link>
                </div>
                <div className={`navbar-menu ${active ? 'is-active' : ''}`}>
                    <div className="navbar-end">
                        <Link className={`navbar-item ${router.pathname === '/' ? 'is-active' : ''}`} href="/">
                        Home
                        </Link>
                        <Link className={`navbar-item ${router.pathname === '/about' ? 'is-active' : ''}`} href="/about">
                            About
                        </Link>
                        <Link className={`navbar-item ${router.pathname === '/contact' ? 'is-active' : ''}`} href="/contact">
                            Contact
                        </Link>
                        <button className="button is-primary is-rounded navbar-item">=</button>
                    </div>
                </div>
                <div className="navbar-burger" onClick={handleClick}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            


        </nav>
    )
    }

//export
export default Nav;