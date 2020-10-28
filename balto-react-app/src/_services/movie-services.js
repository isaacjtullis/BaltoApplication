export default class MovieService {
  getMovies() {
    return fetch('http://localhost:5000/')
      .then(response => response.json())
      .then(data => Promise.resolve(data))
  }

  uploadFile(file) {
    const data = new FormData();
    data.append('file', file);
    const options = {
      method: 'POST',
      body: data
    }
    return fetch('http://localhost:5000/uploadFile', options)
      .then(response => response.json())
  }

  createMovieDirectory(data) {
    const headers = {
      Accept: 'applicatoin/json',
      'Content-Type': 'application/json',
    };
    const options = {
      method: 'POST',
      headers,
      body: JSON.stringify(data)
    }
    console.log('options:', options);
    return fetch('http://localhost:5000/', options)
      .then(response => response)
  }

  deleteMovie(id) {
    console.log('delete movie:', id);
    const options = {
      method: 'DELETE',
    }
    return fetch(`http://localhost:5000/${id}`, options)
      .then(response => response)
  }
}
