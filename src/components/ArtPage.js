import { Box, Grid, ImageList } from '@mui/material';
import { motion } from 'motion/react'
import ArtPiece from './ArtPiece';
import { useEffect, useState } from 'react';

function ArtPage() {
    const [fileNames, setFileNames] = useState([]);

    async function getArtFileNames() {
        try {
            const response = await fetch("http://localhost:8080/api/art-gallery-files");
            if (!response.ok) {
                throw new Error(`HTTP error: , ${response.status}`);
            }
            const data = await response.json();
            setFileNames(data.data);
            console.log(data);
        } catch (error) {
            console.error("error message: ", error);
        }
    }

    useEffect(() => {
        getArtFileNames()
    }, []);

    return (
        <motion.div
            className='art-tab'
            style={{
                minHeight: '92.5vh',
                height: '100%',
                padding: '5%',
                background: 'black'
            }}
        >
            <motion.h1
                initial={{opacity: 0}}
                transition={{duration: 0.9, ease: [0.17, 0.55, 0.55, 1]}}
                whileInView={{opacity: 1}}
                viewport={{amount : "all"}}
                style={{ color: 'white', marginBottom: '5%' }}
            >Art Archive</motion.h1>
            <motion.div>
                <Grid
                    container
                    spacing={3}
                    width={'80vw'}
                    justifyContent='space-around'
                    justifySelf='center'
                >
                    <Box>
                        <ImageList variant='masonry' cols={4} gap={8}>
                            {fileNames && fileNames.map((file) => (
                                <motion.div>
                                    <ArtPiece image={file} height={200} width={300}/>
                                </motion.div>
                            ))}
                        </ImageList>
                    </Box>
                </Grid>
            </motion.div>
        </motion.div>
    );
}

export default ArtPage;