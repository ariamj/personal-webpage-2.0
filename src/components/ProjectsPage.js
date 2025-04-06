import React from "react";
import './ProjectsPage.css'
import ProjectsCarousal from "./ProjectsCarousal";
import ProjectCard from "./ProjectCard";

function ProjectsPage() {
    return (
        <div>
            <ProjectsCarousal></ProjectsCarousal>
            <div className="all-projs tiles">
                <ProjectCard></ProjectCard>
            </div>
        </div>
    );
}

export default ProjectsPage;