import { useState } from "react";
import "./App.css";

function App() {
  const [roadmap, setRoadmap] = useState([
  {
    skill: "SQL",
    priority: "High",
    duration: "2 weeks",
    activities: [
      "Learn SQL basics",
      "Practice SELECT, WHERE, JOIN and GROUP BY",
      "Solve 20 SQL practice problems",
      "Build a small SQL analysis project",
    ],
  },
  {
    skill: "Excel",
    priority: "High",
    duration: "1 week",
    activities: [
      "Learn formulas and functions",
      "Practice Pivot Tables",
      "Learn data cleaning",
      "Create an Excel dashboard",
    ],
  },
  {
    skill: "Statistics",
    priority: "Medium",
    duration: "2 weeks",
    activities: [
      "Learn descriptive statistics",
      "Study probability basics",
      "Practice statistical analysis",
    ],
  },
  {
    skill: "Data Visualization",
    priority: "High",
    duration: "2 weeks",
    activities: [
      "Learn visualization principles",
      "Create charts using Python",
      "Practice with Matplotlib",
      "Build a visualization project",
    ],
  },
  {
    skill: "Power BI",
    priority: "High",
    duration: "2 weeks",
    activities: [
      "Learn Power BI basics",
      "Import and clean data",
      "Create interactive dashboards",
      "Build a Power BI portfolio project",
    ],
  },
]);
  const [loading, setLoading] = useState(false);
  const [generated, setGenerated] = useState(false);

  const studentProfile = {
    name: "Asiya",
    education: "B.Tech AIML Engineering - 3rd Year",
    skills: ["Python", "Java", "C++", "Machine Learning", "HTML", "CSS"],
    interests: [
      "Data Analytics",
      "Artificial Intelligence",
      "Machine Learning",
    ],
    experience: "Internship at IGAP Technologies",
    career_goal: "Build a career in data analytics",
    target_role: "Data Analyst",
  };

  const generateRoadmap = () => {
  const demoRoadmap = [
    {
      skill: "SQL",
      priority: "High",
      duration: "2 weeks",
      activities: [
        "Learn SQL basics",
        "Practice SELECT, WHERE, JOIN and GROUP BY",
        "Solve 20 SQL practice problems",
        "Build a small SQL analysis project",
      ],
    },
    {
      skill: "Excel",
      priority: "High",
      duration: "1 week",
      activities: [
        "Learn formulas and functions",
        "Practice Pivot Tables",
        "Learn data cleaning",
        "Create an Excel dashboard",
      ],
    },
    {
      skill: "Statistics",
      priority: "Medium",
      duration: "2 weeks",
      activities: [
        "Learn descriptive statistics",
        "Study probability basics",
        "Understand mean, median and standard deviation",
        "Practice statistical analysis",
      ],
    },
    {
      skill: "Data Visualization",
      priority: "High",
      duration: "2 weeks",
      activities: [
        "Learn visualization principles",
        "Create charts using Python",
        "Practice with Matplotlib",
        "Build a data visualization project",
      ],
    },
    {
      skill: "Power BI",
      priority: "High",
      duration: "2 weeks",
      activities: [
        "Learn Power BI basics",
        "Import and clean data",
        "Create interactive dashboards",
        "Build a Power BI portfolio project",
      ],
    },
  ];

  setRoadmap(demoRoadmap);
  setGenerated(true);
};
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">
          <span className="logo-icon">✦</span>
          CareerPilot <span>AI</span>
        </div>

        <div className="nav-links">
          <a className="active">Dashboard</a>
          <a>Roadmap</a>
          <a>Skills</a>
          <a>Progress</a>
          <a>My Profile</a>
        </div>

        <div className="profile-circle">A</div>
      </nav>

      <main>
        <section className="hero">
          <div>
            <p className="eyebrow">AI-POWERED CAREER NAVIGATOR</p>

            <h1>
              Build the career
              <br />
              <span>you want.</span>
            </h1>

            <p className="hero-text">
              CareerPilot AI analyzes your skills, identifies gaps, and
              creates a personalized roadmap for your target career.
            </p>

            <button
              className="primary-btn"
              onClick={generateRoadmap}
              disabled={loading}
            >
              {loading ? "Generating..." : "Generate My Roadmap →"}
            </button>
          </div>

          <div className="readiness-card">
            <div className="readiness-header">
              <span>Career Readiness</span>
              <strong>68%</strong>
            </div>

            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>

            <p>Target Role</p>
            <h3>Data Analyst</h3>
            <span className="status">● In Progress</span>
          </div>
        </section>

        <section className="stats-grid">
          <div className="stat-card">
            <span>Skills Tracked</span>
            <strong>12</strong>
          </div>

          <div className="stat-card">
            <span>Skill Gaps</span>
            <strong>5</strong>
          </div>

          <div className="stat-card">
            <span>Skills Completed</span>
            <strong>7</strong>
          </div>

          <div className="stat-card">
            <span>Roadmap</span>
            <strong>12 Weeks</strong>
          </div>
        </section>

        <section className="content-grid">
          <div className="panel">
            <div className="panel-header">
              <div>
                <p className="section-label">AI ANALYSIS</p>
                <h2>Skill Gap Analysis</h2>
              </div>
              <span className="ai-badge">✦ AI Generated</span>
            </div>

            <div className="skill-section">
              <h3>Your Strengths</h3>

              <div className="tags">
                <span>Python</span>
                <span>Machine Learning</span>
                <span>Java</span>
                <span>C++</span>
              </div>
            </div>

            <div className="skill-section">
              <h3>Recommended Skills</h3>

              <div className="gap-list">
                <div>
                  <span>SQL</span>
                  <b>High Priority</b>
                </div>

                <div>
                  <span>Power BI</span>
                  <b>High Priority</b>
                </div>

                <div>
                  <span>Advanced Excel</span>
                  <b>High Priority</b>
                </div>

                <div>
                  <span>Data Visualization</span>
                  <b>Medium Priority</b>
                </div>
              </div>
            </div>
          </div>

          <div className="panel">
            <div className="panel-header">
              <div>
                <p className="section-label">YOUR JOURNEY</p>
                <h2>Learning Roadmap</h2>
              </div>
            </div>

            <div className="roadmap-list">
              <div className="roadmap-item completed">
                <div className="roadmap-dot">✓</div>
                <div>
                  <span>Week 1–2</span>
                  <h3>Python Fundamentals</h3>
                  <p>Completed</p>
                </div>
              </div>

              <div className="roadmap-item current">
                <div className="roadmap-dot">2</div>
                <div>
                  <span>Week 3–4</span>
                  <h3>SQL Fundamentals</h3>
                  <p>Current focus</p>
                </div>
              </div>

              <div className="roadmap-item">
                <div className="roadmap-dot">3</div>
                <div>
                  <span>Week 5–6</span>
                  <h3>Data Visualization</h3>
                  <p>Upcoming</p>
                </div>
              </div>

              <div className="roadmap-item">
                <div className="roadmap-dot">4</div>
                <div>
                  <span>Week 7–8</span>
                  <h3>Power BI Project</h3>
                  <p>Upcoming</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        
          <section className="panel generated-roadmap">
            <div className="panel-header">
              <div>
                <p className="section-label">LIVE AI RESULT</p>
                <h2>Your Personalized Roadmap</h2>
              </div>

              <span className="ai-badge">✓ Generated by API</span>
            </div>

            <div className="generated-grid">
              {roadmap.map((item, index) => (
                <div className="roadmap-card" key={item.skill}>
                  <div className="roadmap-number">{index + 1}</div>

                  <div>
                    <div className="roadmap-card-top">
                      <h3>{item.skill}</h3>
                      <span className={item.priority.toLowerCase()}>
                        {item.priority}
                      </span>
                    </div>

                    <p className="duration">{item.duration}</p>

                    <ul>
                      {item.activities.map((activity) => (
                        <li key={activity}>{activity}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>
      </main>
    </div>
  );
}

export default App;