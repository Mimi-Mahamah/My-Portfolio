import React from "react";

export default function Projects() {
    return(
        <>
        <h1 id="project-section">PROJECTS</h1>
            <div className="project-1">
                <img src="./images/sodelicious-logo.svg" alt="so delicious logo" id="sodelicious-logo"/>
                <img src="./images/sodelicious-screenshot.webp" alt="so delicious screenshot" id="sodelicious" />
                <p className="project-1-about">This web app was created with a team of 5, including 3 Frontend Developers, a backend developer and a Designer. 
                <br/>
                The project was created to highlight recipes across the diaspora which are not regularly seen in popular media.</p>
                <a href="https://github.com/Mimi-Mahamah/so-delicious" target="blank" rel="noreferrer" className="github-icon" >
                    <img src="./github.svg" alt="github icon" id="github-icon" />
                </a>
                
                <form id="live1">
                    <button type="submit" className="live1" formaction="https://sodelicious.herokuapp.com/">Live Site</button>
                </form>
            </div>
            {/* Project 2 */}
            <div className="project-2">
                <h3 id="myportfolio-logo">My Portfolio</h3>
                <img src="./images/portfolio-screenshot.webp" alt="portfolio screenshot" id="portfolio-screenshot" />
                <a href="https://github.com/Mimi-Mahamah/My-Portfolio" target = "blank" rel="noreferrer" className="github-icon2">
                    <img src="./github.svg" alt="github icon" id="github-icon2" />
                </a>
                <p className="project-2-about">This web app was created in React, using Typescript, HTML and CSS. 
                <br />
                I designed this portfolio to be simple, responsive and representative of my style.</p>
            </div>
            {/* Project 3 */}
            <div className="project-3">
                <h3 id="airbnb-logo">Airbnb Landing Page</h3>
                <img src="./images/Airbnb-clone.webp" alt="airbnb screenshot" id="airbnb-screenshot"/>
                <a href="https://github.com/Mimi-Mahamah/Airbnb-Clone" target = "blank" rel="noreferrer" className="github-icon3">
                    <img src="./github.svg" alt="github icon" id="github-icon3" />
                </a>
                <p className="project-3-about">It was created using Javascript, HTML and CSS.
                <br />
                I recreated the landing page of the airbnb website as a testament of my ability to turn web designs into functional web applications.
                <br />
                I carefully looked over the design so as not to miss any design elements like shadows, gradients, positioning. 
                <br />
                Unfortunately, Airbnb has their own font not accessible to the public so I used the closest match I could find.
                </p>
                <form id="live3">
                    <button type="submit" className="live3" formaction="https://airbnb-landing-clone.netlify.app/" target="blank">Live Site</button>
                </form>
            </div>
            {/* Project 4 */}
            <div className="project-4">
                {/* <h3>Jeux Video</h3>
                <img src="" alt="" />
                <p>This webapp was created in React using Typscript, HTML and CSS.</p> */}
            </div>
            <footer> &copy; 2022 Mimi Mahamah.</footer>
        </>
    )
}