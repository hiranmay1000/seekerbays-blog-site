import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";

import {
    AiFillFacebook,
    AiFillInstagram,
    AiFillLinkedin,
    AiFillMail,
    AiFillPhone,
    AiFillTwitterCircle,
    AiOutlineArrowRight,
} from "react-icons/ai";

function Footer() {
    const currentYear = new Date().getFullYear();

    const [feedback, setFeedback] = useState("");

    const showFeedback = () => {
        var txt = document.getElementById("mailInput").value;
        if (txt !== "") {
            setTimeout(() => {
                setFeedback("");
            }, 3000);
            setFeedback("Thank you for subscribing");
        } else {
            setTimeout(() => {
                setFeedback("");
            }, 3000);
            setFeedback("Sorry! No input");
        }
    };

    return (
        <div className="footer">
            <main>
                <div className="content-left">
                    <h3>Seekerbays</h3>
                    <br />
                    <p>
                        This website has been developed by{" "}
                        <Link
                            target={"_blank"}
                            to={
                                "https://seekerbays.centralindia.cloudapp.azure.com"
                            }
                        >
                            Hiranmay Mandal <FiExternalLink />
                        </Link>{" "}
                        intended for the purpose of self learning experience for
                        the creation of React apps. This website boasts fully
                        responsive design and features a diverse range of
                        contents related to web technology, new tools,
                        programming concepts, and many other topics. <br />
                        <br /> This website serves various information for those
                        seeking to enhance their understanding of web
                        development and related domains. It is for these reasons
                        that this platform is known as seekerbays.
                    </p>
                </div>
                <div className="content-mid">
                    <h4>Lorem ipsum dolor sit</h4>
                    <br />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Expedita, quae porro
                    </p>
                    <div>
                        <Link>Home</Link>
                        <Link>About</Link>
                        <Link>Contact</Link>
                        <Link>Resume</Link>
                    </div>
                </div>
                <div className="content-right">
                    <h4>Newletter</h4>
                    <br />
                    <button type="submit">
                        <AiFillMail
                            style={{ position: "absolute" }}
                        ></AiFillMail>
                        <input
                            id="mailInput"
                            type="email"
                            placeholder="username@gmail.com"
                            required
                        />
                        <AiOutlineArrowRight
                            onClick={showFeedback}
                            id="arrowRight"
                        ></AiOutlineArrowRight>
                    </button>
                    <h6>{feedback}</h6>

                    <div className="social-media-footer">
                        <Link>
                            <AiFillLinkedin />
                        </Link>
                        <Link>
                            <AiFillInstagram />
                        </Link>
                        <Link>
                            <AiFillTwitterCircle />
                        </Link>
                        <Link>
                            <AiFillFacebook />
                        </Link>
                        <Link>
                            <AiFillMail />
                        </Link>
                        <Link>
                            <AiFillPhone />
                        </Link>
                    </div>

                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <p>Seekerbays © {currentYear} All rights reserved </p>
                </div>
            </main>
            <div className="footer-line">
                <hr />
                <div className="marquee-container">
                    <div className="marquee-text">
                        This is the alternative text that scrolls continuously.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
