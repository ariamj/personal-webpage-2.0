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
        // getArtFileNames()
    }, []);

    const artGalleryImages = [
        "Auroras_dig.png",
        "Bulbasaur_dig.png",
        "bedroom_marker.jpeg",
        "bike_mix.jpeg",
        "birds_wc.jpeg",
        "car_interior_char.jpeg",
        "eye_char.jpeg",
        "fashion_green_dress_dig.jpeg",
        "forest_wc.jpeg",
        "gate_charcoal.jpeg",
        "grendel_char.jpeg",
        "house_sketch.jpeg",
        "instagram.jpeg",
        "mansion_int_deg.jpeg",
        "mansion_landscape_int_deg.jpeg",
        "marie_antoniette.jpeg",
        "metropolis_ball_char.jpeg",
        "portrait_dig.jpeg",
        "red_flower_wc.jpeg",
        "river_wc.jpeg",
        "rose_cs.jpeg",
        "roses_wc.jpeg",
        "shell_wc.jpeg",
        "small_flowers_wc.jpeg",
        "tower_marker.jpeg",
        "xmas_card.jpeg"
        ];

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
                            {artGalleryImages && artGalleryImages.map((file) => (
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