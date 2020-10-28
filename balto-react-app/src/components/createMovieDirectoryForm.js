import React from "react";
import { Row, Col, Form, Button } from 'react-bootstrap';
import './movieDirectoryForm.css';

export const CreateMovieDirectoryForm = (props) => (
  <Form className="movie-form" noValidate validated={props.validated} onSubmit={props.handleSubmit}>
    <Row>
      <Col md={4}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Release Year</Form.Label>
          <Form.Control required value={props.releaseYear} onChange={props.handleChange} name="releaseYear" placeholder="Enter the release year of the movie" />
        </Form.Group>
      </Col>
      <Col md={4}>
        <Form.Group controlId="Title">
          <Form.Label>Title</Form.Label>
          <Form.Control required value={props.title} onChange={props.handleChange} name="title" placeholder="Title" />
        </Form.Group>
      </Col>
      <Col md={4}>
        <Form.Group controlId="Ethnicity">
          <Form.Label>Ethnicity</Form.Label>
          <Form.Control required value={props.ethnicity} onChange={props.handleChange} name="ethnicity" placeholder="Ethnicity" />
        </Form.Group>
      </Col>
    </Row>
    <Row>
      <Col md={4}>
        <Form.Group controlId="Director">
          <Form.Label>Director</Form.Label>
          <Form.Control required value={props.director} onChange={props.handleChange} name="director" placeholder="Director" />
        </Form.Group>
      </Col>
      <Col md={4}>
        <Form.Group controlId="Cast">
          <Form.Label>Cast</Form.Label>
          <Form.Control required value={props.cast} onChange={props.handleChange} name="cast" placeholder="Cast" />
        </Form.Group>
      </Col>
      <Col md={4}>
        <Form.Group controlId="Genre">
          <Form.Label>Genre</Form.Label>
          <Form.Control required value={props.genre} onChange={props.handleChange} name="genre" placeholder="Genre" />
        </Form.Group>
      </Col>
    </Row>
    <Row>
      <Col md={4}>
        <Form.Group controlId="WikiPage">
          <Form.Label>WikiPage</Form.Label>
          <Form.Control required value={props.wikiPage} onChange={props.handleChange} name="wikiPage" placeholder="WikiPage" />
        </Form.Group>
      </Col>
      <Col md={4}>
        <Form.Group controlId="Plot">
          <Form.Label>Plot</Form.Label>
          <Form.Control required value={props.plot} onChange={props.handleChange} name="plot" placeholder="Plot" />
        </Form.Group>
      </Col>
    </Row>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
)
