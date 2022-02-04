import React from "react";

export default function Projects() {
    return(
        <>
            <h1 id="project-section">PROJECTS</h1>
            <>
            <img src="./images/sodelicious-logo.svg" alt="so delicious logo" id="sodelicious-logo"/>
            <img src="./images/sodelicious-screenshot.webp" alt="so delicious screenshot" id="sodelicious" />
            </>
            <p className="project-1-about">This web app was created with a team of 5, including 3 Frontend Developers, a backend developer and a Designer. 
            <br/>
            The project was created to highlight recipes across the diaspora that are not regularly seen in popular media.</p>
            <a href="https://github.com/Mimi-Mahamah/so-delicious" target="blank" rel="noreferrer">
                <img src="./github.svg" alt="github icon" className="github-icon" />
            </a>
            <a id="live1" href="https://sodelicious.herokuapp.com/">
                <button className="live1">
                Live Site
                </button>
                </a>
            {/* Project 2 */}

            <h3 id="myportfolio-logo">My Portfolio</h3>
            <img src="./images/portfolio-screenshot.webp" alt="portfolio screenshot" id="portfolio-screenshot" />
            <a href="https://github.com/Mimi-Mahamah/My-Portfolio" target = "blank" rel="noreferrer">
                <img src="./github.svg" alt="github icon" className="github-icon2" />
            </a>
            <p className="project-2-about">This web app was created in React, using Typescript, HTML and CSS. 
            <br />
            I designed this portfolio to be simple, responsive and representative of my style and personlaity.</p>
            
            <h1 className="coming-soon">More Projects Coming Soon!</h1>
        </>
    )
}