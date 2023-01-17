import React from "react";


export default function Skills() {
    return (
      <>
        
        <section id="skills" className="skills">
        <div className="skill-icons">
        <img src="./html-5.svg" className="skill-svg" alt="html icon" />
        <p className="skill-titles"> HTML</p>
        </div>

        <div className="skill-icons">
        <img src="./javascript.svg" className="skill-svg" alt="javascript icon"/>
        <p className="skill-titles"> JavaScript</p>
        </div>

        <div className="skill-icons">
        <img src="./css3.svg" className="skill-svg" alt="css icon" />
        <p className="skill-titles">CSS</p>
        </div>
        
        <div className="skill-icons">
        <img src="./react-native.svg" className="skill-svg" alt="react icon" />
        <p className="skill-titles">React</p>
        </div>
        </section>

        <section className="skills2">
      
        <div className="skill-icons">
        <img src="./git.svg" className="skill-svg" alt="git icon" />
        <p className="skill-titles">Git</p>
        </div>

        <div className="skill-icons">
          <img src="./github2.svg" className="skill-svg" alt="github icon" />
          <p className="skill-titles">Github</p>
        </div>

        <div className="skill-icons">
          <img src="./vscode.svg" className="skill-svg" alt="vscode icon" />
          <p className="skill-titles">VS Code</p>
        </div>
        </section>
      </>
 );
}