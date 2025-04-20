import { Box, Grid } from '@mui/material';
import '../App.css'
import { motion } from 'motion/react';
import { Tag } from 'antd';

function TagsList(props) {
    console.log("props tags: ", props.tags)

    return (
        <motion.div>
            <motion.h4 style={{color: "white"}}>{props.title}</motion.h4>
            <Box sx={{width: '100%'}}>
                <Grid container sx={{paddingLeft: 5}}>
                    {props.tags.map((tag, idx) => (
                        <motion.div key={idx}>
                            <Tag
                                className='glass'
                                style={{
                                    borderColor: '#626898',
                                    color: '#626898',
                                    borderRadius: '10px',
                                    fontSize: '2vmin'
                                }}
                            >{tag}</Tag>
                        </motion.div>
                    ))}
                </Grid>
            </Box>
        </motion.div>
    );
}

export default TagsList;