import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Select from 'react-select';
import * as movieRequests from '../api/movies.js';

/*
  [Movie] returns the movie page for a particular movie.
  User can view all the details of a movie on this page, as
  well as click on the back button to redirect back to the [Movies] page.
  *User can only access this page through the [Movies] page

  Components Utilized:

  Screens it Connects to:
    - Movies (when the user clicks on the Back button)
*/

class Movie extends React.Component {

  render() {
    window.scrollTo(0, 0);
    return (
      <div>
          <div className="movieArea">
            <Container>
              <Row>
                <Col sm={{ span: 4 }}>
                  <div style={styles.profileArea}>
                      <div style={{...styles.profilePicArea,...{backgroundImage: `url(${movieRequests.poster_path_link + this.props.posterPath}`}}}>
                      </div>
                  </div>
                </Col>
                <Col sm={{ span: 8 }}>
                  <h1 className="originalTitle">{this.props.originalTitle} <span className="releaseYear">({this.props.releaseYear})</span></h1>
                  <div style={styles.nameTitleAffiliationArea}>
                    <h5 className="subtitle">Audience Rating</h5>
                    <h5 className="subtext">{this.props.userRating}%</h5>
                    <h5 className="subtitle">Synopsis</h5>
                    <h5 className="subtext">{this.props.overview}</h5>
                    <h5 className="subtitle">Runtime</h5>
                    <h5 className="subtext">{this.props.runtime} min</h5>
                    <h5 className="subtitle">Status</h5>
                    <h5 className="subtext">{this.props.status}</h5>
                    <h5 className="subtitle">Original Language</h5>
                    <h5 className="subtext">{this.props.language}</h5>
                  </div>
                </Col>
              </Row>
              <hr></hr>
          </Container>
         </div>
      </div>
    );
  }
}

const styles = {
  nameTitleAffiliationArea: {
    color: "white",
    textAlign: "left",
    marginTop: "1em",
  },
  profilePicArea: {
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    borderStyle: "solid",
    borderRadius: "5px",
    borderColor: "transparent",
    width: "21em",
    height: "33em",
  }
}

export default Movie;
