import React from "react";


export default function Skills() {
    return (
      <div>

        <h1 id="skill-section">SKILLS</h1>
        <section id="skills" className="skills">
        
        <br />
        <br />

        <div className="skill-icons">
        <img src="./html-5.svg" />
        <h4>HTML</h4>
        </div>

        <div className="skill-icons">
        <img src="./javascript.svg" />
        <h4> JavaScript</h4>
        </div>

        <div className="skill-icons">
        <img src="./css3.svg"  />
        <h4>CSS</h4>
        </div>
        
        <div className="skill-icons">
        <img src="./react-native.svg" />
        <h4>React</h4>
        </div>
        </section>

        <section className="skills2">
      
        <div className="skill-icons">
        <img src="./git.svg" alt="" />
        <h4>Git</h4>
        </div>

        <div className="skill-icons">
          <img src="./github2.svg" alt="" />
          <h4>Github</h4>
        </div>

        <div className="skill-icons">
          <img src="./vscode.svg" alt="" />
          <h4>VS Code</h4>
        </div>
        </section>
      </div>
 );
}