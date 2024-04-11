import React from 'react'
import '../../../css/application_design/portfolio.css'

function MyPortfolio() {

    return(
            <>
                <div className="main-portfolio">
                    <div className='portfolio-scroll'>
                        <div className="scroll-myself">
                            <h3 className='name'>Bwar Mohammad</h3>
                            <p className='gamertag'>Also known as Bigman in some platforms</p>
                            <div className="contact-icons">
                                <a target='_blank' href="https://github.com/Bigman578">Git</a>
                                <a href="">Linked-In</a>
                                <a href="">Mail</a>
                                <a href="">some other platform?</a>
                            </div>
                        </div>
                    </div>
                    <div className='portfolio-information'>
                        <div className="information-self">
                            <h2>Hello there</h2>
                            I am a programmer working mostly with websites (at the moment) with the goal of working with machinery and possibly AI. I am born in Sweden and currently still live in Sweden. 
                            I usually play games that needs creativity and inspiration for either industrial stuff like mass-production or more thinking situation where you solve a problem. <br /><br />
                            With both of us working together we could work for a brighter future and achive new results
                        </div>
                        <div className="information-skills">
                            <h3>Skills</h3>
                            <div className="skills-container">
                                <div className='uncommon'><span>Junior</span> Front-end Developer (HTML/CSS/Javascript)</div>
                                <div className='uncommon'><span>Junior</span> UI/UX designer</div>
                                <div className='uncommon'><span>Junior</span> React Developer</div>
                                <div className='common'><span>Beginner</span> Video editor</div>
                                <div className='rare'><span>Intermediate</span> Photo editor</div>
                                {/* <div className='legendary'><span>Expert</span> Gamer</div> */}
                            </div>
                        </div>
                        <div className="information-education">
                            <h3>Education</h3>
                            <div className="education-container">
                                <div className='school-info'>
                                    <img className='school-logo' src="https://media.licdn.com/dms/image/C4D0BAQFgfJxk1_qrtA/company-logo_200_200/0/1631350471789?e=2147483647&v=beta&t=SlU2GqwdBHQ5ftlDQD1z-Ovg74SWTNaYBGcR4uAM7U4" alt="School_Img" />
                                    <div>
                                        <h4>Sankta Maria Skolan</h4>
                                        <p>Sweden, Malmö</p>
                                        <p>Front-End Developer, UI/UX Design</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="information-current">
                            <h3>What I am doing</h3>
                            <div className="current-row">
                                <div className="currently">
                                    <p>Working on improving portfolio</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
    )
}

export default MyPortfolio