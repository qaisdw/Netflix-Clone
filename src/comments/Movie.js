import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useState} from 'react';

import ModalMovieFun from "./ModalMovie"

export default function MovieFun(props){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`} />
            <Card.Body>
                <Card.Title>{props.movie.title}</Card.Title>
                <Button variant="primary" onClick={handleShow}>More Info</Button>
            </Card.Body>
        </Card>
        <ModalMovieFun show={show} handleClose={handleClose} data={props.movie}/>
        </>
        
    )
}