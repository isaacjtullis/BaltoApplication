import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import MovieService from '../_services/movie-services';
import { CreateMovieDirectoryForm } from './createMovieDirectoryForm';
import './movieDirectoryForm.css';

class CreateMovieDirectory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      validated: false
    }
    this.MovieService = new MovieService();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { displayForm } = this.state;
    const form = e.currentTarget;
    if (form.checkValidity()) {
      this.props.submitMovie();
    }
    this.setState({ validated: true });
  }

  render() {
    const { validated } = this.state;
    const { releaseYear, title, ethnicity, director, cast, genre, wikiPage, plot, displayForm } = this.props;
    return(
      <div>
          <Row>
            <Col className='text-center' md={12}>
              <Button className='toggle-button' onClick={() => this.props.toggleForm()}>Click here to create a movie directory</Button>
            </Col>
          </Row>
          {displayForm &&
            <CreateMovieDirectoryForm
              releaseYear={releaseYear}
              title={title}
              ethnicity={ethnicity}
              director={director}
              cast={cast}
              genre={genre}
              wikiPage={wikiPage}
              plot={plot}
              validated={validated}
              handleSubmit={(e)=>this.handleSubmit(e)}
              handleChange={(e) => this.props.handleChange(e)}
            />
          }
      </div>
    );
  }
}

export default CreateMovieDirectory;
