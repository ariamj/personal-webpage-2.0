import { Box, Grid, Stack, Typography } from "@mui/material";
import { motion } from "motion/react"
import TagsList from "./TagsList";

const skills = [
    {
        title: "Programming Languages",
        tags: ["JavaScript", "TypeScript", "Python", "Java", "C++", "C", "SQL", "Kotlin", "PHP", "Assembly", "DrRacket"]
    },
    {
        title: "Web",
        tags: ["HTML", "CSS", "React"]
    },
    {
        title: "Frameworks/Libraries",
        tags: ["MUI", "Motion", "Node", "OpenGL", "Scikit-Learn", "Pandas", "Espresso", "UiAutomator", "Jetpack Compose", "JUnit", "Mocha", "Swing", "Jasmine", "Jest"]
    },
    {
        title: "Tools/Environments",
        tags: ["Git", "GitHub", "Figma", "Jira", "Jupyter", "Visual Studio Code", "Android Studio", "IntelliJ"]
    },
];

function Skills() {
    return (
        <motion.div>
            <motion.div
                className="section-header"
                initial={{opacity: 0}}
                transition={{duration: 0.9, ease: [0.17, 0.55, 0.55, 1]}}
                whileInView={{opacity: 1}}
                viewport={{amount : "all"}}
            >
                <Typography variant="h4" component="h1" 
                    sx={{
                        marginBottom: 5,
                        color: 'white',
                        // marginLeft: 5
                    }}
                >Skills</Typography>
            </motion.div>
            <Box className="section-inner" sx={{maxWidth: '100%'}}>
                <Stack spacing={3} sx={{color: "white"}}>
                    {skills.map((skill, idx) => (
                        <motion.div
                            initial={{opacity: 0, x: -100}} 
                            transition={{duration: 0.9, ease: [0.17, 0.55, 0.55, 1]}}
                            whileInView={{opacity: 1, x: 0}}
                            viewport={{amount: 0.5}}
                            key={idx}
                        >
                            <TagsList title={skill.title} tags={skill.tags} />
                        </motion.div>
                    ))}
                </Stack>
            </Box>
        </motion.div>
    )
}

export default Skills;