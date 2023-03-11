import React, { useState } from "react";
import { AiFillCloseSquare, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Header(header) {
    const [showMenu, setShowMenu] = useState(false);
    const [barIcon, setBarToCross] = useState(<AiOutlineMenu />);
    const [headerSize, setNewHeaderSize] = useState("");

    const toggleMenuMobile = () => {
        if (!showMenu) {
            document.getElementById("nav-menu-slide").style.transform =
                "translateY(0%)";

            setShowMenu(true);
            setBarToCross(<AiFillCloseSquare />);
        } else {
            document.getElementById("nav-menu-slide").style.transform =
                "translateY(-200%)";

            setShowMenu(false);
            setBarToCross(<AiOutlineMenu />);
        }
    };

    const menuHide = () => {
        setShowMenu(false);
        toggleMenuMobile();
    };

    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
            setNewHeaderSize("-scrolled");
        } else {
            setNewHeaderSize("");
        }
    });

    return (
        <>
            <div id={`alert-box-container`}>
                <div className="alert alert-light alert-box" role="alert">
                    {header.displayModes} mode enabled
                </div>
            </div>
            <div id="home"></div>
            <div id="nav-menu-slide">
                <h2>
                    Seeker<span style={{ color: "crimson" }}>Bays</span>
                </h2>

                <main>
                    <HashLink onClick={menuHide} to="/#home">
                        Home
                    </HashLink>
                    <HashLink onClick={menuHide} to="/#about">
                        About
                    </HashLink>
                    <HashLink onClick={menuHide} to="/#contact">
                        contact
                    </HashLink>
                    <Link onClick={menuHide} to="/">
                        Resume
                    </Link>
                    <Link onClick={menuHide} to="/contents">
                        Contents
                    </Link>
                    <Link
                        id="mode-icon"
                        onClick={() => {
                            header.toggleMode();
                            menuHide();
                        }}
                    >
                        {header.icon}
                    </Link>
                </main>
            </div>
            <div className="navbar">
                <nav className={`header${headerSize}`}>
                    <NavContent
                        toggleMode={header.toggleMode}
                        toggleIcon={header.icon}
                    />
                    <button onClick={toggleMenuMobile}>{barIcon}</button>
                </nav>
            </div>
        </>
    );
}

const NavContent = (props) => (
    <>
        <Link to="/#home">
            <h2>
                Seeker<span style={{ color: "crimson" }}>Bays</span>
            </h2>
        </Link>

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
