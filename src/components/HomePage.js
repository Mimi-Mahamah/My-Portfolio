import React from "react";
import github from "./images/github.svg"
import linkedin from "./images/linkedin.svg"


export default function HomePage() {
    return (
        <>
            <header>
                <h1 className="name">Mimi Mahamah</h1>
                <a href="" className="projects-header">Projects</a>
                <a href="" className="contact">Contact</a>
            </header>
            <div className="about">
                <h2 id="title">Front End Developer</h2>
                <p className="blurb">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque corporis enim eum impedit animi doloribus. <br/>
                Mollitia dignissimos hic et fuga ut. Dolorum optio porro recusandae tempora amet itaque dolorem dignissimos?</p>
                <a href="" className="aboutme">More About Me</a>
            </div>
            <div className="socials">
                <a href="https://github.com/Mimi-Mahamah" target="_blank" rel="noreferrer">
                    <img src={github} alt="github icon" className="github-icon" />
                </a>
                <a href="https://www.linkedin.com/in/mariam-mahamah-219b8a180/" target="_blank" rel="noreferrer">
                    <img src={linkedin} alt="linkedin icon" className="linkedin-icon" />
                </a>
            </div>
        </>
    )
}