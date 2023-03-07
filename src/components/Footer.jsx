import React from "react";
import { Link } from "react-router-dom";
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

    return (
        <div className="footer">
            <main>
                <div className="content-left">
                    <h4>Seekerbays</h4>
                    <br />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Earum, molestiae voluptatem saepe dicta explicabo rem
                        sequi velit inventore voluptatibus reiciendis illum, est
                        alias ab ratione voluptates vitae ipsa esse aspernatur
                        ad aliquam atque nostrum ut! Cumque eum facere debitis
                        veritatis voluptas, illum accusantium placeat ipsa.
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
                    <AiFillMail style={{ position: "absolute" }}></AiFillMail>
                    <input
                        type="email"
                        placeholder="username@gmail.com"
                        required
                    />
                    <button type="submit">
                        <AiOutlineArrowRight />
                    </button>

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
