import React from 'react';
import { BrowserRouter,Link } from 'react-router-dom';

function Header(props: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) {
    return (
        <>
    <header>
        <h2 className='logo'>{props.name}</h2>
        <nav className="navigation">
            <BrowserRouter>
               <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/services">Services</Link>
            </BrowserRouter>
        </nav>
        <BrowserRouter><Link to="/login"><button className="btnLogin-popup">Login</button></Link></BrowserRouter>
    </header>
    <script src = 'script.js'></script>
    </>
        );
}

export default Header;