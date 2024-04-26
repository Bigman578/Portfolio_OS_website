import React from "react";
import '../../../css/application_design/pastWork.css'

function Previousproject() {
    return(
        <>
            <div className="main-prevWork">
                <div className="introduction-prevWork">
                    <h3>All projects</h3>
                    <p>Compiled with date, company and final product</p>
                </div>
                <div className="allProjects">
                    <div className="prevWork-display">
                        <h4>Project_NetonNet</h4>
                        <p>A project focused entierly on recreating NetonNet to the ability of me and my classmates. <br/>In this project I was the Project leader for an extended duration working on it for 6 months. Combined this is our work within the time limit. </p>
                        <p style={{fontStyle: 'italic'}}>2023-2024</p>
                        <button onClick={() => {window.open('https://raufchaudhry.github.io/project_netonnet/')}}>Open project in new tab</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Previousproject