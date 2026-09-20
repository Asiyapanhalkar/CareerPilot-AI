import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">
          <span className="logo-icon">✦</span>
          CareerPilot <span>AI</span>
        </div>

        <nav>
          <a href="#dashboard">Dashboard</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#skills">Skills</a>
          <a href="#progress">Progress</a>
        </nav>

        <button className="profile-button">My Profile</button>
      </header>

      <main>
        <section className="hero" id="dashboard">
          <div>
            <p className="eyebrow">AI-POWERED CAREER NAVIGATOR</p>

            <h1>
              Build the career
              <br />
              <span>you want.</span>
            </h1>

            <p className="hero-text">
              CareerPilot AI analyzes your skills, identifies your gaps,
              and creates a personalized roadmap to your target career.
            </p>

            <div className="hero-buttons">
              <button className="primary-button">
                Analyze My Skills →
              </button>

              <button className="secondary-button">
                View Roadmap
              </button>
            </div>
          </div>

          <div className="hero-card">
            <div className="card-header">
              <span>Career Readiness</span>
              <span className="status">● Active</span>
            </div>

            <div className="score">68%</div>

            <p>Data Analyst</p>

            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>

            <div className="card-footer">
              <span>Current level</span>
              <strong>Intermediate</strong>
            </div>
          </div>
        </section>

        <section className="stats">
          <div className="stat-card">
            <span className="stat-icon">◈</span>
            <div>
              <strong>12</strong>
              <p>Skills Tracked</p>
            </div>
          </div>

          <div className="stat-card">
            <span className="stat-icon">△</span>
            <div>
              <strong>5</strong>
              <p>Skill Gaps</p>
            </div>
          </div>

          <div className="stat-card">
            <span className="stat-icon">✓</span>
            <div>
              <strong>7</strong>
              <p>Skills Completed</p>
            </div>
          </div>

          <div className="stat-card">
            <span className="stat-icon">◷</span>
            <div>
              <strong>12</strong>
              <p>Weeks Roadmap</p>
            </div>
          </div>
        </section>

        <section className="content-section" id="skills">
          <div className="section-heading">
            <div>
              <p className="eyebrow">AI ANALYSIS</p>
              <h2>Your Skill Gap</h2>
            </div>

            <span className="target-role">Target: Data Analyst</span>
          </div>

          <div className="skills-grid">
            <div className="skill-box">
              <h3>✓ Your Strengths</h3>
              <p>Python</p>
              <p>Machine Learning</p>
              <p>Java</p>
              <p>C++</p>
            </div>

            <div className="skill-box gap-box">
              <h3>△ Recommended Skills</h3>
              <p>SQL</p>
              <p>Power BI</p>
              <p>Advanced Excel</p>
              <p>Data Visualization</p>
            </div>
          </div>
        </section>

        <section className="content-section" id="roadmap">
          <div className="section-heading">
            <div>
              <p className="eyebrow">PERSONALIZED PLAN</p>
              <h2>Your Career Roadmap</h2>
            </div>
          </div>

          <div className="roadmap">
            <div className="roadmap-item completed">
              <div className="step-number">✓</div>
              <div>
                <h3>Python Fundamentals</h3>
                <p>Completed</p>
              </div>
            </div>

            <div className="roadmap-item active">
              <div className="step-number">2</div>
              <div>
                <h3>Learn SQL Fundamentals</h3>
                <p>Current focus • Week 3–4</p>
              </div>
            </div>

            <div className="roadmap-item">
              <div className="step-number">3</div>
              <div>
                <h3>Data Visualization</h3>
                <p>Upcoming • Week 5–6</p>
              </div>
            </div>

            <div className="roadmap-item">
              <div className="step-number">4</div>
              <div>
                <h3>Power BI Project</h3>
                <p>Upcoming • Week 7–8</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta">
          <p className="eyebrow">READY TO START?</p>
          <h2>Your next career move starts here.</h2>
          <button className="primary-button">
            Generate My Roadmap →
          </button>
        </section>
      </main>
    </div>
  );
}

export default App;