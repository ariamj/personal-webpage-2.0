import { ImageListItem } from '@mui/material';
import { Image } from 'antd';

function srcset(image, size, rows = 1, cols = 1) {
    console.log("IMAGE SRCSET: ", image);
    return {
        src: `${require(`../../public/images/art_gallery/${image}`)}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${require(`../../public/images/art_gallery/${image}`)}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
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
        <ImageListItem cols={1} rows={1} sx={{ border: '5px solid white'}}>
            <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading='lazy'
            />
        </ImageListItem>
        // <Image key={item.img} src={`/images/art_gallery/${item.img}`} width={200} preview={true}></Image>
    );
}

export default ArtPiece;