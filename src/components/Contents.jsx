import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import cherryBlue from "../assets/cherry-blue-wp.jpg";
import cherryBlue2 from "../assets/cherry-blue-wp2.jpg";
import gamingBoy from "../assets/desktop-normal.jpg";
import desktopPink from "../assets/desktop-pink.jpg";
import appleDesktop from "../assets/apple-desktop.jpg";

const cardData = [
    {
        image: "bw-man-desktop.jpg",
        title: "First Blog",
        desc: "This is first blog and highly recommend to read this.",
        link: "../firstblog",
    },
    {
        image: "desktop-normal.jpg",
        title: "Second Blog",
        desc: "This is second blog and highly recommend to read this.",
        link: "../secondblog",
    },
    {
        image: "apple-desktop.jpg",
        title: "Third Blog",
        desc: "This is third blog and highly recommend to read this.",
        link: "../thirdblog",
    },
];

function ItemCard({ image, title, desc, link }) {
    const imgPath = require(`../assets/${image}`).default;

    return (
        <Link className="item-cards" to={link}>
            <div className="cards-img-container">
                <img src={imgPath} alt="img" srcset="" />
            </div>
            <div className="cards-details-container">
                <h4>{title}</h4>
                <p>{desc}</p>
            </div>
        </Link>
    );
}

export default function Contents() {
    return (
        <div id="contents">
            <main>
                <div className="carousel">
                    <Carousel fade>
                        <Carousel.Item>
                            <div className="floating-card-container">
                                <div className="dummy-space-left"></div>
                                <div className="floating-cards">
                                    <img src={appleDesktop} alt="" srcset="" />
                                    <h5 className="floating-heading">
                                        Lorem ipsum dolor sit amet.
                                    </h5>
                                </div>
                            </div>
                            <img
                                className="d-block w-100"
                                src={cherryBlue2}
                                alt="First slide"
                            />

                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>
                                    Nulla vitae elit libero, a pharetra augue
                                    mollis interdum.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="floating-card-container">
                                <div className="dummy-space-left"></div>
                                <Link className="floating-cards">
                                    <img src={desktopPink} alt="" srcset="" />
                                    <h5 className="floating-heading">
                                        Lorem ipsum dolor sit amet. Lorem ipsum
                                        dolor sit amet consectetur adipisicing
                                        elit.
                                    </h5>
                                </Link>
                            </div>
                            <img
                                className="d-block w-100"
                                src={cherryBlue}
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="floating-card-container">
                                <div className="dummy-space-left"></div>
                                <div className="floating-cards">
                                    <img src={gamingBoy} alt="" srcset="" />
                                    <h5 className="floating-heading">
                                        Lorem Lorem ipsum dolor sit. ipsum dolor
                                        sit amet.
                                    </h5>
                                </div>
                            </div>
                            <img
                                className="d-block w-100"
                                src={cherryBlue2}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>
                                    Praesent commodo cursus magna, vel
                                    scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="all-contents-container">
                    <div className="item-cards-container">
                        {cardData.map((card) => (
                            <ItemCard
                                key={card.title}
                                image={card.image}
                                title={card.title}
                                desc={card.desc}
                                link={card.link}
                            />
                        ))}
                    </div>
                    <div className="slide-cards"></div>
                </div>
            </main>
        </div>
    );
}
