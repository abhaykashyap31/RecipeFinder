import "./index.css"
//  import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Services from "./Services";
import Home from "./Home";
import Abouts from "./Abouts";
import contact from "./Contacts";

// PascalCasing
function Contacts(){
    // JSX: Javascript XML

    return (

        <>
        <BrowserRouter>
        <Routes>
        <header>
        <h2 className = "logo">Recipe Finder</h2>
        <nav className = "navigation">
            <Route path="Home" element={<Home />} />
            <Route path="Abouts" element={<Abouts />} />
            <Route path="Services" element={<Services />} />
            <Route path="Contacts" element={<Contacts />} />
        </nav>
        <Link to = "src\Login.tsx">
            <div className = "button"><button className = "btnLogin-popup">Login</button></div>
        </Link>
        </header></Routes>
        </BrowserRouter>
        <script src = "script.js"></script>
    </>
)
}

export default Contacts;