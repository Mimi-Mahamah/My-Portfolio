import React from "react";
import Airbnbclone from "./images/Airbnbclone.webp";
import github from "./images/github.svg"

export default function Projects() {
    return(
        <>
        <div className="projects">
            <h2 className="projects-title">My Work</h2>
                {/* Project 1 */}
                <div className="project-1" id="project_1">
                <div className="container">
                    <img src={Airbnbclone} alt="airbnb screenshot" id="airbnbclonescreenshot" />
                </div>
                <div className="airbnb-about">
                    <a href="https://airbnb-landing-clone.netlify.app/" target="blank" rel="noreferrer" className="airbnb">
                        Airbnb Landing Page
                    </a>
                    <p className="project-1-about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo provident omnis deserunt labore a aliquam voluptatibus totam tempora,  
                    <br/>
                    veritatis molestias qui voluptatem ab laboriosam sint tenetur voluptate quidem. Harum, magni.</p>
                    <a href="https://github.com/Mimi-Mahamah/Airbnb-Clone" target="blank" rel="noreferrer" className="github-icon" >
                        <img src={github} alt="github icon" className="github-icon" />
                    </a>
                </div>
            </div>
        </div>
            <footer> &copy; 2023 Mimi Mahamah.</footer>
        </>
    )
}