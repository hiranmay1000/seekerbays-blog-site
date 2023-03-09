import React from "react";
import { Link } from "react-router-dom";
import { AiFillTool, AiOutlineLink } from "react-icons/ai";
import {BiErrorCircle} from "react-icons/bi";

function Error404() {
    // var errorPage = document.title("Page not found");
    return (
        <div>
            <main className="error-page-wrapper">
                <div className="error-content">
                    <Link to={"/"}>
                        <h2>
                            Seeker<span style={{ color: "crimson" }}>Bays</span>
                        </h2>
                    </Link>

                    <br />
                    <br />
                    <div>
                        <h1>
                            Error 404
                            <AiFillTool />
                        </h1>
                        <h3>Page not found</h3><BiErrorCircle/>
                    </div>
                    <br />
                    <p>
                        Back to <Link to={"/"}>Home<AiOutlineLink/></Link> page
                    </p>
                    <br />
                    <p style={{fontSize:"13px"}}>The page you are trying to access either does not exist or is broken. Please try again later.</p>
                    <br />
                    <div className="gear-icon-logo"></div>

                </div>
            </main>
        </div>
    );
}

export default Error404;
