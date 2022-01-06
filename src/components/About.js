import React from "react";


export default function About() {
    return (
        <div>
            <h1 id="greeting">Salutations</h1>
            <div className="about">
        <img src="./me.jpeg" className="profile" alt=""/>
        <h2>I'm Mimi!</h2>
        </div>
        <div className="about-section2">
        <p>A Front End Developer with a passion for building responsive web applications, and learning new technologies.</p>
        <div className="buttons">
            <a href="#skill-section">
            <button>Skills</button>
            </a>
            <br />
            <a href="#project-section">
            <button>Projects</button>
            </a>
            </div>
            </div>
        </div>
    )
}