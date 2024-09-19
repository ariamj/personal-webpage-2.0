import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ProjectImage from '../assets/img/bubbles_static.png'

function ProjectCard() {
  return (
    <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180? text=Image" /> */}
      <Card.Img variant="top" src={ProjectImage} />
      {/* <Card.ImgOverlay variant="bottom"> */}
        <Card.Body>
          <Card.Title>Project 1</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      {/* </Card.ImgOverlay> */}
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Featured Skills:</ListGroup.Item>
        <ListGroup.Item>Date:</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button variant="primary">Github</Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;