import { Box, Button, Grid, ImageList } from '@mui/material';
import { motion } from 'motion/react'
import ArtPiece from './ArtPiece';
import { useEffect, useState } from 'react';

function ArtPage() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8080/api/art-gallery-files')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    console.log("Data from Effect: ", data);
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

    return (
        <motion.div
            className='art-tab'
            style={{
                minHeight: '92.5vh',
                height: '100%',
                backgroundColor: 'red',
            }}
        >
            <motion.h1>ART</motion.h1>
            <Button onClick={() => getArtFileNames()}>Call FileName API</Button>
            {fileNames && console.log("FileNames: ", fileNames)}
            <motion.div>
                <Grid
                    container
                    spacing={3}
                    width={'80vw'}
                    sx={{
                        backgroundColor: 'blue',
                    }}
                    justifyContent='space-around'
                    justifySelf='center'
                >
                    <Box
                        sx={{
                            backgroundColor: 'purple',
                            // height: 200,
                            // width: 250,
                        }}
                    >
                        <ImageList
                            sx={{
                                // width: 500,
                                // height: 450,
                            }}
                            variant='masonry'
                            cols={4}
                            gap={8}
                            // rowHeight={121}
                        >
                            {fileNames && fileNames.map((file) => (
                                <ArtPiece image={file} height={200} width={300}/>
                            ))}
                        </ImageList>
                    </Box>
                    {/* {fileNames && fileNames.map((file) => (
                        <ArtPiece image={file} height={200} width={300}/>
                    ))} */}
                    {/* <ArtPiece image='forest.jpg' title='Image 0' height={200} width={300}/>
                    <ArtPiece image='Onward.png' title='Image 1' height={200} width={250}/>
                    <ArtPiece image='Petals.png' title='Image 2' height={300} width={250}/> */}
                </Grid>
            </motion.div>
        </motion.div>
    );
}

export default ArtPage;