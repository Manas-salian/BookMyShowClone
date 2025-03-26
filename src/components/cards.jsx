import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardComponent({ title, text, imagesource }) {
    return (
        <Card className="text-white" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imagesource} />
            <Card.ImgOverlay className='d-flex flex-column justify-content-end'>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
            </Card.ImgOverlay>
        </Card>
    );
}

export default CardComponent;