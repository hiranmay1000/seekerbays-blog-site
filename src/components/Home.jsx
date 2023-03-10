import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    AiFillInstagram,
    AiFillLinkedin,
    AiFillGithub,
    AiFillMail,
    AiFillTwitterCircle,
} from "react-icons/ai";

import girlChatting from "../assets/girl-chatting-with-friends.png";
import marketingMan from "../assets/marketing-employee-man.png";

function Home() {
    useEffect(() => {
        var cursorMove = document.getElementById("follower");
        document.addEventListener("mousemove", function (e) {
            cursorMove.style.left = e.clientX + "px";
            cursorMove.style.top = e.clientY + "px";
        });
    }, []);
    return (
        <>
            {/*  Landing page */}
            <div className="home" id="home-page">
                <main>
                    <div className="cursor-container">
                        <div id="follower"></div>
                    </div>
                    <motion.h1
                        initial={{
                            x: "-100%",
                            opacity: 0,
                        }}
                        whileInView={{
                            x: "-5%",
                            opacity: 1,
                        }}
                    >
                        SEEKERBAYS
                    </motion.h1>
                    <motion.p>
                        This is a <span>blog</span> website
                    </motion.p>
                </main>
            </div>
            {/*  page 2 */}
            <div className="page2 read-page">
                <img src={marketingMan} alt="girl-chatting" />
                <div>
                    <h2>Lorem ipsum dolor sit amet</h2>
                    <br />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Beatae deserunt voluptate magni amet blanditiis earum
                        voluptatem consequuntur id reiciendis facere enim
                        veniam, odio recusandae, illo, dolorem nesciunt atque?
                        Ducimus assumenda nemo magni. Velit deleniti voluptates
                        dignissimos dolorem tempora voluptate, doloremque,
                        eligendi cupiditate ea totam magni.
                    </p>
                </div>
            </div>
            {/*  page 3 */}
            <div className="page3 read-page">
                <div>
                    <h2>Lorem ipsum dolor sit amet</h2>
                    <br />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Beatae deserunt voluptate magni amet blanditiis earum
                        voluptatem consequuntur id reiciendis facere enim
                        veniam, odio recusandae, illo, dolorem nesciunt atque?
                        Ducimus assumenda nemo magni. Velit deleniti voluptates
                        dignissimos dolorem tempora voluptate, doloremque,
                        eligendi cupiditate ea totam magni.
                    </p>
                </div>
                <img
                    src={girlChatting}
                    alt="marketing-employee"
                    style={{ animationDelay: "0.1s" }}
                />
            </div>
            {/* about page */}
            <div id="about"></div>
            <div className="about-page info-page">
                <div>
                    <h1>Who we are?</h1>
                    <br />
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Expedita dolor at atque ab consequatur, alias
                        illum aliquam omnis blanditiis! Labore ipsa hic in
                        laborum minus qui, nostrum repellendus placeat
                        consequatur quaerat iste quis! Lorem ipsum dolor sit,
                        amet consectetur adipisicing elit. Ipsum eveniet,
                        incidunt sit soluta laborum, commodi, deleniti fugiat
                        illo sapiente iste ipsam pariatur a!
                        <br />
                        <br />
                    </p>
                </div>
            </div>
            <div id="contact"></div>
            <div className="social-media ">
                <div className="info-page">
                    <h1>Find me</h1>
                    <article>
                        <Link
                            to={"https://linkedin.com/in/hiranmay1000"}
                            target="_black"
                            style={{
                                animationDelay: "0.3s",
                            }}
                        >
                            <AiFillLinkedin />
                            <p>LinkedIn</p>
                        </Link>
                        <Link
                            to={"https://www.instagram.com/hiranmay1000/"}
                            target="_black"
                            style={{
                                animationDelay: "0.5s",
                            }}
                        >
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </Link>

                        <Link
                            to={"https://twitter.com/HiranmayMandal5"}
                            target="_black"
                            style={{
                                animationDelay: "0.9s",
                            }}
                        >
                            <AiFillTwitterCircle />
                            <p>Twitter</p>
                        </Link>

                        <Link
                            to={"https://github.com/hiranmay1000"}
                            target="_black"
                            style={{
                                animationDelay: "0.7s",
                            }}
                        >
                            <AiFillGithub />
                            <p>Github</p>
                        </Link>
                        <Link
                            to={"mailto:hiranmay1000@gmail.com"}
                            target="_black"
                            style={{
                                animationDelay: "0.9s",
                            }}
                        >
                            <AiFillMail />
                            <p>Gmail</p>
                        </Link>
                    </article>
                </div>
            </div>
        </>
    );
}

export default Home;
