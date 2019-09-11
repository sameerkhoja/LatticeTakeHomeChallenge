import React from 'react'
import * as movieRequests from '../api/movies.js';
/*
  [MovieListElement] returns one host movie card, to be
  rendered in the [Movies] screen.
*/

export default class MovieListElement extends React.Component {


  render() {
    return (
      <div
        style={styles.container}
        className="fadeOnHover movieCardBoxShadow"
        >
        <div
          style={{...styles.moviePictureArea,
            ...{backgroundImage: `url(${movieRequests.poster_path_link + this.props.posterPath}`}}}
          onClick={() => this.props.onClick()}>
        </div>
        <div style={styles.textArea}>
          <div style={styles.movieNameArea}>
            <div
              onClick={() => this.props.onClick()}>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  moviePictureArea: {
    height: "21em",
    backgroundSize: "cover",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    borderColor: "transparent",

  },
  container: {
    cursor: "pointer",
    width: 180,
    height: 270,
    marginBottom: "3em",
  },
  textArea: {
    justifyContent: 'space-between',
    marginLeft: "10px",
    marginTop: "-91px",
  },
  movieNameArea: {
    marginTop: "90px",
    height: '100%',
    justifyContent: 'center',
  },
  movieNameText: {
    color: '#2B303A',
    fontSize: 22,
  },
  movieReleaseDate: {
    color: '#2B303A',
    fontSize: 16,
    marginTop: -12,
    position: "relative",
    top: "2em",
  },
  movieDescriptionText: {
    color: '#2B303A',
    fontSize: 16,
    marginTop: 2,
    width: 200,
    height: 20,
    overflow: "hidden",
    whiteSpace: "nowrap",
    display: "block",
    textOverflow: "ellipsis",
  },
  movieLocationText: {
    color: '#2B303A',
    fontSize: 18,
    marginTop: 1,
    position: "absolute",
    top: "10em",
  },
};
