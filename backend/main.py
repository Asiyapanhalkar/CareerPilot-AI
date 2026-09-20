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