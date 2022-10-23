import React from "react";


export default function About() {
    return (
        <>
            <h1 className="greeting">Salutations</h1>
            <div className="about">
            <img src="./images/me.webp" className="profile" alt="me"/>
            <h2>I'm Mimi!</h2>
            </div>
            <p className="blurb">Front End Developer with a passion for building responsive web applications, and learning new technologies.</p>
            <div className="buttons">
            <a href="#skill-section">
            <button className="skills-button">Skills</button>
            </a>
            <br />
            <a href="#project-section">
            <button className="projects-button">Projects</button>
            </a>
            </div>
            </>
    )
}