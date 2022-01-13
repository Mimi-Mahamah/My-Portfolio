import React from "react";

export default function Projects() {
    return(
        <>
            <h1 id="project-section">PROJECTS</h1>
            <>
            <img src="./sodelicious-screenshot.png" alt="so delicious screenshot" id="sodelicious" />
            </>
            <p className="project-1-about">This web app was created with a team of 5, including 3 Frontend Developers, a backend developer and a Designer. The project was created to highlight recipes across the diaspora that are not regularly seen in popular media.</p>
            <a href="https://github.com/Mimi-Mahamah/so-delicious" target="blank" rel="noreferrer">
                <img src="./github.svg" alt="github icon" className="github-icon" />
            </a>
            {/* Project 2 */}
            <img src="./portfolio-screenshot.png" alt="portfolio screenshot" id="portfolio-screenshot" />
            <a href="https://github.com/Mimi-Mahamah/My-Portfolio" target = "blank" rel="noreferrer">
                <img src="./github.svg" alt="github icon" className="github-icon2" />
            </a>
            <p className="project-2-about">This web app was created using React, HTML and CSS.</p>
            
            <h1 className="coming-soon">More Projects Coming Soon!</h1>
        </>
    )
}