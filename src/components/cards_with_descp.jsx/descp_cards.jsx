import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import contextFavList from '../../context/context';
import { useContext } from 'react';
import heartIcon from '../../icons/yellow_heart.png';

const DescpCards = () => {

    const { favList } = useContext(contextFavList);

    return (
        <Row xs={1} md={2} className="g-4">
            {favList.map((movie) => (
                <Col key={movie.id}>
                    <div style={{ position: 'relative', width: '100%', maxWidth: 600, height: 'auto', background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 19, padding: 20 }}>
                        <div style={{ position: 'absolute', top: 10, right: 10, width: 30, height: 30 }}><img src={heartIcon} /></div>
                        
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <img
                                style={{ width: 150, height: 220, borderRadius: 20, objectFit: 'cover' }}
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                            />
                            <div style={{ flex: 1, marginLeft: 20 }}>
                                <div style={{ marginBottom: 10 }}>
                                    <span style={{ color: 'black', fontSize: 32, fontFamily: 'Inter', fontWeight: '600', lineHeight: '1.2' }}>
                                        {movie.title}
                                    </span>
                                    <br />
                                    <span style={{ color: '#858585', fontSize: 14, fontFamily: 'Inter', fontWeight: '400' }}>
                                        {movie.release_date}
                                    </span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', marginTop: 15 }}>
                                    <div style={{ marginLeft: 10, color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400' }}>
                                        {movie.vote_count}
                                    </div>
                                </div>
                                <div style={{ color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word', marginTop: 10, maxHeight: 100, overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                    {movie.overview}
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </Col>
            ))}
        </Row>
    );
};

export default DescpCards;