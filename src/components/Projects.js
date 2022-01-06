import React from "react";

export default function Projects() {
    return(
        <div>
            <h1 id="project-section">PROJECTS</h1>
            <div className="project-1">
            <div className="card">
                <div className="content">
                    <div className="front">
                        <img src="./sodelicious-screenshot.png" id="delicious"/>
                    </div>
                    <div className="back">
                        <a href="https://github.com/Mimi-Mahamah/so-delicious/tree/main" target="_blank">
                        <img src="./github.svg" className="github-icon"/>
                        </a>
                    </div>
                </div>
            </div>
            </div>
            {/* Project 2 */}
            <div className="project-2">
            <div className="card">
                <div className="content">
                    <div className="front">
                        This Website
                    </div>
                    <div className="back">
                        <a href="https://github.com/Mimi-Mahamah/so-delicious/tree/main" target="_blank">
                        <img src="./github.svg" className="github-icon"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}