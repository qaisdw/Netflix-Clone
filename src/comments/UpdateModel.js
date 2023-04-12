import { Button, Modal, Form } from 'react-bootstrap';
import { useRef } from 'react';

export default function UpdateModal(props) {
  const commentRef = useRef();

  async function updateComment(id, data) {
    let comment = commentRef.current.value;

    let url = `${process.env.REACT_APP_SERVER_URL}/movies/${id}/comments`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comment })
    });

    if (response.ok) {
      // If the response from the server is successful, close the modal
      props.handleClose();
    } else {
      // If there was an error with the request, log it to the console
      console.error(`Error updating comment: ${response.statusText}`);
    }
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
            </Form.Group>
          </Form>
        </Modal.Body>
        <br />
        <Modal.Footer>
          <Button variant="primary" onClick={() => updateComment(props.movie.id)}>Update</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
