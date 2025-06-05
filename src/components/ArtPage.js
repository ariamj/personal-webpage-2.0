import { Box, Grid } from '@mui/material';
import { motion } from 'motion/react'
import ArtPiece from './ArtPiece';

function ArtPage() {

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
                    <ArtPiece image='forest.jpg' title='Image 0' height={200} width={300}/>
                    <ArtPiece image='Onward.png' title='Image 1' height={200} width={250}/>
                    <ArtPiece image='Petals.png' title='Image 2' height={300} width={250}/>
                </Grid>
            </motion.div>
        </motion.div>
    );
}

export default ArtPage;