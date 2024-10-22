import React, { useRef, useEffect, useState } from 'react';
import { DiCode } from "react-icons/di";
import { FaBrain, FaCloud, FaDatabase,FaGithub,FaLinkedin } from "react-icons/fa";
import uicl from "./explogo/uicl.png"
import act from "./explogo/ACT.png"
import backgr from "./explogo/backgr.jpg"
import pdf from "./explogo/Srijan_Suresh_resume.pdf"
import { BrowserRouter as Router, Route, Routes, Link  } from 'react-router-dom';



//import pfp from "./explogo/pfp.png"
import './App.css';
import SkillsSection from './skillCard'; // Adjust the import path accordingly

function App() {
 
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/" element={<Home />} />
        </Routes>


      </div>
    </Router>
  );
}

function Home() {
  return (
    <header
      className="App-header"
      style={{
        backgroundImage: `url(${backgr})`,
        backgroundSize: 'cover', // Ensure the image covers the whole area
        backgroundPosition: 'center', // Center the image
        height: '100vh', // Set a height for the background
        color: '#fff', // Set text color to ensure readability
      }}
    >
      <div className="custom-name">Srijan Suresh</div>
      <h2 className="custom-text">
        Student At University of Illinois at Chicago <br />
        and Former Software Engineer Intern at ACT
      </h2>
      <div className="button-container">
      <Link to="/projects">
         <button>PROJECTS</button>
        </Link>
        <Link to="/about">
          <button>ABOUT ME</button>
        </Link>

      </div>
    </header>
  );
}
function About() {
  const resumeSectionRef = useRef(null);

  const scrollToResume = () => {
    if (resumeSectionRef.current) {
      resumeSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const crawlTextRef = useRef(null);
  const [showNewText, setShowNewText] = useState(false);

  useEffect(() => {
    // Stop the animation after 25 seconds and show new text
    const timer = setTimeout(() => {
      if (crawlTextRef.current) {
        crawlTextRef.current.style.animation = 'none'; // Stop the animation
      }
      setShowNewText(true); // Show the new text
    }, 35000);

    // Cleanup timeout on component unmount
    return () => clearTimeout(timer);
  }, []);

  return(
  <div className='about-me-section' 
    style={{
      backgroundImage: `url(${backgr})`,
      backgroundSize: 'cover', // Ensure the image covers the whole area
      backgroundPosition: 'center', // Center the image
    }}>

        <div className="star-wars-intro"
              style={{
                backgroundImage: `url(${backgr})`,
                backgroundSize: 'cover', // Ensure the image covers the whole area
                backgroundPosition: 'center', // Center the image
              }}>
      <Link to="/home" className="icon-container flex flex-col items-center space-y-12 fixed left-0">
      <button>Back</button>
      </Link>
      {showNewText ? (
        <div className="After-Intro">
          <div className="about-tile-af">About Me</div>
            <div className='normal-about'>
              Hello there, I am Srijan Suresh, a current student at UIC, former Intern at ACT.
              I love problem solving and coding, and I am always looking for new challenges to tackle.
              currently I am working on my carpooling project, CarConnect, and I am excited to see where it goes.
              and in future I have plans to work on projects like portfolio optimzation and black-scholes model.
            </div>
            <br></br><br></br><br></br><br></br><br></br>
            <Link to="#" className=" flex flex-row items-center">
              <button  onClick={scrollToResume}>View Resume</button>
              {/* <a href={pdf} download>
                <button>Download Resume</button>
              </a>             */}
              
            </Link>
        </div>
      ) : (

        <div className="crawl-text" ref={crawlTextRef}>
        
            <div className="about-tile">About Me</div>
            <p>A long time ago in a galaxy far, far away...</p>
            <h3>Srijan Suresh: Tech Enthusiast and Virtual Adventurer</h3><br></br>
            <h4>Episode IV: The Rise of the Developer</h4>
            <p>In the vast realms of technology, a developer emerges. Srijan Suresh, a fearless tech enthusiast, embarks on epic quests to vanquish virtual dragons in <em>Elden Ring</em> and duel cowboys in <em>Red Dead Redemption 2</em>.</p>
            <p>When not exploring these digital landscapes, Srijan can be found on the soccer field, reminiscing about the golden days of FC Barcelona and Manchester United. With a strategic mind and a 1700 chess rating, he battles fiercely on the 64 squares.</p>
            <p>During an internship at ACT, he mastered the art of data manipulation with Tableau and rejuvenated the website's design. Now, his mind buzzes with ambitious projects: finding carpool buddies with Dijkstra's algorithm and predicting stock prices with Monte Carlo simulations.</p>
            <p>On a relentless quest for knowledge and experience in the software field, Srijan is ready to tackle challenges with a smile and a dash of humor. Together, let us code, create, and conquer!</p>
        </div>)}
        <div className="icon-container flex flex-col items-center space-y-12 fixed right-0">
          <DiCode className="text-white hover:text-blue-400 transition duration-300 ease-in-out" size="6em" />
          <FaBrain className="text-white hover:text-yellow-400 transition duration-300 ease-in-out" size="3em" />
          <FaCloud className="text-white hover:text-blue-300 transition duration-300 ease-in-out" size="3.5em" />
          <FaDatabase className="text-white hover:text-green-400 transition duration-300 ease-in-out" size="3em" />
          <a href="https://github.com/SrijanSuresh" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-white hover:text-red-400 transition duration-300 ease-in-out" size="3em" />
          </a>
          <a href="https://www.linkedin.com/in/srijan-suresh" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white hover:text-blue-600 transition duration-300 ease-in-out" size="3em" />
          </a>
        </div>

  </div>
  <div className="resume-section" ref={resumeSectionRef} >
    <div className="resume-tile">DIGITAL RESUME</div>
      <div className="resume-content">
        <p className="resume-text">
          {/* Your digital resume content goes here */}
          <span className="resume-header">SRIJAN SURESH</span><br />
            BUFFALO GROVE – IL<br />
            Phone: 319-259-2055<br />
            Email: srijansuresh04@gmail.com<br /><br />

          <span className="resume-section-title">Education</span><br /><br></br>
          {/* <tab style={{ paddingLeft: '100px',fontSize:'30px' }}>University of Illinois at Chicago<br/></tab> */}
          <img src={uicl} alt='uiclogo' style={{ width: '200px', height: '200px' }} /><br></br><br></br>
          <span className="resume-section-title">Skills</span><br />
          <div className="skills-container"><br></br>
            <SkillsSection />
          </div><br></br><br></br><br></br>
        <span className="resume-section-title">Work Experience</span><br></br><br></br>
        <img src={act} alt='uiclogo' style={{ width: '250px', height: '175px' }} /><br></br>
          <div className = 'resume-subtitle'>      ACT Software Engineer Intern, Quality Assurance Engineer<br />
          <tab>         </tab>Iowa City, IA June 2022 – August 2022<br /></div>
          
          <tab>         </tab> I collaborated with other interns and redesigned the test Score admin page UI/UX and backend.<br />
          <tab>         </tab> We used Tableau to use the data and create interactive and visually appealing dashboards to analyze test score data.<br /><br />

        <span className="resume-section-title">Personal Projects</span><br />
          <div className='resume-subtitle'>     CarConnect (April 2024)<br /></div>
          <tab>         </tab>I computed a web application using react and JS that allows users to connect rides with other users in a car share,<br />
          <tab>         </tab> and then performed Dijkstra’s shortest route algorithm to find nearest user client to connect car.<br />
          <tab>         </tab>  I also Integrated Google Maps API/Leaflet for accurate location tracking and optimized route planning for users.<nr />
          <tab>         </tab> Finally I configured Node/Express routing and set up PostgreSQL to store user address, firebase to authentication<br />
          <tab>         </tab> set up a NoSQL Google Firebase to handle user authentication.<br /><br />


          <div className='resume-subtitle'>     SpaceRides (February 2024)<br /></div>
          <tab>         </tab>I developed a robust carpooling website in collaboration with 4 people in 24 hours for hackathon.<br />
          <tab>         </tab>We programmed site using HTML, CSS, JavaScript and integrated REST API to retrieve user information and process <br />
          <tab>           </tab>carpooling requests.We used PHP backend to handle user authentication, data storage, and interaction with the REST API.<br /><br />

          <div className='resume-subtitle'>     Search Algorithm (January 2024)<br /></div>
          <tab>         </tab>I Programmed a data scraping search algorithm using C++, with several built-in class functions.<br />
          <tab>         </tab>I created several test suites using Google Test Suite and increased efficiency by identifying slow searches, and <br />
          <tab>         </tab>developed algorithms to remove tokens, filter, and find query matches on 90+ tested articles.<br />
          </p>
        </div>
     </div>
     
 </div>
  );
}
function Project() {
  return(
  <div className="projects-section">
     <Link to="/home">
      <button>Back</button> 
      </Link>
  <div className="projects-tile">Projects</div>
  <div className="projects-content">
    {/* Add your project content here */}
    <div className="project-card">
      <div className='project-title'>CarConnect<br/><br/><br/></div>
      <div className='project-para'>
        A web application that allows users to connect rides with other users in a car share. Utilizes Dijkstra’s shortest route algorithm to find the nearest user client, improving efficiency by approximately 40%.
        <br/><br/><br/><br/>
        <button onClick={() => window.location.href = "https://github.com/SrijanSuresh/CarpoolProtoype-CarConnect" }>GitHub Repository</button>
      </div>
   </div>
    <div className="project-card">
      <div className='project-title'>SpaceRides<br/><br /></div>
      <div className='project-para'>
        A robust carpooling website developed in collaboration with 4 people in 24 hours. Integrated Google Maps API/Leaflet for accurate location tracking and optimized route planning for users.
        <br/><br/><br/><br/><br/><br/>
        <button onClick={() => window.location.href ="https://github.com/sripadsirik/spark_commute"}>GitHub Repository</button>
      </div>
    </div>
    <div className="project-card">
      <div className='project-title'>Search <br></br>Algorithm</div>
      <div className='project-para'>
        A data scraping search algorithm programmed in C++, with several built-in class functions. Created several test suites using Google Test Suite and increased efficiency by identifying slow searches.
        <br/><br/><br/><br/>
        <button onClick={() => window.location.href ="https://github.com/SrijanSuresh/SearchAlgorithm"}>GitHub Repository</button>
      </div>
    </div>
  
  </div>
</div>
);
}


export default App;
