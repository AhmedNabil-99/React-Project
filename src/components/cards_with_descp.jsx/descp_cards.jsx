import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col } from 'react-bootstrap';
import contextFavList from '../../context/context';
import { useContext } from 'react';

const DscpCards = () => {

    const {favList, setFavList} = useContext(contextFavList)

  return (
    <Row xs={1} md={2} className="g-4">
      {favList.map((movie) => (
        <Col key={movie.id}>
          <Card>
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{movie.release_date}</Card.Subtitle>
              <div className="d-flex align-items-center mb-2">
                {/* <span className="ms-2">{movie.vote_count}</span> */}
              </div>
              <Card.Text>
                {movie.overview}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default DscpCards;