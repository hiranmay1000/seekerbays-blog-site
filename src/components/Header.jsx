import React, { useState } from "react";
import { AiFillCloseSquare, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import "../styles/colors.scss";
import "../styles/home.scss";

function Header(header) {
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
            <div id="home"></div>
            <div id="nav-menu-slide">
                <NavContent menuHide={closeMenu} toggleIcon={header.icon}/>
            </div>
            <div className="navbar">
                <nav>
                    <NavContent toggleMode={header.toggleMode} toggleIcon={header.icon} />
                    <button onClick={toggleMenu}>{bar}</button>
                </nav>
            </div>
        </>
    );
}

const NavContent = (props) => (
    <>
        <h2>
            Seeker<span style={{ color: "crimson" }}>Bays</span>
        </h2>

        <main>
            <HashLink onClick={props.menuHide} to="/#home">
                Home
            </HashLink>
            <HashLink onClick={props.menuHide} to="/#about">
                About
            </HashLink>
            <HashLink onClick={props.menuHide} to="/#contact">
                contact
            </HashLink>
            <Link onClick={props.menuHide} to="/">
                Resume
            </Link>
            <Link onClick={props.menuHide} to="/contents">
                Contents
            </Link>
            <Link id="mode-icon" onClick={props.toggleMode}>
                {props.toggleIcon}
            </Link>
        </main>
    </>
);

export default Header;
