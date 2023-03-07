import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.production";

function Header() {
    return (
        <div className="navbar">
            <nav>
                <h2>
                    Seeker<span style={{ color: "crimson" }}>Bays</span>
                </h2>
                <main>
                    <HashLink to="/#home">Home</HashLink>
                    <HashLink to="/#about">About</HashLink>
                    <HashLink to="/#contact">contact</HashLink>
                    <Link to="/">Resume</Link>
                    <Link to="/contents">Contents</Link>
                </main>
            </nav>
        </div>
    );
}

export default Header;
