import { ToastConsumer, ToastProvider, withToastManager } from 'react-toast-notifications';
import React from 'react'
import MovieListElement from '../components/MovieListElement';
import Movie from './Movie';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import * as movieRequests from '../api/movies.js';
import rp from 'request-promise';
import { ClipLoader } from 'react-spinners';
import searchIcon from '../assets/search.png';


/*
  [Movies] returns the page of most popular movies . The user has the option to
  click on the movie itself to redirect to the [Movie] page for the
  selected movie.

  Components Utilized:
    - [MovieListElement]: the individual movie card

  Screens it connects to
    - [Movie] (when the user clicks on the movie)
*/
const width = 50;

class Movies extends React.Component {

  mounted = true
  state = {
    "isDisplayMovie": false,
    "movies": [],
    "currentMovieID": -1,
    "currentMovie": {},
    "isLoading": false,
    "searchContent": ""
  };

  constructor(props) {
    super(props)
    this.toggleDisplayMovie = this.toggleDisplayMovie.bind(this);
  }

  componentDidMount() {
    this.setState({isLoading: true})
    Promise.resolve(rp(movieRequests.get_popular_movies)
    .then(result => {
      this.setState({movies : result.results, isLoading: false})
    })
    .catch(err => console.log(err))
    )
  }

  /* Switch on/off edit display movie. */
  toggleDisplayMovie() {
    window.scrollTo(0, 0);
    this.setState({
        isDisplayMovie: !this.state.isDisplayMovie,
        searchContent: "",
        currentMovie: {}});
  }

  handleDisplayMovie = (movieID) => {
    this.toggleDisplayMovie();
    Promise.resolve(rp(movieRequests.get_movie_by_id(movieID))
    .then(result => {
      this.setState({currentMovie : result})
    })
    .catch(err => console.log(err)))
  }

  /* Creates view for all movies. */
  renderMoviesContainer = () => {
    let rows = []
    let counter = 0
    let children = []
    const searchedMovies = this.state.movies.filter((movie) => {
      return movie.original_title.toLowerCase()
              .search(this.state.searchContent.toLocaleLowerCase()) !== -1
    });
    for(var i = 0; i < searchedMovies.length; i++) {
      const index = i;
      const movie = searchedMovies[i];
      if (typeof movie !== "undefined") {
        children.push(
        <Col sm={2}>
          <MovieListElement
            id={movie.id}
            originalTitle={movie.original_title}
            posterPath={movie.poster_path}
            onClick={() => {this.handleDisplayMovie(movie.id)}}/>
        </Col>)
        counter++
        if(counter % 6 == 0) {
          rows.push(<Row style={styles.row}>{children}</Row>)
          counter = 0
          children = []
        }
      }
    }
    if(children != []) {
      rows.push(<Row style={styles.row}>{children}</Row>)
    }
    return rows
  }

  /* Creates individual movie view. */
  renderDisplayMovie() {
    var currentMovie = this.state.currentMovie;
    if(Object.keys(currentMovie).length == 0) return;
    console.log(currentMovie);
    return (
      <div>
        <div
          onClick={() => this.toggleDisplayMovie()}
          className="hover backButton"
          >
          &lt;
        </div>
        <Movie
          id={currentMovie.id}
          originalTitle={currentMovie.original_title}
          posterPath={currentMovie.poster_path}
          userRating={currentMovie.vote_average * 10}
          overview={currentMovie.overview}
          releaseYear={currentMovie.release_date.substring(0, 4)}
          runtime={currentMovie.runtime}
          language={currentMovie.original_language.toUpperCase()}
          status={currentMovie.status}
         />
      </div>
    )
  }

  /* Top level render method for this component. */
  renderMovies() {
    return (
      <div>
        <div>
          <div className="titleText">
            <span>Movie App</span>
          </div>
          <div>
            <input
              style={{
                background: `url(${searchIcon}) no-repeat scroll 9px 8px`,
                backgroundSize: '18px 18px'}}
              className="searchArea"
              placeholder={'Search for movies'}
              onChange={(event: any) => this.setState({ searchContent: event.target.value })} />
          </div>
        </div>
          {this.renderMoviesPage()}
      </div>
    )
  }

  /* Creates view for the movies container. */
  renderMoviesPage() {
    return (
      <div>
        <div>
            <Container>
              <div className="moviesContainer">
                {this.renderMoviesContainer()}
              </div>
            </Container>
        </div>
      </div>
    )
  }

  render() {
  if(this.state.isLoading) {
    return (
      <div style={{"textAlign": "center","paddingTop": "7em"}}>
        <ClipLoader
          sizeUnit={"px"}
          size={150}
          color={'black'}
        />
      </div>
    )
  }
  return (
    <div>
      {this.state.isDisplayMovie ? (
          this.renderDisplayMovie()
      ) : (
          this.renderMovies()
      )}
    </div>
  )
}
}

const styles = {
  row: {
    paddingTop: 40,
  }
}

export default Movies
