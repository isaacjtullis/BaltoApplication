import React from "react";
import { Form, Button } from 'react-bootstrap';
import './movieDirectoryForm.css';

export const MovieForm = (props) => (
  <Form className="upload-document" noValidate validated={props.validated} onSubmit={props.handleSubmit}>
    <Form.File onChange={props.handleChange}/>
    <Button variant="primary" type="submit">Upload Document</Button>
  </Form>
)
