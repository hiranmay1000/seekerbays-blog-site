import React, { useEffect, useLayoutEffect, useState } from "react";
import { AiFillCloseSquare, AiOutlineMenu } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Header(header) {
    const [showMenu, setShowMenu] = useState(false);
    const [barIcon, setBarToCross] = useState(<AiOutlineMenu />);
    const [headerOnScroll, setHeaderOnScroll] = useState("");
    const [currActivePage, setCurrActivePage] = useState("/");
    // const [errorPopupClass, setErrorPopupClass] = useState("");
    
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

    useLayoutEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 150) {
                setHeaderOnScroll("-scrolled");
            } else {
                setHeaderOnScroll("");
            }
        });
    });

    const location = useLocation();
    useEffect(() => {
        const path = location.pathname.substring(1);
        setCurrActivePage(path || "/");
    }, [location.pathname]);

    return (
        <>
            <div id={`alert-box-container`}>
                <div
                    className={`alert alert-light alert-box`}
                    role="alert"
                >
                    {header.displayModesFeedback}
                </div>
            </div>
            <div id="home"></div>
            <div id="nav-menu-slide">
                <NavContent
                    toggleMode={header.toggleMode}
                    toggleIcon={header.icon}
                    currActivePage={currActivePage}
                    menuHide={menuHide}
                    theme={header.handleThemeChange}
                />
            </div>
            <div className="navbar">
                <nav className={`header${headerOnScroll}`}>
                    <NavContent
                        toggleMode={header.toggleMode}
                        toggleIcon={header.icon}
                        currActivePage={currActivePage}
                        theme={header.handleThemeChange}
                    />
                    <button onClick={toggleMenuMobile}>{barIcon}</button>
                </nav>
            </div>
        </>
    );
}

const NavContent = (nc) => {
    return (
        <>
            <Link to="/#home">
                <h2>
                    Seeker<span style={{ color: "crimson" }}>Bays</span>
                </h2>
            </Link>
            <Link
                id="mode-icon-phone"
                onClick={() => {
                    nc.toggleMode();
                }}
            >
                {nc.toggleIcon}
            </Link>

            <main>
                <HashLink
                    className={nc.currActivePage === "/" ? "active" : ""}
                    onClick={nc.menuHide}
                    to="/#home"
                >
                    Home
                </HashLink>
                <HashLink
                    className={nc.currActivePage === "#about" ? "active" : ""}
                    onClick={nc.menuHide}
                    to="/#about"
                >
                    About
                </HashLink>
                <HashLink onClick={nc.menuHide} to="/#contact">
                    contact
                </HashLink>
                <Link
                    className={nc.currActivePage === "resume" ? "active" : ""}
                    onClick={nc.menuHide}
                    to="/resume"
                >
                    Resume
                </Link>
                <Link
                    className={nc.currActivePage === "contents" ? "active" : ""}
                    onClick={nc.menuHide}
                    to="/contents"
                >
                    Contents
                </Link>
                <DropdownMenu theme={nc.theme} menuHide={nc.menuHide} />
                <Link id="mode-icon" onClick={nc.toggleMode}>
                    {nc.toggleIcon}
                </Link>
            </main>
        </>
    );
};

const DropdownMenu = (dd) => {
    return (
        <Link className="dropdown-center btn-group">
            <button
                className="btn btn-secondary dropdown-toggle theme-btn"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                Themes
            </button>
            <ul
                className="dropdown-menu dropdown-menu-end"
                onClick={dd.menuHide}
            >
                <li>
                    <Link
                        onClick={() => dd.theme("def")}
                        className="dropdown-item"
                        href="/"
                    >
                        Default
                    </Link>
                </li>
                <li>
                    <Link
                        onClick={() => dd.theme("cherry")}
                        className="dropdown-item"
                        href="/"
                    >
                        Cherry Blue
                    </Link>
                </li>
                <li>
                    <Link
                        onClick={() => dd.theme("pine")}
                        className="dropdown-item"
                        href="/"
                    >
                        Pineapple Mint
                    </Link>
                </li>
                <li>
                    <Link
                        onClick={() => dd.theme("sandlewood")}
                        className="dropdown-item"
                        href="/"
                    >
                        SandleWood Yellow
                    </Link>
                </li>
            </ul>
        </Link>
    );
};

export default Header;
