import React from "react";

export default function Projects() {
    return(
        <>
            <h1 id="project-section">PROJECTS</h1>
            <>
            <img src="./sodelicious-screenshot.png" alt="so delicious screenshot" id="sodelicious" />
            </>
            <p className="project-1-about">I worked on this website with a team of 5.</p>
            <a href="https://github.com/Mimi-Mahamah/so-delicious" target="blank" rel="noreferrer">
                <img src="./github.svg" alt="github icon" className="github-icon" />
            </a>
            {/* Project 2 */}
            <img src="./portfolio-screenshot.png" alt="portfolio screenshot" id="portfolio-screenshot" />
            <a href="https://github.com/Mimi-Mahamah/My-Portfolio" target = "blank" rel="noreferrer">
                <img src="./github.svg" alt="github icon" className="github-icon2" />
            </a>
            <p className="project-2-about">This web app was created using react.</p>
            
            <h1 className="coming-soon">More Projects Coming Soon!</h1>
        </>
    )
}