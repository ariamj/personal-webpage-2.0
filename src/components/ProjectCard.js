// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ProjectImage from '../assets/img/bubbles_static.png'
import GitHubIcon from "@mui/icons-material/GitHub";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';

import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Stack, Typography } from '@mui/material';

function ProjectCard({
  title = "Title", 
  skills = ["JavaScript", "HTML", "CSS"],
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
  image = 'Onward.png', 
  link
}) {

  const cardData = {
    image: image,
    title: title,
    skills: skills,
    description: description,
  };
  // let coverImage = image ? image : '../assets/img/Onward.png';
  console.log(image);

  return (
    <Card className='card' sx={{maxWidth: 305, maxHeight: 365, position: 'relative'}}>
      <CardActionArea>
        <CardMedia
          className='cover-img'
          component="img"
          height="100"
          image={require(`../assets/img/${image}`)}
          alt='cover image'
          sx={{
            width: '100%',
            height: 133,
            objectFit: 'cover',
          }}
        />
        <CardContent>
          <Typography variant="h5" component="h2" sx={{ mb: 1 }}>
            {cardData.title}
          </Typography>
          <Typography
            variant="subtitle3"
            sx={{
              fontStyle: "italic",
              mb: 1,
            }}
          >
            {cardData.skills.join("·")}
          </Typography>
          <Typography variant="body2" 
          className='body-text'
            sx={{height: 90, overflow: 'hidden'}}>{cardData.description}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{display: 'flex', justifyContent: 'flex-end'}}>
        <Stack
          direction="row"
          spacing={1}
        >
          <IconButton aria-label='Demo' size='small'>
            <PlayArrowOutlinedIcon fontSize="inherit" />
          </IconButton>
          <IconButton aria-label='GitHub' size='small'>
            <GitHubIcon fontSize="inherit" />
          </IconButton>
        </Stack>
        {/* <Button size='small' color='primary'>
          <Typography variant='button' sx={{fontSize: '0.5rem'}}>GitHub</Typography>
        </Button> */}
      </CardActions>
    </Card>
    // <Card style={{ width: '18rem' }}>
    //   {/* <Card.Img variant="top" src="holder.js/100px180? text=Image" /> */}
    //   <Card.Img variant="top" src={ProjectImage} />
    //   {/* <Card.ImgOverlay variant="bottom"> */}
    //     <Card.Body>
    //       <Card.Title>Project 1</Card.Title>
    //       <Card.Text>
    //         Some quick example text to build on the card title and make up the
    //         bulk of the card's content.
    //       </Card.Text>
    //     </Card.Body>
    //   {/* </Card.ImgOverlay> */}
    //   <ListGroup className="list-group-flush">
    //     <ListGroup.Item>Featured Skills:</ListGroup.Item>
    //     <ListGroup.Item>Date:</ListGroup.Item>
    //   </ListGroup>
    //   <Card.Body>
    //     <Button variant="primary">Github</Button>
    //   </Card.Body>
    // </Card>
  );
}

export default ProjectCard;