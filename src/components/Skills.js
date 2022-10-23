import React from "react";


export default function Skills() {
    return (
      <>

        <h1 id="skill-section">SKILLS</h1>
        
        <section id="skills" className="skills">
        
        <br />
        <br />

        <div className="skill-icons">
        <img src="./html-5.svg" className="skill-svg" alt="html icon" />
        <h4>HTML</h4>
        </div>

        <div className="skill-icons">
        <img src="./javascript.svg" className="skill-svg" alt="javascript icon"/>
        <h4> JavaScript</h4>
        </div>

        <div className="skill-icons">
        <img src="./css3.svg" className="skill-svg" alt="css icon" />
        <h4>CSS</h4>
        </div>
        
        <div className="skill-icons">
        <img src="./react-native.svg" className="skill-svg" alt="react icon" />
        <h4>React</h4>
        </div>
        </section>

        <section className="skills2">
      
        <div className="skill-icons">
        <img src="./git.svg" className="skill-svg" alt="git icon" />
        <h4>Git</h4>
        </div>

        <div className="skill-icons">
          <img src="./github2.svg" className="skill-svg" alt="github icon" />
          <h4>Github</h4>
        </div>

        <div className="skill-icons">
          <img src="./vscode.svg" className="skill-svg" alt="vscode icon" />
          <h4>VS Code</h4>
        </div>
        </section>
      </>
 );
}