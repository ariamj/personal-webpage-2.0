import './ProjectsPage.css'
import ProjectsCarousal from "./ProjectsCarousal";
import ProjectCard from "./ProjectCard";
import { Box, Grid, Typography } from "@mui/material";
import { motion } from "motion/react"

import data from '../data/projects.json'

const projectCards = data.map((proj, i) => {
    return {
        id: i,
        ...proj,
    };
});

function ProjectsPage() {

    return (
        <div>
            <ProjectsCarousal></ProjectsCarousal>
            <div className="all-projs tiles">
                <motion.div
                    initial={{opacity: 0}}
                    transition={{duration: 0.9, ease: [0.17, 0.55, 0.55, 1]}}
                    whileInView={{opacity: 1}}
                    viewport={{amount : "all"}}
                >
                    <Typography variant="h4" component="h1" sx={{marginBottom: 5}}>Project Archive</Typography>
                </motion.div>
                <Box sx={{maxWidth: '100%'}}>
                    <Grid container spacing={3} justifyContent="space-around">
                        {projectCards.map((project) => (
                            // <div className="proj-card" style={{opacity: 0}}>
                            //     <ProjectCard project={project}/>
                            // </div>
                            <motion.div 
                                initial={{opacity: 0, x: -100}} 
                                transition={{duration: 0.9, ease: [0.17, 0.55, 0.55, 1]}}
                                whileInView={{opacity: 1, x: 0}}
                                viewport={{amount: 0.5}}
                                key={project.id}
                            >
                                <ProjectCard project={project}/>
                            </motion.div>
                            // <Grid className="proj-card" key={project.id} 
                            //     sx={{transform: 'translateX(-100px)', opacity: 0}}>
                            //     <ProjectCard project={project}/>
                            // </Grid>
                        ))}
                    </Grid>
                </Box>
            </div>
        </div>
    );
}

export default ProjectsPage;