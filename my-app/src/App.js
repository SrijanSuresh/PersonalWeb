import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="custom-name">
          Srijan Suresh
        </div>
        <h2 className="custom-text">  
          Student At University of Illinois at Chicago <br></br>
          and Former Software Engineer Intern at ACT
        </h2>
        <div className="button-container">
          <button>
            <div className="custom-text">PROJECTS</div>
            </button>
          <button>
            <div className = "custom-text">ABOUT ME</div>
            </button>
        </div>
      </header>
    </div>
  );
}

export default App;
