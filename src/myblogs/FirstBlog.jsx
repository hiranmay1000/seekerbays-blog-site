import React from "react";
import { Link } from "react-router-dom";

function FirstBlog(firstBlog) {
    return (
        <div>
            <main className={`main-content`}>
                <div>
                    <h1>Hello world</h1>
                    <h2>This is earth</h2>
                    <br />

                    <em>"Your quote goes here"</em>
                    <br />
                    <br />
                    <br />

                    <h3>Topic</h3>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Optio hic veritatis nesciunt, nisi officia
                        eligendi. Quia eaque minima, inventore officiis
                        quibusdam velit. Dolore repudiandae saepe impedit
                        assumenda at repellendus nesciunt asperiores
                        perspiciatis? Ab, placeat.
                    </p>
                    <br />
                    <h3>Topic</h3>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Optio hic veritatis nesciunt, nisi officia
                        eligendi. Quia eaque minima, inventore officiis
                        quibusdam velit. Dolore repudiandae saepe impedit
                        assumenda at repellendus nesciunt asperiores
                        perspiciatis? Ab, placeat.
                    </p>
                </div>

                <br />
                <br />
                <hr />

                <div className="blog-tags">
                    <div className="tag-container">
                        <Link className="tags">Mood</Link>
                        <Link className="tags">Ocation</Link>
                        <Link className="tags">Emotion</Link>
                        <Link className="tags">Finance</Link>
                        <Link className="tags">Finance</Link>
                        <Link className="tags">Finance</Link>
                        <Link className="tags">Finance</Link>
                        <Link className="tags">Finance</Link>
                        <Link className="tags">Finance</Link>
                        <Link className="tags">Finance</Link>
                        <Link className="tags">Finance</Link>
                        <Link className="tags">Finance</Link>
                        <Link className="tags">Finance</Link>
                        <Link className="tags">Finance</Link>
                        <Link className="tags">Finance</Link>
                        <Link className="tags">Finance</Link>
                        <Link className="tags">Finance</Link>
                        <Link className="tags">Finance</Link>
                        <Link className="tags">Finance</Link>
                        <Link className="tags">Finance</Link>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default FirstBlog;
