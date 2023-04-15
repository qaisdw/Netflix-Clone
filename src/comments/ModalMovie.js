import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {useRef} from 'react'

export default function ModalMovieFun(props) {
  const commentRef = useRef();

  function handleEvent(event){
   event.preventDefault()

   let comment = commentRef.current.value;
   let newMovie = {...props.movie,comment}
   props.commentHandler(newMovie,newMovie.id)
   
   
}

async function addComment(event){
  event.preventDefault()
  let url=`${process.env.REACT_APP_SERVER_URL}/moviesSql`;
   let data = {
    movieName:props.data.title,
    comment:props.data.comment,
    movieImg:props.data.poster_path,
    overView:props.data.overview
   }
   
   const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
  const reciveData = await response.json()
  console.log(reciveData);
}

  return (
    <Modal show={props.show} onHide={props.handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>{props.data.title}</Modal.Title>
      </Modal.Header>
      <br/>
      <Modal.Body>{(props.data.overview)}
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmai">
          <Form.Label>Enter Your Comment</Form.Label>
          <Form.Control ref={commentRef} type="text" placeholder="Enter comment" />
          <Form.Text className="text-muted">
            We'll never share your information with anyone else.
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={(e)=>handleEvent(e)}>
          Add To Comment
        </Button>
      </Form>
      </Modal.Body>
      <br/>
      <Modal.Footer>
      <Button variant="primary" type="submit" onClick={(e)=>addComment(e)}>
          Add To Favorite
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
