import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import bwManDesktop from "../assets/bw-man-desktop.jpg";
import cherryBlue from "../assets/cherry-blue-wp.jpg";
import cherryBlue2 from "../assets/cherry-blue-wp2.jpg";
import gamingBoy from "../assets/desktop-normal.jpg";
import desktopPink from "../assets/desktop-pink.jpg";
import appleDesktop from "../assets/apple-desktop.jpg";

const cardData = [
    {
        image: bwManDesktop,
        title: "First Blog",
        desc: "This is first blog and highly recommend to read this.",
        link: "../firstblog",
    },
    {
        image: gamingBoy,
        title: "Second Blog",
        desc: "This is second blog and highly recommend to read this.",
        link: "../secondblog",
    },
    {
        image: appleDesktop,
        title: "Third Blog",
        desc: "This is third blog and highly recommend to read this.",
        link: "../thirdblog",
    },
];

function ItemCard({ image, title, desc, link }) {
    return (
        <Link className="item-cards" to={link}>
            <div className="cards-img-container">
                <img src={image} alt="img" />
            </div>
            <div className="cards-details-container">
                <h4>{title}</h4>
                <p>{desc}</p>
            </div>
        </Link>
    );
}

export default function Contents() {
    const allTags = document.querySelector(".content-categories-top-container");
    var x = 0;
    const moveTagsRight = () => {
        if (x < 50) {
            x = x + 100;
            var str = x.toString();
            allTags.style.left = str + "px";
            console.log("Clicked");
        }
    };

    const moveTagsLeft = () => {
        x = x - 100;
        var str = x.toString();
        allTags.style.left = str + "px";
        console.log("Clicked");
    };

    return (
        <div id="contents">
            <main>
                <div className="carousel">
                    <Carousel fade>
                        <Carousel.Item>
                            <div className="floating-card-container">
                                <div className="dummy-space-left"></div>
                                <div className="floating-cards">
                                    <img src={appleDesktop} alt="" />
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
                                    <img src={desktopPink} alt="" />
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
                                    <img src={gamingBoy} alt="" />
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
                        <div className="content-catogories-top">
                            <div className="prev-next-icon-left"></div>
                            <div className="content-categories-top-container">
                                <div className="blog-tags">
                                    <div className="tag-container">
                                        <Link className="tags">All</Link>
                                        <Link className="tags">Mood</Link>
                                        <Link className="tags">Mood</Link>
                                        <Link className="tags">Ocation</Link>
                                        <Link className="tags">Travel</Link>
                                        <Link className="tags">Technolgy</Link>
                                        <Link className="tags">Science</Link>
                                        <Link className="tags">Politics</Link>
                                        <Link className="tags">Finance</Link>
                                        <Link className="tags">
                                            Destination
                                        </Link>
                                        <Link className="tags">Finance</Link>
                                        <Link className="tags">Finance</Link>
                                        <Link className="tags">Finance</Link>
                                        <Link className="tags">Finance</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="prev-next-icon">
                                <span
                                    id="arrow-left"
                                    style={{ cursor: "pointer" }}
                                    className="tag-move-icon"
                                    onClick={moveTagsRight}
                                >
                                    ◄
                                </span>
                                <span
                                    id="arrow-right"
                                    style={{ cursor: "pointer" }}
                                    className="tag-move-icon"
                                    onClick={moveTagsLeft}
                                >
                                    ►
                                </span>
                            </div>
                        </div>
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
                    <div className="slide-cards">
                        <div className="sld-cards-cont">
                            <div className="sld-cards my-0">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Magni voluptates ad quis
                                    eaque accusantium corrupti, vel minima
                                    repellendus molestiae ex illum officia
                                    aperiam itaque debitis harum facilis,
                                    pariatur dolorem.
                                </p>
                            </div>
                            <div className="sld-cards">
                                <div className="sld-img"></div> 
                                <div className="sld-title">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Adipisci fugiat
                                        tempora eveniet!
                                    </p>
                                </div>
                            </div>
                            <div className="sld-total-img"></div>
                            <div className="sld-cards">
                                <div className="sld-img"></div>
                                <div className="sld-title">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Adipisci fugiat
                                        tempora eveniet!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
