import React from "react";


export default function HomePage() {
    return (
        <>
            <div className="sidebar"></div>
            <header>
                <h1 id="name">Mimi Mahamah</h1>
                <h1 id="projects">Projects</h1>
                <h1 id="contact">Contact</h1>
            </header>
            <div className="about">
            <h2>Front End Developer</h2>
            <p className="blurb">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque corporis enim eum impedit animi doloribus. <br/>
            Mollitia dignissimos hic et fuga ut. Dolorum optio porro recusandae tempora amet itaque dolorem dignissimos?</p>
            </div>
        </>
    )
}