import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.production";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    console.log(menuOpen);

    const toggleMenu = () => {
        if (menuOpen == false) {
            setMenuOpen(true);
        } else {
            setMenuOpen(false);
        }
    };

    return (
        <div className="navbar">
            <nav>
                <NavContent />
                <button onClick={toggleMenu}>
                    <AiOutlineMenu />
                </button>
            </nav>
        </div>
    );
}

const NavContent = () => (
    <>
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
    </>
);

export default Header;
