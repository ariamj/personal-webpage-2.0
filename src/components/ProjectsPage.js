import React, { useEffect } from "react";
import {useRef} from "react";
import './ProjectsPage.css'
import ProjectsCarousal from "./ProjectsCarousal";
import ProjectCard from "./ProjectCard";
import { Box, Grid, Typography } from "@mui/material";
import { motion, useAnimate, useInView } from "motion/react"
import { animate, inView } from "motion";

import data from '../data/projects.json'

const projectCards = data.map((proj, i) => {
    return {
        id: i,
        ...proj,
    };
});

function ProjectsPage() {
    // const ref = useRef(null)
    // const [scope, animate] = useAnimate();
    // const isInView = useInView(scope);

    // useEffect(() => {
    //     if (isInView) {
    //         animate(scope.current, 
    //             { opacity: 1 },
    //             {
    //                 duration: 0.9,
    //                 easing: [0.17, 0.55, 0.55, 1],
    //             }
    //         );
    //     }
    // }, [isInView]);

    // inView(".proj-card", (element) => {
    //     const animation = animate(
    //         element,
    //         { opacity: 1, x: [-100, 0] },
    //         {
    //             duration: 0.9,
    //             easing: [0.17, 0.55, 0.55, 1],
    //         }
    //     )
    //     return () => animate(element, { opacity: 0, x: -100 })
    //     // return () => animation.stop();
    // })

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