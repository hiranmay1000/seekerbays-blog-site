import React, { useState } from "react";
import { AiFillCloseSquare, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.production";

function Header() {
    const menuIcon = <AiOutlineMenu />;

    const [menuOpen, setMenuOpen] = useState(false);
    const [bar, setBarToCross] = useState(menuIcon);

    const toggleMenu = () => {
        if (!menuOpen) {
            document.getElementById("nav-menu-slide").style.transform =
                "translateY(0%)";

            setMenuOpen(true);
            setBarToCross(<AiFillCloseSquare />);
        } else {
            document.getElementById("nav-menu-slide").style.transform =
                "translateY(-100%)";

            setMenuOpen(false);
            setBarToCross(menuIcon);
        }
    };

    const closeMenu = () => {
        setMenuOpen(false);
        toggleMenu();
    };

    return (
        <>
            <div id="nav-menu-slide">
                <NavContent menuSlideUP={closeMenu} />
            </div>
            <div className="navbar">
                <nav>
                    <NavContent />
                    <button onClick={toggleMenu}>{bar}</button>
                </nav>
            </div>
        </>
    );
}

const NavContent = (props) => (
    <>
        <h2 id="heroLogo">
            Seeker<span style={{ color: "crimson" }}>Bays</span>
        </h2>

        <main>
            <HashLink onClick={props.menuSlideUP} to="/#home">
                Home
            </HashLink>
            <HashLink onClick={props.menuSlideUP} to="/#about">
                About
            </HashLink>
            <HashLink onClick={props.menuSlideUP} to="/#contact">
                contact
            </HashLink>
            <Link onClick={props.menuSlideUP} to="/">
                Resume
            </Link>
            <Link onClick={props.menuSlideUP} to="/contents">
                Contents
            </Link>
        </main>
    </>
);

export default Header;
