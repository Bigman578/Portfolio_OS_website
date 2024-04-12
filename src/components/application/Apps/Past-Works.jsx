import React from "react";
import '../../../css/application_design/pastWork.css'

function Previouswork() {
    return(
        <>
            <div className="main-prevWork">
                <div className="introduction-prevWork">
                    <h3>All projects</h3>
                    <p>Compiled with date,company and final product</p>
                </div>
                <div className="allProjects">
                    <div className="prevWork-display">
                        <h4>Project_NetonNet</h4>
                        <p>A project focused entierly on recreating NetonNet to the ability of my classmates. In this project I was the Project leader for an extended duration working on it for 6 months. (This project has been altered because of React problems, the issue is still being looked into until a more better solution is found)</p>
                        <p>2023-2024</p>
                        <button onClick={()=>{window.open('/Past_Projects/Project_NetonNet/index.html')}}>Open project in new tab</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Previouswork