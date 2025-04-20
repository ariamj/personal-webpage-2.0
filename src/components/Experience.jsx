import { Box, Grid, Typography } from "@mui/material";
import { motion } from "motion/react";
import ExpCard from "./ExpCard";

import internshipData from '../data/experience.json'

function Experience() {
    return (
        <motion.div style={{width: '100vw'}}>
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
                >Internships</Typography>
            </motion.div>
            <Box className="section-inner" sx={{maxWidth: '100%'}}>
                <Grid container spacing={3} justifyContent="space-around">
                    {internshipData.map((internship, idx) => (
                        <motion.div 
                            initial={{opacity: 0, x: -100}} 
                            transition={{duration: 0.9, ease: [0.17, 0.55, 0.55, 1]}}
                            whileInView={{opacity: 1, x: 0}}
                            viewport={{amount: 0.5}}
                            key={idx}
                        >
                            <ExpCard exp={internship}/>
                        </motion.div>
                    ))}
                </Grid>
            </Box>
        </motion.div>
    )
}

export default Experience;