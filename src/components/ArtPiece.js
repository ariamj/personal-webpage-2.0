import { Box, ImageList, ImageListItem } from '@mui/material';
import { Image } from 'antd';
import { motion } from 'motion/react'

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${require(`../assets/img/${image}`)}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${require(`../assets/img/${image}`)}?size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
    };
};

function ArtPiece(props) {
    const item = {
        img: props.image,
        title: 'Forest',
        rows: 1,
        cols: 2,
    }

    return (
        <Box
            sx={{
                backgroundColor: 'purple',
                height: props.height,
                width: props.width,
            }}
        >
            {props.title}
            <ImageList
                sx={{
                    width: 500,
                    height: 450,
                }}
                variant='quilted'
                cols={4}
                rowHeight={121}
            >
                <ImageListItem
                    cols={1}
                    rows={1}
                >
                    <img
                        {...srcset(item.img, 121, item.rows, item.cols)}
                        alt={item.title}
                        loading='lazy'
                    />
                </ImageListItem>
                {/* {itemData.map((item) =>  (
                    <ImageListItem
                        cols={1}
                        rows={1}
                    >
                        <img
                            {...srcset(item.img, 121, item.rows, item.cols)}
                            alt={item.title}
                            loading='lazy'
                        />
                    </ImageListItem>
                ))} */}
            </ImageList>
        </Box>
    );
}

export default ArtPiece;