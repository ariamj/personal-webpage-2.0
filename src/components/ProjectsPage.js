import React, { useEffect } from "react";
import {useRef} from "react";
import './ProjectsPage.css'
import ProjectsCarousal from "./ProjectsCarousal";
import ProjectCard from "./ProjectCard";
import { Box, Grid } from "@mui/material";
import { useAnimate, useInView } from "motion/react"
import { animate, inView } from "motion";

import steamGamesCover from '../assets/img/steam_games.png'
import personalShopperCover from '../assets/img/forest.jpg'
import HarmonicHusttleCover from '../assets/img/Harmonic_Hustle.png'
import InsightUBCCover from '../assets/img/Insight_UBC.png'
import Big2Cover from '../assets/img/Big_2.png'
import GalleryManagerCover from '../assets/img/Gallery_Manager.png'

import data from '../data/projects.json'
console.log("Projects Data: ", data);

const projectCards = data.map((proj, i) => {
    return {
        id: i,
        ...proj,
    };
});

function ProjectsPage() {
    const ref = useRef(null)
    // const [scope, animate] = useAnimate();
    // const isInView = useInView(scope);

    // useEffect(() => {
    //     if (isInView) {
    //         animate(scope.current, { opacity: 1 });
    //     }
    // }, [isInView]);

    inView(".tiles .proj-card", (element) => {
        const animation = animate(
            element,
            { opacity: 1, x: [-100, 0] },
            {
                duration: 0.9,
                easing: [0.17, 0.55, 0.55, 1],
            }
        )
        // return () => animate(element, { opacity: 0, x: -100 })
        return () => animation.stop();
    })

    return (
        <div>
            <ProjectsCarousal ref={ref}></ProjectsCarousal>
            <div className="all-projs tiles" ref={ref}>
                <Box sx={{maxWidth: '100%'}}>
                    <Grid container spacing={3} justifyContent="space-around">
                        {projectCards.map((project) => (
                            <div className="proj-card" item key={project.id}>
                                <ProjectCard project={project}/>
                            </div>
                        ))}
                    </Grid>
                </Box>
            </div>
        </div>
    );
}

export default ProjectsPage;