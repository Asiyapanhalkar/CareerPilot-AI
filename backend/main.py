from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

app = FastAPI(title="CareerPilot AI API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class StudentProfile(BaseModel):
    name: str
    education: str
    skills: List[str]
    interests: List[str]
    experience: str
    career_goal: str
    target_role: str


@app.get("/")
def root():
    return {
        "message": "CareerPilot AI API is running",
        "status": "success"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }


@app.post("/profile")
def create_profile(profile: StudentProfile):
    return {
        "message": "Student profile received successfully",
        "profile": profile
    }
ROLE_SKILLS = {
    "Data Analyst": [
        "Python",
        "SQL",
        "Excel",
        "Statistics",
        "Data Visualization",
        "Power BI"
    ],
    "Machine Learning Engineer": [
        "Python",
        "Machine Learning",
        "Statistics",
        "SQL",
        "Deep Learning",
        "TensorFlow"
    ],
    "Software Developer": [
        "Java",
        "Python",
        "Data Structures",
        "Algorithms",
        "SQL",
        "Git"
    ]
}


@app.post("/analyze-skills")
def analyze_skills(profile: StudentProfile):
    required_skills = ROLE_SKILLS.get(
        profile.target_role,
        ROLE_SKILLS["Data Analyst"]
    )

    current_skills = [skill.lower() for skill in profile.skills]

    matched_skills = []
    missing_skills = []

    for skill in required_skills:
        if skill.lower() in current_skills:
            matched_skills.append(skill)
        else:
            missing_skills.append(skill)

    return {
        "target_role": profile.target_role,
        "current_skills": profile.skills,
        "required_skills": required_skills,
        "matched_skills": matched_skills,
        "skill_gaps": missing_skills,
        "total_required": len(required_skills),
        "skills_matched": len(matched_skills),
        "skills_missing": len(missing_skills)
    }