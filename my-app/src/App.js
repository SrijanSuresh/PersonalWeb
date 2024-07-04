import React, { useState, useEffect } from 'react';
import './App.css';

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
          <button className="back-button" onClick={() => setView('home')}>Back</button>
          <div className="about-content">
            <div className="about-text">
              <div className="about-tile">About Me</div>
              <p className="about-me">
                Hello! I'm Srijan Suresh, a tech enthusiast who also dabbles in the art of vanquishing virtual dragons and cowboys.
                When I'm not busy exploring the lands of Elden Ring or Red Dead Redemption 2, I enjoy kicking a soccer ball around, rooting for the golden days of FC Barcelona and Manchester United.<br></br><br></br>
            
                On the strategic side, I’m a 1700-rated chess player, regularly battling on the 64 squares.
                I’ve interned at ACT, where I wrangled student test score data with Tableau and gave the website a fresh new look.
                Currently, my brain is buzzing with personal projects like finding carpool buddies using Dijkstra’s algorithm and predicting stock prices with a touch of Monte Carlo magic.
                I’m on a quest for more knowledge and experience in the software field, ready to tackle challenges with a smile and a bit of humor. Let's code, create, and conquer!
              </p>
            </div>
            
            {/* LinkedIn profile badge */}
            <div className="badge-container">
              <div className="badge-base LI-profile-badge"
                data-locale="en_US"
                data-size="large"
                data-theme="light"
                data-type="HORIZONTAL"
                data-vanity="srijan-suresh"
                data-version="v1">
                <a className="badge-base__link LI-simple-link"
                  href="https://www.linkedin.com/in/srijan-suresh?trk=profile-badge">
                  Srijan Suresh
                </a>
              </div>
            </div>
            <div className="resume-section">
            <div className="resume-tile">Digital Resume</div>
              <div className="resume-content">
                <p className="resume-text">
                  {/* Your digital resume content goes here */}
                  EDUCATION: UNIVERSITY OF ILLINOIS AT CHICAGO<br></br>
                  SKILLS: JAVA, C++, C, PYTHON, JAVASCRIPT
                </p>
              </div>
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
            Coming soon...
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
