import React, { useState, useEffect } from 'react';
import { DiCode } from "react-icons/di";
import { FaBrain, FaCloud, FaDatabase } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import uicl from "./explogo/uicl.png"
import act from "./explogo/ACT.png"
import './App.css';
import SkillsSection from './skillCard'; // Adjust the import path accordingly


function App() {
  const [view, setView] = useState('home'); // State to manage the current view

  useEffect(() => {
    // Load LinkedIn profile badge script
    const script = document.createElement('script');
    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    script.defer = true;
    script.type = "text/javascript";
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="App">
      {view === 'home' && (
        <header className="App-header">
          <div className="custom-name">
            Srijan Suresh
          </div>
          <h2 className="custom-text">  
            Student At University of Illinois at Chicago <br></br>
            and Former Software Engineer Intern at ACT
          </h2>
          <div className="button-container">
            <button onClick={() => setView('projects')}>
              PROJECTS
            </button>
            <button onClick={() => setView('about')}>
              ABOUT ME
            </button>
          </div>
        </header>
      )}

        {view === 'about' && (
          
            <div className="about-section">
              
              <div className="about-text">
                  <button className="back-button" onClick={() => setView('home')}>Back</button> 
                  <div className="about-me">
                    <div className="about-tile">About Me</div>
                    Hello! I'm Srijan Suresh, a tech enthusiast who also dabbles in the art of vanquishing virtual dragons and cowboys.
                    When I'm not busy exploring the lands of Elden Ring or Red Dead Redemption 2, I enjoy kicking a soccer ball around, rooting for the golden days of FC Barcelona and Manchester United.<br></br><br></br>
                
                    On the strategic side, I’m a 1700-rated chess player, regularly battling on the 64 squares.
                    I’ve interned at ACT, where I wrangled student test score data with Tableau and gave the website a fresh new look.
                    Currently, my brain is buzzing with personal projects like finding carpool buddies using Dijkstra’s algorithm and predicting stock prices with a touch of Monte Carlo magic.
                    I’m on a quest for more knowledge and experience in the software field, ready to tackle challenges with a smile and a bit of humor. Let's code, create, and conquer!

                  </div>
                  <div className="icon-container">
                    <DiCode size="8em" color="#ffffff" />
                    <GiArtificialIntelligence size="3.5em" color="#ffffff" />
                    <FaBrain size="3.5em" color="#ffffff" />
                    <FaCloud size="3.5em" color="#ffffff" />
                    <FaDatabase size="3.5em" color="#ffffff" />
                  </div>

              </div>
              <div className="resume-section">
                <div className="resume-tile">DIGITAL RESUME</div>
                  <div className="resume-content">
                    <p className="resume-text">
                      {/* Your digital resume content goes here */}
                      <span className="resume-header">SRIJAN SURESH</span><br />
                        BUFFALO GROVE – IL<br />
                        Phone: 319-259-2055<br />
                        Email: srijansuresh04@gmail.com<br /><br />

                      <span className="resume-section-title">Education</span><br />
                      {/* <tab style={{ paddingLeft: '100px',fontSize:'30px' }}>University of Illinois at Chicago<br/></tab> */}
                      <img src={uicl} alt='uiclogo' style={{ width: '250px', height: '250px' }} />
                      <span className="resume-section-title">Skills</span><br />
                      <div className="skills-container">
                        <SkillsSection />
                      </div>
                    <span className="resume-section-title">Work Experience</span><br />
                    <img src={act} alt='uiclogo' style={{ width: '250px', height: '175px' }} />
                      <div className = 'resume-subtitle'>      ACT Software Engineer Intern, Quality Assurance Engineer<br />
                      <tab>         </tab>Iowa City, IA June 2022 – August 2022<br /></div>
                      
                      <tab>         </tab>• Redesigned the test Score admin page UI/UX and backend, restructuring data accuracy by 25% and decreased
                      <br /><tab>           </tab>administrative processing time.<br />
                      <tab>         </tab>• Utilized Tableau to create interactive and visually appealing dashboards to analyze test score data, identify
                      <br /><tab>           </tab>trends, and present insights to stakeholders.<br />
                      <tab>         </tab>• Refined and executed robust test automation using PyTest.<br />
                      <tab>         </tab>• Launched Tableau to monitor test process performance such as test execution times, defect resolution rates,
                      and <br /><tab>           </tab>test coverage metrics to optimize efficiency and effectiveness.<br /><br />

                    <span className="resume-section-title">Personal Projects</span><br />
                      <div className='resume-subtitle'>     CarConnect (April 2024)<br /></div>
                      <tab>         </tab>• Computed a web application that allows users to connect rides with other users in a car share.<br />
                      <tab>         </tab>• Performed Dijkstra’s shortest route algorithm to find nearest user client to connect car, improving efficiency
                      <br /><tab>           </tab>by approximately 40%.<br />
                      <tab>         </tab>• Designed and implemented a React-based front-end UI/UX for dynamic client-side rendering.<br />
                      <tab>         </tab>• Configured Node/Express server backend to manage routing and set up PostgreSQL to store user address
                      and details in <br /><tab>           </tab>database.<br />
                      <tab>         </tab>• Set up a NoSQL Google Firebase to handle user authentication.<br /><br />

                      <div className='resume-subtitle'>     SpaceRides (February 2024)<br /></div>
                      <tab>         </tab>• Developed a robust carpooling website in collaboration with 4 people in 24 hours.<br />
                      <tab>         </tab>• Integrated Google Maps API/Leaflet for accurate location tracking and optimized route planning for users.<br />
                      <tab>         </tab>• Programmed site using HTML, CSS, JavaScript and integrated REST API to retrieve user information
                      and process <br /><tab>           </tab>carpooling requests.<br />
                      <tab>         </tab>• Utilized PHP backend to handle user authentication, data storage, and interaction with the REST API,
                      to ensure <br /><tab>           </tab>seamless functionality and security of carpooling site.<br /><br />

                      <div className='resume-subtitle'>     Search Algorithm (January 2024)<br /></div>
                      <tab>         </tab>• Programmed a data scraping search algorithm using C++, with several built-in class functions.<br />
                      <tab>         </tab>• Created several test suites using Google Test Suite and increased efficiency by identifying slow searches.<br />
                      <tab>         </tab>• Developed algorithms to remove tokens, filter, and find query matches on 90+ tested articles.<br />
                      <tab>         </tab>• Analyzed key metrics such as precision, recall, and F1 score to assess search algorithm effectiveness.<br />
                      </p>
                    </div>
                 </div>
             </div>
      )}

      {view === 'projects' && (
        <div className="projects-section">
          <button className="back-button" onClick={() => setView('home')}>Back</button>
          <div className="projects-tile">Projects</div>
          <p className="projects-content">
            {/* Add your project content here */}
            <div className="project-card">
          <h2>CarConnect</h2>
          <p>
            A web application that allows users to connect rides with other users in a car share. Utilizes Dijkstra’s shortest route algorithm to find the nearest user client, improving efficiency by approximately 40%.
          </p>
          <a href="https://github.com/SrijanSuresh/CarpoolProtoype-CarConnect" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
        </div>
        <div className="project-card">
          <h2>SpaceRides</h2>
          <p>
            A robust carpooling website developed in collaboration with 4 people in 24 hours. Integrated Google Maps API/Leaflet for accurate location tracking and optimized route planning for users.
          </p>
          <a href="https://github.com/sripadsirik/spark_commute" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
        </div>
        <div className="project-card">
          <h2>Search Algorithm</h2>
          <p>
            A data scraping search algorithm programmed in C++, with several built-in class functions. Created several test suites using Google Test Suite and increased efficiency by identifying slow searches.
          </p>
          <a href="https://github.com/SrijanSuresh/SearchAlgorithm" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
        </div>
          
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
