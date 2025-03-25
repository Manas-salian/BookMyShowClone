import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardComponent({ title, text, imagesource }) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imagesource} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default CardComponent;