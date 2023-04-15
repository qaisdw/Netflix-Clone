import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import UpdateModel from "./UpdateModel"



export default function FavListFun(props) {
    const [favMovie, setfavMovie] = useState([]);

    async function handleEventFav() {
        let url = `${process.env.REACT_APP_SERVER_URL}/getMovies`;
        const response = await fetch(url, {
            method:'GET',
        })
        const recivedData = await response.json()
        setfavMovie(recivedData);
    }

    useEffect(() => { handleEventFav(); }, []);

    async function deleteEvent(id) {
        let url = `${process.env.REACT_APP_SERVER_URL}/deleteMovies/${id}`;
        const response = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
              }
        })
        handleEventFav();
    }



    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    


    return (<>
        {
           favMovie && favMovie.map((data => {
                return (<>
                <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${data.movieImg}`} />
                        <Card.Body>
                            <Card.Title>{data.movieName}</Card.Title>
                            <Card.Title>{data.overView}</Card.Title>
                            <Card.Title>{data.comment}</Card.Title>
                            <Button variant="primary" onClick={()=>deleteEvent(data.id)} >Delete</Button>
                            <Button variant="primary" onClick={handleShow} >UpdateInfo</Button>
                        </Card.Body>
                </Card>
                <UpdateModel show={show} handleClose={handleClose} movie={data}/>
                </>
                )
            }))
        }
    </>)
}