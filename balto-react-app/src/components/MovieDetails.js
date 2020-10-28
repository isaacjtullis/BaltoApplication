import { Table, Container, Row, Col, Button, Modal } from 'react-bootstrap';
export const MovieDetails = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Plot of the Movie
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          {props.movie.Plot}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
