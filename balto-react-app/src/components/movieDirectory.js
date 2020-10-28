import React from "react";
import { Table, Container, Row, Col, CardDeck, Card } from 'react-bootstrap';
import MovieService from '../_services/movie-services';
import { MovieForm } from './movieForm';
import { MovieDetails } from './MovieDetails';
import CreateMovieDirectory from './createMovieDirectory';
import { Eye, ArrowRight, Trash, Pencil } from 'react-bootstrap-icons';

class MovieDirectory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      uploadedFiles: null,
      displayModal: false,
      selectedMovie: null,
      activePagination: 1,
      releaseYear: '',
      title: '',
      ethnicity: '',
      director: '',
      cast: '',
      genre: '',
      wikiPage: '',
      plot: '',
      displayForm: false,
      isLoading: false
    }
    this.MovieService = new MovieService();
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    this.MovieService.getMovies()
      .then(data => {
        this.setState({ movies: data, isLoading: false });
      })
      .catch(err => {
        console.error('ERROR', err);
        this.setState({ isLoading: false});
      })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { uploadedFile } = this.state;
    const file = uploadedFile;
    this.MovieService.uploadFile(file);
  }

  handleFileChange = (e) => {
    this.setState({ uploadedFile: e.target.files[0]});
  }

  handleDelete = (id) => {
    if(!id) return;
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Are you sure you want to delete this movie?")) {
      this.MovieService.deleteMovie(id).then(()=>{
        const movies = this.state.movies.filter(movie => movie.id !== id);
        this.setState({ movies: movies, displayModal: false});
      })
    } else {
      return;
    }
  }

  displayModal = (movie) => {
    this.setState({ displayModal: !this.state.displayModal, selectedMovie: movie });
  }

  submitMovie = () => {
    const data = {}
    data.ReleaseYear = this.state.releaseYear;
    data.Title = this.state.title;
    data.Ethnicity = this.state.ethnicity;
    data.Director = this.state.director;
    data.Cast = this.state.cast;
    data.Genre = this.state.genre;
    data.WikiPage = this.state.wikiPage;
    data.Plot = this.state.plot;
    this.MovieService.createMovieDirectory(data)
      .then(response=> {
        this.setState({ movies: [...this.state.movies, data], releaseYear: '', title: '', ethnicity: '', director: '', cast: '', genre: '', wikiPage: '', plot: '', displayForm: false})
      });
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  displayMovies = () => {
    const { movies } = this.state;
    if (!movies.length === 0 ) return;
    return movies.map(movie => {
      return (
        <tr key={movie.id}>
          <td>{movie.Title}</td>
          <td>{movie.ReleaseYear}</td>
          <td><a href={`${movie.WikiPage}`}>{movie.WikiPage}</a></td>
          <td><Eye onClick={() => this.displayModal(movie)} /></td>
          <td><Trash onClick={() => this.handleDelete(movie.id)} /> </td>
        </tr>

      );
    });
  }

  toggleForm = () => {
    const { displayForm } = this.state;
    this.setState({ displayForm: !displayForm });
  }

  render() {
    const { releaseYear, title, ethnicity, director, cast, genre, wikiPage, plot, displayForm } = this.state;
    return(
      <Container>
        <Row>
          <Col md={12}>
            <CreateMovieDirectory
              submitMovie={(data) => this.submitMovie(data)}
              handleChange={(e) => this.handleChange(e)}
              releaseYear={releaseYear}
              title={title}
              wikiPage={wikiPage}
              plot={plot}
              genre={genre}
              cast={cast}
              director={director}
              ethnicity={ethnicity}
              displayForm={displayForm}
              toggleForm={() => this.toggleForm()}
            />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <MovieForm
              handleSubmit={(e)=> this.handleSubmit(e)}
              handleChange={(e)=> this.handleFileChange(e)}
            />
          </Col>
        </Row>
        {this.state.isLoading &&
          <Row className='text-center'>
            <Col Md={12}><h1>Loading Data...</h1></Col>
          </Row>
        }
        {!this.state.isLoading &&
          <Row>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Release Year</th>
                  <th>Wiki Page</th>
                  <th>Show More</th>
                  <th>More Options</th>
                </tr>
              </thead>
              <tbody>
                {this.displayMovies()}
              </tbody>
            </Table>
          </Row>
        }
        {this.state.displayModal &&
          <MovieDetails
            show={this.state.displayModal}
            onHide={() => this.displayModal()}
            movie={this.state.selectedMovie}
          />
        }
      </Container>
    );
  }
}

export default MovieDirectory;
