import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useRef } from 'react'

export default function UpdateModel(props) {
    const commentRef = useRef();
    async function handleEvent(id,data){
        let comment = commentRef.current.value;
        let newMovie = { ...props, comment }
        props.commentHandler(newMovie, newMovie.id)

        let url = `${process.env.REACT_APP_SERVER_URL}/updateMpvies/${id}`;
        const response = await fetch(url, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
    }
 

    return (
        <>
            <Modal show={props.show} onHide={props.handleClose} animation={false}>

                <br />
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmai">
                            <Form.Label>Update your comment</Form.Label>
                            <Form.Control ref={commentRef} type="text" placeholder="Enter New Comment" />
                            <Form.Text className="text-muted">
                                We'll never share your information with anyone else.
                            </Form.Text>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <br />
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </>
    )
}